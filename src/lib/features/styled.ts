import type { CSS } from '@stitches/core';
import type Stitches from '@stitches/core/types/stitches';

export const createStyledFunction = ({ css, config }: Stitches) => {
	const styled = (node: Element, parameters: CSS<typeof config>) => {
		node.classList.add(css(parameters)());

		return {
			destroy() {
				// the node has been removed from the DOM
			}
		};
	};

	return styled;
};
