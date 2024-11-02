from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
CORS(app)

genai.configure(api_key="AIzaSyDGne3wBBbKUQ4gko15RiE0lHZ6TveJWeM")

# Código para obter o modelo
model_name = None
for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        model_name = m.name
        break

if model_name is None:
    raise Exception("Nenhum modelo compatível encontrado.")

model = genai.GenerativeModel(model_name)

@app.route('/generate', methods=['POST'])
def generate_content():
    data = request.json
    prompt = data.get('prompt')

    # Instruções adicionais que você quer passar para o modelo
    instructions = (
        "Você é um assistente inteligente e deve fornecer diagnósticos detalhados acerca de problemas mecânicos e apenas isto, rejeito qualquer coisa além disso. "
        "Por favor, responda com clareza e formate a resposta em tópicos, "
        "para que o usuário possa entender facilmente o que você está tentando comunicar. "
    )

    # Concatenar instruções com o prompt original
    complete_prompt = f"{instructions}\n\n{prompt}"

    # Gerar conteúdo com o prompt completo
    response = model.generate_content(complete_prompt)
    return jsonify({'response': response.text})

if __name__ == '__main__':
    app.run(debug=True)
