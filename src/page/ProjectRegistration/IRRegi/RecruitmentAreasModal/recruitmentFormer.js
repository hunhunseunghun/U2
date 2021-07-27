export default function former(arr) {
	return arr.map((el, idx) => {
		let seq = idx + 1;
		switch (el) {
			case 'Photoshop': {
				return {
					seq: seq,
					fieldCode: '01',
					// fieldName: "Photoshop"
				};
			}
			case 'Premiere Pro': {
				return {
					seq: seq,
					fieldCode: '02',
					// fieldName: "Photoshop"
				};
			}
			case 'After Effects': {
				return {
					seq: seq,
					fieldCode: '03',
					// fieldName: "Photoshop"
				};
			}
			case 'FilmoraX': {
				return {
					seq: seq,
					fieldCode: '04',
					// fieldName: "Photoshop"
				};
			}
			case '유튜브 크리에이터': {
				return {
					seq: seq,
					fieldCode: '05',
				};
			}
			case '3D 애니메이션': {
				return {
					seq: seq,
					fieldCode: '06',
				};
			}
			case 'Blender': {
				return {
					seq: seq,
					fieldCode: '07',
				};
			}
			case 'PowerDirector': {
				return {
					seq: seq,
					fieldCode: '08',
				};
			}
			case 'Davinch Resolve': {
				return {
					seq: seq,
					fieldCode: '09',
				};
			}
			case 'Cinema 4D': {
				return {
					seq: seq,
					fieldCode: '10',
				};
			}
			case '3D 모션그래픽': {
				return {
					seq: seq,
					fieldCode: '11',
				};
			}
			case '게임 그래픽': {
				return {
					seq: seq,
					fieldCode: '12',
				};
			}
			default: {
				return {
					seq: seq,
					fieldCode: '99',
					fieldName: el,
				};
			}
		}
	});
}
