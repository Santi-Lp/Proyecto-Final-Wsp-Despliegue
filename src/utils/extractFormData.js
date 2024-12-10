const extraerFormulario = (formulario_campos, formulario_valores) => {
    for( let campo in formulario_campos ){
        formulario_campos[campo] = formulario_valores.get(campo);
    }
    return formulario_campos
}

export default extraerFormulario