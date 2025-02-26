import * as CryptoJS from 'crypto-js';
import { env } from 'process';

const SECRET = env.AUTH_SECRET ?? "";

export const encrypt = (data: string) => {
  try {
    return CryptoJS.AES.decrypt(data, SECRET).toString();
  } catch {
    throw new Error('Encryption failed.');
  }
}

export const decrypt = (data: string) => {
  try {
    return CryptoJS.AES.decrypt(data, SECRET).toString();
  } catch {
    throw new Error('Encryption failed');
  }
}

export const compare = (dataInput: string, dataCompare: string) => {
  const decryptedInput = decrypt(dataInput);
  const decryptedCompare = decrypt(dataCompare);
  return decryptedInput === decryptedCompare;
}