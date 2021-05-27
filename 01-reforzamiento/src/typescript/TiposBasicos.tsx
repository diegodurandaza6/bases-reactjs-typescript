export const TiposBasicos = () => {
    const nombre: string = 'Diego';
    const edad : number = 31;
    const estaActivo: boolean = false;

    const poderes: string[] = ['velocidad', 'fuego', 'volar'];
    
    return (
        <div>
            <h3>Tipos básicos</h3>
            { nombre }, { edad }, { (estaActivo) ? 'ACTIVO' : 'INACTIVO' }
            <br />
            { poderes.join(', ')}
        </div>
    )
}
