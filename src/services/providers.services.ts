import { FindOptions, Op } from 'sequelize'
import { CreateServiceProviderI } from '../interfaces/providers.interface'
import { Providers } from '../models/provider.model'
import { ProviderServices } from '../models/provider_services.model'
import { Reviews } from '../models/review.model'
import { Users } from '../models/user.model'
import { getCloudinaryResizedImage } from '../utils/cloudinary'

const EARTH_RADIUS = 6371000

const providerServices = {
  createProvider: async (provider: any) => {
    try {
      if (!provider.phoneProvider || !provider.latitude || !provider.UserId || !provider.longitude) {
        throw new Error('Mission Data')
      }
      const newProvider = await Providers.create({
        phoneProvider: provider.phoneProvider,
        latitude: provider.latitude,
        longitude: provider.longitude,
        UserId: provider.UserId,
      })
      return newProvider
    } catch (error) {
      throw new Error(error as string)
    }
  },
  getAllProviders: async () => {
    try {
      const providers = await Providers.findAll({
        include: Reviews,
      })
      return providers
    } catch (error) {
      console.log(error)
      throw new Error(error as string)
    }
  },
  getProviderById: async (id: string) => {
    try {
      const userId = await Providers.findOne({
        where: {
          id,
        },
        include: Reviews,
      })
      return userId
    } catch (error) {
      throw new Error('Error Searching The Data')
    }
  },
  updateProvider: async (id: string, newData: any) => {
    try {
      const providerToUpdate = await Providers.findByPk(id)
      if (!providerToUpdate) {
        throw new Error('Id not found in database' as string)
      }
      const updatedProvider = await providerToUpdate.update(newData)
      return updatedProvider
    } catch (error) {
      throw new Error(error as string)
    }
  },
  createServiceProvider: async (
    providerId: string,
    serviceData: CreateServiceProviderI
  ) => {
    try {
      const [instance, created] = await ProviderServices.findOrCreate({
        where: {
          ProviderId: providerId,
          ServiceId: serviceData.ServiceId,
        },
        defaults: {
          ProviderId: providerId,
          ServiceId: serviceData.ServiceId,
          price: serviceData.price,
          providerDescription: serviceData.providerDescription,
          estimatedMinutes: serviceData.estimatedMinutes,
        },
      })
      if (!created) {
        throw { status: 400, msg: 'Provider already has the service' }
      }
    } catch (error: any) {
      throw error
    }
  },
  getProvidersByDistance: async (
    lat: number,
    lon: number,
    distance: number = 200,
    serviceId?: string
  ) => {
    try {
      const dLat = toDegrees(distance / EARTH_RADIUS)
      const dLon = toDegrees(
        distance / (EARTH_RADIUS * Math.cos((Math.PI * lat) / 180))
      )

      const latMin = lat - dLat
      const latMax = lat + dLat
      const lonMin = lon - dLon
      const lonMax = lon + dLon

      const query:FindOptions = {
        include: [{
          model: ProviderServices,
          where: serviceId ? { ServiceId: serviceId } : {ServiceId: '4917ee58-a1c3-4fc8-9f35-e8ed93d42b30'},
          attributes: ['price', 'estimatedMinutes']
        }, 
      {
        model:Users,
        attributes:['firstName', 'lastName', 'photo']
      }],
      attributes:['id', 'UserId', 'latitude', 'longitude'],
        where: {
          latitude: {
            [Op.gte]: latMin,
            [Op.lte]: latMax,
          },
          longitude: {
            [Op.gte]: lonMin,
            [Op.lte]: lonMax,
          },
        },
      }

      const providers = await Providers.findAll(query)
      const filteredProviders = providers.filter(provider => {
        const providerDistance = calculateDistance(lat, lon, provider.dataValues.latitude, provider.dataValues.longitude); // Función para calcular la distancia euclidiana
        return providerDistance <= distance;
      }).map((prov)=>{
        return {
          id: prov.get('id'),
          name: `${prov.dataValues.User.firstName} ${prov.dataValues.User.lastName}`,
          img: prov.dataValues.User.photo && getCloudinaryResizedImage(prov.dataValues.User.photo, 100),
          lat: prov.get('latitude'),
          lng: prov.get('longitude')
        }
      });
  
      return filteredProviders;
    } catch (error) {
      throw error
    }
  },
}

function toRadians(grados: number) {
  return grados * (Math.PI / 180)
}

function toDegrees(radianes: number) {
  return radianes * (180 / Math.PI)
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = EARTH_RADIUS;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}
export default providerServices
