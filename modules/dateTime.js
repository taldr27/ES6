import { DateTime } from './luxon.js';

const now = DateTime.now();

const dt = now.toLocaleString(DateTime.DATETIME_MED);

export default dt;