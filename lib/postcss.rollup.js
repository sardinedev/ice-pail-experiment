import { spawn } from 'child_process';

export default async function postCSSBuild(files, outPath, { watch } = {}) {
  const firstDir = files.split('/')[0];
  const opts = [files, '--dir', outPath, '--base', firstDir];
  const proc = spawn('postcss', opts, { stdio: 'inherit' });

  await new Promise(resolve => {
    proc.on('exit', code => {
      if (code !== 0) {
        throw Error('postCSS build failed');
      }
      resolve();
    });
  });

  if (watch) {
    spawn('postcss', [...opts, '--watch'], { stdio: 'inherit' });
  }
}
