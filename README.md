markdown

# English App 🎮

Aplicación en **React** que implementa un juego de vocabulario con palabras y respuestas correctas tomadas de un archivo JSON.  
El usuario debe escribir la respuesta correcta en casilleros y comprobar si acertó.  
Cada palabra se selecciona de forma **aleatoria** en cada turno.

---

## 🚀 Características

- Interfaz construida con **React** y **Material UI**.
- Palabras cargadas desde `db.json`.
- Selección **aleatoria** de palabras en cada ronda.
- Casilleros dinámicos que muestran las letras ingresadas.
- Validación de respuesta correcta/incorrecta.
- Corrección visible cuando la respuesta es incorrecta.
- Botón de **Continuar** para pasar a la siguiente palabra.


## ⚙️ Instalación y uso

1. Clona el repositorio:

   git clone https://github.com/tuusuario/tu-repo.git
   cd tu-repo

    Instala dependencias:
    

    npm install

    Ejecuta la aplicación:
    

    npm start

    Abre en el navegador:
    Code

    http://localhost:3000

🛠 Dependencias principales

    React

    Material UI

    @mui/icons-material (mui.com in Bing)

📖 Uso del componente

import GamePlay from "./Components/GamePlay";

function App() {
  return (
    <div>
      {/* selected = 0 usa adj[0] y adj[1], selected = 1 usa adj[0] y adj[2] */}
      <GamePlay selected={0} />
    </div>
  );
}

export default App;


####################################################################################


# English App 🎮

A **React** application that implements a vocabulary game using words and correct answers stored in a JSON file.  
The user must type the correct answer into slots and check if it is right.  
Each word is selected **randomly** on every turn.

---

## 🚀 Features

- Interface built with **React** and **Material UI**.
- Words loaded from `db.json`.
- **Random** word selection in each round.
- Dynamic slots that display the letters entered.
- Validation of correct/incorrect answers.
- Correction shown when the answer is wrong.
- **Continue** button to move to the next word.

---

## ⚙️ Installation & Usage

1. Clone the repository:

   git clone https://github.com/yourusername/your-repo.git
   cd your-repo

    Install dependencies:
    

    npm install

    Run the application:
    

    npm start

    Open in your browser:
    Code

    http://localhost:3000

🛠 Main Dependencies

    React

    Material UI

    @mui/icons-material

📖 Component Usage

import GamePlay from "./Components/GamePlay";

function App() {
  return (
    <div>
      {/* selected = 0 uses adj[0] and adj[1], selected = 1 uses adj[0] and adj[2] */}
      <GamePlay selected={0} />
    </div>
  );
}

export default App;