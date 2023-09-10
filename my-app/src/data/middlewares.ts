export const isCorrectAnswer = (element: HTMLElement) => {
    element.style.backgroundColor = "#DCF8FF";
    element.style.color = '#3EB8D4';
    element.style.borderColor = '#3EB8D4';
}

export const isWrongAnswer = (element: HTMLElement) => {
    element.style.backgroundColor = "#FFDFDC";
    element.style.color = '#FF5341';
    element.style.borderColor = '#FF5341';
}

export const originalStyles = (element: HTMLElement) => {
    element.style.backgroundColor = "white";
    element.style.color = '#000000';
    element.style.borderColor = '#737373';
}

interface Options {
    class: string,
    op: string,
}

export const reorderArray = (array: Options[]) => {
    const newArray = [...array]; // Copia el array original para no modificarlo directamente
    for (let i = newArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
    return newArray
}