const dicreaseDays = (date, days) => {

    const decreasedDate = date - days * 24 * 60 * 60 * 1000
    
    const convertToDate = new Date(decreasedDate)
   
    
    const anio = convertToDate.getFullYear();
    const mes = String(convertToDate.getMonth() + 1).padStart(2, '0'); 
    const dia = String(convertToDate.getDate()).padStart(2, '0');

    // Formatear a YYYY-MM-DD
    const fechaFormateada = `${anio}-${mes}-${dia}`;
    
    return fechaFormateada
}

export { dicreaseDays }