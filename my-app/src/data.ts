import axios from "axios";

// URL del archivo que contiene la información de tu aplicación
const archivoInfoAppURL = 'https://quiz-7.com/profile.json';

// Hacer una solicitud GET para obtener el archivo
export const profile = async () => {
    try{
        const response = await axios.get(archivoInfoAppURL);
        const infoDeApp = response.data;
        console.log('Información de la aplicación:', infoDeApp);
        return infoDeApp;
        } catch (error: any) {
            throw new Error('Error al obtener el archivo:', error);
        }
    }

