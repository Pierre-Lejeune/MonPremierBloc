import MonPremierBlocEdit from './MonPremierBlocEdit'; //Notre bloc sur l'interface d'administration
import MonPremierBlocSave from './MonPremierBlocSave'; //Notre bloc sur l'interface public
export const name = "mon-premier-bloc"; //Le nom de notre bloc
export const settings = { // Les paramètres de notre bloc
	title: "Mon Premier Bloc",  //Le titre de notre bloc 
	description: "Ceci est mon premier bloc !", // La description de notre bloc
	category: "text", //La category de notre bloc
	icon:"smiley", //L'icon de notre bloc
	edit:MonPremierBlocEdit, // La fonction à appeler pour afficher notre bloc sur l'interface d'administration
	save:MonPremierBlocSave // La fonction à appeler pour afficher notre bloc sur l'interface public
}
