import { createStitches } from '$lib/createStitches';
import type Stitches from '@stitches/core/types/stitches';

let cachedConfig: Stitches;

export const getCachedConfig = () => cachedConfig || (cachedConfig = createStitches());
