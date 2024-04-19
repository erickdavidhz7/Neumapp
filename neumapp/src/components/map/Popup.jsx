import ButtonUI from "../UI/Button/Button";

export function CustomPopUp({ img, name }) {
  return (
    <>
      <div class="flex flex-col items-center justify-center max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-1/2 h-1/2" src={img} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <p>{name}</p>
        </div>
        <div class="flex items-center justify-center">
          <ButtonUI>Pedir ahora</ButtonUI>
        </div>
      </div>
    </>
  );
}
