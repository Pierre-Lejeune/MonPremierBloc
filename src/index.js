import { registerBlockType } from '@wordpress/blocks';

import * as MonPremierBloc from './MonPremierBloc/MonPremierBloc';
export const listeDeBlocsCustomises = () => [
	MonPremierBloc,
]

const registerBlock = (block) => {
    if ( ! block ) {
		return;
	}
	const { name, settings } = block;
	registerBlockType( `pierrelejeune/${name}`, settings );
}
const registerPierrelejeuneBlocks = (blocks = listeDeBlocsCustomises()) => {
	blocks.forEach( registerBlock );
};
registerPierrelejeuneBlocks();