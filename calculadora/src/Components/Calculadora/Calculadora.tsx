import React, { useContext, useEffect } from "react";
import { useState, type ChangeEvent } from "react";
import "./Calculadora.css";
import { MdInfoOutline } from "react-icons/md";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CalculateIcon from "@mui/icons-material/Calculate";
import {
  calcularBase,
  calcularBaseFormato,
  FACTOR,
  formatNumber,
} from "./utilities";
import { Button } from "@mui/material";
import { CalculaContext } from "../../Context/contextCalculadora";
import Checkbox from "@mui/material/Checkbox";

export function Calculadora() {
  const [carValue, setCarValue] = useState<string>("");
  const [optionFactor, setOptionFactor] = useState(1.0);
  const [errorInput, setErrorInput] = useState<boolean>(false);
  const [checkInput, setCheckInput] = useState<boolean>(false);

  const context = useContext(CalculaContext);
  if (!context) {
    throw new Error("Calculadora debe renderizarse dentro de CalculaProvider.");
  }
  const { datosCalcula, setDatosCalcula } = context;

  useEffect(() => {
    console.log("Datos de calculadora actualizados:", datosCalcula);
  }, [datosCalcula]);

  const onChangeInputCarValue = (event: ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value.replace(/\D/g, "");
    setCarValue(valor);
    const valorMonetario = Number(valor);
    setCarValue(valor);
    if (valorMonetario >= 20000000 && valorMonetario <= 300000000) {
      setErrorInput(false);
    } else {
      setErrorInput(true);
    }
  };

  const onChangeSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const valor: number = Number(event.target.value);
    setOptionFactor(valor);
  };

  const onClickCalcularBtn = () => {
    console.log("BTN");
    setDatosCalcula({
      ...datosCalcula,
      factor: optionFactor,
      precio: Number(carValue),
      seguro: calcularBase(Number(carValue), optionFactor),
      seguroFormato: calcularBaseFormato(Number(carValue), optionFactor),
      needCar: checkInput
    });
  };

  const onChangeCheck = () => {
    setCheckInput((prev) => !prev);
  };

  const outlinedAmountId = React.useId();
  return (
    <div className="calculadora">
      <h2>1. Cuéntanos sobre tu vehículo</h2>
      <form className="calculadora-board">
        <div className="calculadora-precio">
          <label htmlFor="precio">
            Valor comercial del vehículo <MdInfoOutline />
          </label>
          <FormControl sx={{ m: 1, width: "50ch" }}>
            <OutlinedInput
              id={`${outlinedAmountId}-input`}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              name="precio"
              type="text"
              value={formatNumber(carValue)}
              onChange={onChangeInputCarValue}
              inputMode="numeric"
              placeholder="Ingresa el valor de tu automóvil"
              className="calculadora-board-input"
            />
          </FormControl>
          {errorInput && (
            <div className="alert">
              {" "}
              El número debe estar entre los 20 millones y los 300 millones de
              COP
            </div>
          )}
        </div>

        <div className="calculadora-opciones">
          <label htmlFor="opciones">
            Antiguedad del vehículo <MdInfoOutline />
          </label>

          <TextField
            select
            defaultValue={20}
            sx={{ m: 1, width: "48ch" }}
            name="opciones"
            value={optionFactor}
            onChange={onChangeSelect}
          >
            {FACTOR.map((item) => {
              return <MenuItem value={item.fact}>{item.text}</MenuItem>;
            })}
          </TextField>

          <div className="calculadora-need">
            <Checkbox value={checkInput} size="small" />
            <span className="text-sm pt-2" onChange={onChangeCheck}>
              Necesito vehiculo de reemplazo en caso de siniestro
            </span>
          </div>
        </div>
        <Button
          type="button"
          variant="contained"
          endIcon={<CalculateIcon />}
          onClick={onClickCalcularBtn}
          disabled={errorInput}
        >
          Calcular y comparar planes
        </Button>
      </form>
    </div>
  );
}
