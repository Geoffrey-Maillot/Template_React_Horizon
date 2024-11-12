import React, { CSSProperties } from "react";

const scaleNames = {
  c: "Celcius",
  f: "Fareiheight",
};

const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

const TryConvert = (temp, convert) => {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) return "";

  const output = convert(input);
  const rounded = Math.round(output * 100) / 100;
  return rounded.toString();
};

// BoilingVerdict
export const BoilingVerdict = ({ temp }) => {
  const style = {
    info: {
      width: "50%",
      padding: "20px",
      margin: "20px auto",
      backgroundColor: temp >= 100 ? "lightgreen" : "#cf7979",
      color: temp >= 100 ? "#073407" : "#240404",
      textAlign: "center",
    },
  };

  return (
    <div style={style.info as CSSProperties}>
      {temp >= 100 ? "Leau boue!" : "L' eau de boue pas "}
    </div>
  );
};

// temperatureInput
export const TemperatureInput = ({ handlerOnChange, scale, temp }) => {
  const style = {
    calculator: {
      margin: "20px auto",
      width: "100%",
      textAlign: "center",
    },

    input: {
      margin: "10px auto 0 auto",
      widht: "200px",
      padding: "10px",
      display: "block",
    },
  };

  return (
    <div style={style.calculator as CSSProperties}>
      <label htmlFor="celcius"> Rentrer une température ({scale} )</label>
      <input
        id={scale}
        style={style.input}
        type="number"
        placeholder="Rentrer une temperature"
        name={scale}
        value={temp}
        onChange={handlerOnChange}
      />
    </div>
  );
};

// App
export const Convertisseur = () => {
  const [temp, setTemp] = React.useState("");
  const [scale, setScale] = React.useState("Celcius");

  const celcius = scale === "Celcius" ? temp : TryConvert(temp, toFahrenheit);
  const fareiheight =
    scale === "Fareiheight" ? temp : TryConvert(temp, toCelsius);

  const handlerOnchange = (e) => {
    setTemp(e.target.value);
    setScale(e.target.name);
  };

  return (
    <div>
      <BoilingVerdict temp={celcius} />
      <TemperatureInput
        handlerOnChange={handlerOnchange}
        scale={scaleNames.c}
        temp={celcius}
      />
      <TemperatureInput
        handlerOnChange={handlerOnchange}
        scale={scaleNames.f}
        temp={fareiheight}
      />
    </div>
  );
};
