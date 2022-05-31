import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHorario } from "../../../features/horas/horasSlice";
import moment from "moment";
import { ValidHoras } from "../../../common";

function Inputs() {

    const dispatch = useDispatch();

    const [inicio, setInicio] = useState("");
    const [fim, setFim] = useState("");
    const [desc, setDesc] = useState("");

    const [inicioValid, setInicioValid] = useState(false);
    const [fimValid, setFimValid] = useState(false);

    const inicioChanged = (e) => {
        setInicio(e.target.value)
        setInicioValid(ValidHoras(e))
    }
    const fimChanged = (e) => {
        setFim(e.target.value)
        setFimValid(ValidHoras(e))
    }

    const calcularTotal = (inicio, fim) => {
        let start = moment(inicio, "HH:mm")
        let end = moment(fim, "HH:mm")
        console.log(moment.duration(end.diff(start)));
        return (
            moment.duration(end.diff(start))._data.hours 
            + ":" +
            moment.duration(end.diff(start))._data.minutes
        );
    };

    const totalInMinutes = (inicio, fim) => {
        let start = moment(inicio, "HH:mm");
        let end = moment(fim, "HH:mm");
        return (
            parseInt(moment.duration(end.diff(start))._data.minutes) +
            parseInt(moment.duration(end.diff(start))._data.hours) * 60
        );
    };

    const AdicionarHorario = () => {
        dispatch(
            addHorario({
                inicio,
                fim,
                desc,
                total: calcularTotal(inicio, fim),
                totalMins: totalInMinutes(inicio, fim),
            })
        );
        setInicio("");
        setFim("");
        setDesc("");
    };

    return (
        <div className="form-box">
            <div>

                <div className="form-box-linha">
                    
                    <div className="input-box">
                        <label htmlFor="horas-inicio" className="form-input-label">
                            Início
                        </label>

                        <input
                            value={inicio}
                            onChange={inicioChanged}
                            id="horas-inicio"
                            className="form-input-horas"
                            placeholder="00:00"
                            autoComplete="off"
                        ></input>
                    </div>

                    <div className="input-box">
                        <label htmlFor="horas-fim" className="form-input-label">
                            Fim
                        </label>

                        <input
                            value={fim}
                            onChange={fimChanged}
                            id="horas-fim"
                            className="form-input-horas"
                            placeholder="00:00"
                            autoComplete="off"
                        ></input>
                    </div>

                </div>
            
                <div className="form-box-linha">
                    <div className="input-box-desc">
                        <label htmlFor="horas-desc" className="form-textarea-label">
                            Descrição
                        </label>

                        <textarea
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            id="horas-desc"
                            className="form-textarea"
                        ></textarea>
                    </div>
                </div>
                
            </div>

            
            <div className="button-box">
                <button
                    disabled={!((fimValid && inicioValid) && (inicio && fim))}
                    onClick={AdicionarHorario}
                    className="form-button"
                >
                    Adicionar
                </button>
            </div>
            
        </div>
    );
}

export default Inputs;
