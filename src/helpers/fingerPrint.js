import Fingerprint2 from 'fingerprintjs2';

const getFingerPrint = () => {
	return new Promise( resolve =>
		Fingerprint2.get(components => {
			resolve(
				Fingerprint2.x64hash128(
					components.map(component => component.value).join(''),
					31
				)
			);
		})
	);
}

export default getFingerPrint;