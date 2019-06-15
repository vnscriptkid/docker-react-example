import process from 'process';

afterAll(() => {
    console.log('process: ', process);
    process.exit(0);
})