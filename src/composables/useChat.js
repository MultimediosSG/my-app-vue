import { ref } from "vue";

export const useChat = () => {

    const messages = ref([]);

    async function getResponseApi() {
        const resp = await fetch('https://yesno.wtf/api')
        const data = await resp.json()

        return data;
    }

    async function onMessage(text) {
        messages.value.push({
            id: new Date().getTime(),
            itsMine: true,
            message: text,
        })

        if (!text.endsWith('?')) return;
        setTimeout(async () => {
            const data = await getResponseApi()
            console.log(data);

            messages.value.push({
                id: new Date().getTime(),
                itsMine: false,
                message: data.answer,
                image: data.image
            })
        }, 1000)


    }


    return {
        //propiedad
        messages, // arreglo de mensajes
        //funciones
        onMessage // funcion para agregar al arreglo
    }
}