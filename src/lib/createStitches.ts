import { createStitches as createStitchesCore } from '@stitches/core';
import { createStyledFunction } from '$lib/features/styled';

export const createStitches = (init) => {
	const instance = createStitchesCore(init);

	const styled = createStyledFunction(instance);

	return { styled, ...instance };
};
