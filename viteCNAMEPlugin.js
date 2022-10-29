import * as fs from "fs";
import { resolve } from 'path';

let viteConfig = null;

export default function viteCNAMEPlugin({ domain = '' }) {
  return {
    name: 'viteCNAMEPlugin',
    configResolved(resolvedConfig) {
      viteConfig = resolvedConfig;
    },
    writeBundle() {
      const outDir = resolve(viteConfig?.build?.outDir || 'dist');

      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }

      const fileOutPath = resolve(outDir, 'CNAME');
      fs.writeFileSync(fileOutPath, domain);
    }
  }
}
