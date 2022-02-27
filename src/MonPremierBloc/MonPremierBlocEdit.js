import { useBlockProps} from '@wordpress/block-editor'; // Récupération de la méthode permettant à Wordpress de nous transmettre les attributs propres à notre bloc

const MonPremierBlocEdit = () => { //La fonction affichant notre premier bloc sur l'interface d'administration
	const blockProps = useBlockProps() // Récupération des attributs propres à notre bloc
	return ( 
        <div {...blockProps}> 
            <p>Mon premier Bloc</p>
        </div>
	); //Affichage de notre bloc
}
export default MonPremierBlocEdit;
