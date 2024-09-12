# Modal React Classico

`modal-react-classico` est un plugin de modal simple et configurable pour les applications React. Il fournit une modal basique avec des fonctionnalités de confirmation et d'annulation, et permet de personnaliser le style via des classes CSS.

## Installation

Pour installer le plugin, utilise npm ou yarn :

```bash
npm install modal-react-classico
```

ou

```bash
yarn add modal-react-classico
```

## Utilisation

Importe le composant Modal dans ton fichier React :

```javascript
import Modal from 'modal-react-classico';

const MyForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleConfirm = async () => {
    // Ajoute tes fonctionnalités ici (exemples : envoyer tes données)
    setModalOpen(false);
  };

  return (
      <form>
        {/* Ton formulaire ici */}
        <button onClick={handleOpenModal}>Submit</button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
          title="Confirmation"
        >
          <p>Are you sure you want to submit?</p>
        </Modal>
      </form>
    </Formik>
  );
};

export default MyForm;
```

## Props du Composant Modal

- **`isOpen`** ( _boolean_ ): Indique si la modal est ouverte ou non.
- **`onClose`** ( _function_ ): Fonction appelée lorsque l'utilisateur ferme la modal. Elle est généralement utilisée pour fermer la modal.
- **`onConfirm`** ( _function_ ): Fonction appelée lorsque l'utilisateur confirme l'action. Elle est généralement utilisée pour effectuer une action après confirmation, comme soumettre un formulaire.
- **`title`** ( _string_, optionnel ): Le titre de la modal. Il sera affiché en haut de la modal. Si non spécifié, la modal affichera "Modal Title" par défaut.
- **`children`** ( _node_, optionnel ): Le contenu de la modal. Cela peut inclure tout élément React, comme des formulaires, des messages ou des boutons.
