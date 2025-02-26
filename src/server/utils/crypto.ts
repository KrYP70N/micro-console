import * as CryptoJS from 'crypto-js';
import { env } from 'process';

const SECRET = env.AUTH_SECRET ?? "";

export const encrypt = (data: string) => {
  return CryptoJS.AES.encrypt(data, SECRET).toString();
}

export const decrypt = (data: string) => {
  return CryptoJS.AES.decrypt(data, SECRET).toString();
}

export const compare = (dataInput: string, dataCompare: string) => {
  const decryptedInput = decrypt(dataInput);
  const decryptedCompare = decrypt(dataCompare);
  return decryptedInput === decryptedCompare;
}