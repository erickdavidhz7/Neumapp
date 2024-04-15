import { MercadoPagoConfig, Preference } from "mercadopago";
import { envs } from "../utils/constants";

const client = new MercadoPagoConfig({ accessToken: envs.ACCESS_TOKEN });

const paymentsServices = {

  createMercadoPagoPreference: async (orderDetails: any) => {
    const client = new MercadoPagoConfig({ accessToken: envs.ACCESS_TOKEN });

    const preference = new Preference(client);

    const items = orderDetails.items.map((item: any) => ({
      title: item.title,
      quantity: item.quantity,
      currency_id: "ARS",
      unit_price: item.unit_price,
      description: item.description,
    }));
    const payer = {
      name: orderDetails.payer.name,
      email: orderDetails.payer.email,
    };
    console.log(payer);

    try {
      const result = await preference.create({
        body: {
          items,
          payer,
          back_urls: {
            success: `https://localhost:3001/payments/callback`,
            failure: `https://localhost:3001/payments/callback`,
          },
          auto_return: "approved",
        },
      });

      console.log("OK", result);
      return result;
    } catch (error) {
      console.error(
        "Error al crear la preferencia de pago en MercadoPago:",
        error
      );
      throw error;
    }
  },

  resultCallback: async (status: string) => {

    status === null
    ? console.log('pago Rechazado')
    : console.log('Pago Aprovado')
  },
};
export default paymentsServices;
