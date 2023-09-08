import axios from "axios";

//INFO PROFILE
const profileInfoAppURL = 'https://quiz-7.com/profile.json';

export const profile = async () => {
    try{
        const response = await axios.get(profileInfoAppURL);
        const infoDeApp = response.data;
        console.log('Información de la aplicación:', infoDeApp);
        return infoDeApp;
        } catch (error: any) {
            throw new Error('Error al obtener el archivo:', error);
        }
    }

//INFO CATEGORIAS
const categoriesInfoAppURL = 'https://quiz-7.com/categories.json';

export const categories = async () => {
    try{
        const response = await axios.get(categoriesInfoAppURL);
        const infoDeApp = response.data;
        console.log('Información de la aplicación:', infoDeApp);
        return infoDeApp;
        } catch (error: any) {
            throw new Error('Error al obtener el archivo:', error);
        }
    }

export const categoriesICON = [{ 
    id: 1,
    icon: "https://s3-alpha-sig.figma.com/img/dcf8/dc3c/5e8c33a3b08f9592fc9e1034b468e8e7?Expires=1694995200&Signature=aXPtZ8z-uduyb2grHrfoU9WJwxxKh9OLHfqPBqLC-nDRSuMy7SWKqtCFmYAKHYuqM7AVkjEfP79vE4u-90ri9umktW~XGdDtNf49pZRykYImkkSHskqZIb-HOnIMr63DiUkZdSeLOEJaf0dnUPKR3nAg7noZPCFnjICQAGKpCg4FjrpA6L66Pv9n~kWskr5DSifZqAHNI4pCP89efp~9Pld115p0yKoL-iWn8nwXvxZ01VoEdT-nwKFO1E6lZoKGPLNpkRtCs64jJ6kDlK5FNG7Rk-6t3XZRFZ4PS3KNkBO2vE8IAcL0N2vbZ2z1lqGU9K1f8effs5kG5VOiiA0RYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
}, {id: 2,
    icon: "https://s3-alpha-sig.figma.com/img/7f67/9025/444fc48fcd92fa50ac5fc7f9420f2af0?Expires=1694995200&Signature=O1~IXM7qIzNwqzZqc5jIYLnSo88OJRgobrUVDnVgATBKNSRmeGbSMWvuwXgkSNipBTR5oPLDftUi-5Av59TwMFhsAf0HAlI5bOUn1LLTY8DLIYIXA7IrtOz8DgoNhhM7ieoEdGfOixzd81pE-AJX-yxZvpZzesrwV8N5-gJLgqrsUBLLGhiMA7baZa5Zurh6HbNX0weiY0dQQncdLnlDQY4WydiHoVr~-tEpR8QWTEr7sIU2scXhCf-pIZccOwWJSDviBRUroB5zKFCYB2I90QI5hDL~xJM9IUENvBychwKACjAQCZ~PoDgD0wE~j66kOAcp8ck2eRrTzkipUFPHhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
}, {id: 3,
    icon: "https://s3-alpha-sig.figma.com/img/10a5/62ca/b5b0aed9c15599021db14aa50b5a64c9?Expires=1694995200&Signature=Pxh4Qt8XQDbctStFmrib9Xk~qbpoUZiEhefcNA0cxle225brYGKKUs9tf3eitCdSDYZcRvAKGtPLzzwsi7PPK5ZAL8E0Vc27tccXEMw1EO-BcNKiQEf-5QVOxhVOAmILI8Q4fzfOSclcltl3cQ7d0Te9RFM9oeGjm5Wnia~iWZyCnWAZQsLfQBpIg8VsZu0KOL7-wHpIbTux31S~D4eZeqLp1s-2JbC1oMt1tyR3Z7qPtw2yvyi~d8~HKpU9yAcnxIXHg4LiHE1eu2LMfSm76CYHfsEK1E~iktZA8RDJOe0i52Er5f84upK-H2c02BBpH6zxFfjYfrLK8XKep48AEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
}, {id: 4,
    icon: "https://s3-alpha-sig.figma.com/img/ca00/53ff/630d14fc50713f03ee22ee7b69d54bb6?Expires=1694995200&Signature=d7ckw2LG73K~a9cLamMIKt4rV2~qRClTzuvYxmxBFaOU0iqm9fukUjyfG2PVorCBtB~DHG-HbPdaH5eWatHxIdfQ2AX-qatseuDz41cE2d74vAIwTCkcNMT8PQenJ1619CVsp3NPad6Qwfw2We4PdEvVFZGJY5tMRWdLm8ryZqS9Mvyui8S8bYWpVbLzEkAms1KMJlFBX4IHTmY7B5HL8NNwE7zHip-VxEUtMLHeaAV6~H5TBemy0xKZ6C4kzwPB0eVWAtU6x1PTv~5hwU2jOLvR92FLnlDSCFD3Sgjs7GCjfI3840r0Auyh37o~TscuhbSj4NNNmEIajDOmt~EGuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
}, {id: 5,
    icon: "https://s3-alpha-sig.figma.com/img/2b26/7dcd/4c83aa4faa4b74bb7ba9d0f13049097c?Expires=1694995200&Signature=mVMDr~scBX6Zhb7DYVTqaeDvkLw7nBODgsJPx18JHpTauARG39t2vIw~P-BSDn65CKcZrs0z7WII0kH-BON6bvAwYcUxkWdO3hnG5ZrSyZ-VDrR7-kKPO3dgqFqkndtWjehTrK8U0PqrWB3h8iApZMeSsTvoSFG-bG-0yrcZIAXqvZsGsmOMuHJ00RuW2GBP5T3fzOUhF5VtrkUOBPKcTFs1pL0Rb76c6swVDebTZo8JIqKNJp3xi9hrSk1yFuCiN4StsnC7wJLQDUeByAmtMSJqFPkHOkzBj095wTVC-sRF~p0IWhQRUzVkPEcKOFcNs2qHsIRTQ4W9QS4n03RTFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
}, {id: 6,
    icon: "https://s3-alpha-sig.figma.com/img/b05f/aec7/8e164eb214da407c390d61e6da677074?Expires=1694995200&Signature=mQtzU0WVVY9cHXguSvoiZ5WsYBUoc9obP8rLfOR9gsFtV3BFsDmsqbg~l~ruOModn1HZ00XSBbvLV7PvCvk~OQpevssvVkdWLxJt9D1qc92zt0U23ms2OidLpMRvwH~gVGXbsXtBtE-4baCZJ1aGHkUHyltpNYDI54vyVGtnQyiHn55fI9MC3r0lLCh7sHBqyBNm6owkMs9xrxq1oNL9XGfAaioUygSTONTXCetUsBLCb2-0IRQEVdVxpz54ALbTQGuZdpOWUk2iSxLpSBFkpAr-ANlY9x2XSJK7ZB9mulmbpxJwedyrWAsxsCOYwh6Lb5dYNaSXqzZcJQTFWJn50g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
}]

//GET QUESTIONS


export const questions = async (id: string) => {
    const questionsInfoAppURL = `https://quiz-7.com/questions/${id.toString()}.json`
    try{
        const response = await axios.get(questionsInfoAppURL);
        console.log(id)
        console.log(typeof id)
        const infoDeApp = response.data;
        console.log('Información de la aplicación:', infoDeApp);
        return infoDeApp;
        } catch (error: any) {
            throw new Error('Error al obtener el archivo:', error);
        }
    }
