import { useBlockProps } from '@wordpress/block-editor';// Récupération de la méthode permettant à Wordpress de nous transmettre les attributs propres à notre bloc

const MonPremierBlocSave = () => {//La fonction affichant notre premier bloc sur l'interface public
	const blockProps = useBlockProps.save();// Récupération des attributs propres à notre bloc
    return (
		<div {...blockProps}>
            <p>Mon premier bloc</p>
		</div>
	);//Affichage de notre bloc
}

export default MonPremierBlocSave;
