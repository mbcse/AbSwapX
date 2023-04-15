import { ethers } from 'ethers';
import abi from "../abis/ERC_20.json";;

export const instanceContract = () => {

    try {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractReader = new ethers.Contract(
            "0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747",
            abi,
            signer
        );
        return contractReader;


    } catch (error) {
        console.error(error);
    }

    return null;
}
