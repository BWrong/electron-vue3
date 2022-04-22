

import { nativeTheme } from 'electron';
import {exposeInMainWorld} from './utils/exposeInMainWorld';


exposeInMainWorld('nativeTheme', nativeTheme);