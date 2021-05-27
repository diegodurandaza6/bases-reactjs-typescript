import { useRef, useState, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = (initialState: Usuario[] = []) => {

    const [usuarios, setUsuarios] = useState<Usuario[]>(initialState);
    const paginaRef = useRef(1);

    useEffect(() => {
        //Llamado al API
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        //Llamado al API
        const res = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        });
        if(res.data.data.length > 0){
            setUsuarios(res.data.data);
        }else{
            paginaRef.current--;
            alert('No hay mas registros')
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
