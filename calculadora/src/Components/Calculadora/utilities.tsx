export const FACTOR = [
  { fact: 1.0, text: "0 a 2 años" },
  { fact: 1.10, text: "3 a 5 años" },
  { fact: 1.25, text: "6 a 10 años" },
  { fact: 1.40, text: "Más de 10 años" },
];


export const formatNumber = (value: string) => {
    if (!value) return "";

    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

export const calcularBase = (valCar: number, factor:number) => {

    return valCar*0.03*(factor)

}


export const calcularBaseFormato = (valCar: number, factor:number) => {

    return '$'+formatNumber(String(calcularBase(valCar,factor)))

}