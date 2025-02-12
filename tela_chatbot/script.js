function sendMessage() {
  const chatBox = document.getElementById("chatBox");
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();

  if (message === "") return;

  // Criar a mensagem do usuário
  const userMessage = document.createElement("div");
  userMessage.classList.add("message", "user-message");
  userMessage.textContent = message;
  chatBox.appendChild(userMessage);

  chatBox.style.display = "flex";
  chatBox.style.flexDirection = "column";

  // Garantir que a mensagem do usuário seja exibida corretamente
  setTimeout(() => {
    userMessage.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 100);

  // Obter resposta do bot
  const botResponse = generateBotResponse(message);

  // Responder apenas se houver um retorno válido
  if (botResponse) {
    setTimeout(() => {
      const botMessage = document.createElement("div");
      botMessage.classList.add("message", "bot-message");
      botMessage.textContent = botResponse;
      chatBox.appendChild(botMessage);

      // Rolar para mostrar a resposta completa
      setTimeout(() => {
        botMessage.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 100);
    }, 500);
  }

  // Limpar o input
  userInput.value = "";
}

// Função para gerar respostas do bot
function generateBotResponse(userMessage) {
  const responses = {
    "oi": "Oi, como posso ajudar?",
    "instituto de computação": "O melhor Instituto de Computação é o da UFBA.",
    "ic": "Viva o IC!",
    "boa noite": "Olá, boa noite! Como posso te ajudar hoje?",
    "quinto semestre": "As disciplinas obrigatórias do curso de Sistemas de Informação são:\n\n- Banco de Dados\n- Paradigmas de Linguagens de Programação\n- Engenharia de Software II\n- Métodos Quantitativos Aplicados à ADM\n- Laboratório de Programação Web",
    "obrigado": "Disponha! Se precisar de algo mais, é só falar comigo.",
    "olá": "Olá, tudo bem?",
    "ajuda": "Oi! Em que posso te ajudar?"
  };

  // Converter a mensagem do usuário para minúsculas
  userMessage = userMessage.toLowerCase();

  // Procurar palavras-chave no dicionário
  for (const key in responses) {
    if (userMessage.includes(key)) {
      return responses[key];
    }
  }

  // Resposta padrão se nenhuma correspondência for encontrada
  return "Desculpe, não entendi sua pergunta. Pode reformular?";
}
