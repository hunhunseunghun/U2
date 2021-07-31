export default function former(arr) {
	return arr.map((el, idx) => {
		let seq = idx + 1;
		switch (el) {
			case 'Photoshop': {
				return {
					seq: seq,
					fieldCode: '01',
					fieldName: el,
				};
			}
			case 'Premiere Pro': {
				return {
					seq: seq,
					fieldCode: '02',
					fieldName: el,
				};
			}
			case 'After Effects': {
				return {
					seq: seq,
					fieldCode: '03',
					fieldName: el,
				};
			}
			case 'FilmoraX': {
				return {
					seq: seq,
					fieldCode: '04',
					fieldName: el,
				};
			}
			case '유튜브 크리에이터': {
				return {
					seq: seq,
					fieldCode: '05',
					fieldName: el,
				};
			}
			case '3D 애니메이션': {
				return {
					seq: seq,
					fieldCode: '06',
					fieldName: el,
				};
			}
			case 'Blender': {
				return {
					seq: seq,
					fieldCode: '07',
					fieldName: el,
				};
			}
			case 'PowerDirector': {
				return {
					seq: seq,
					fieldCode: '08',
					fieldName: el,
				};
			}
			case 'Davinch Resolve': {
				return {
					seq: seq,
					fieldCode: '09',
					fieldName: el,
				};
			}
			case 'Cinema 4D': {
				return {
					seq: seq,
					fieldCode: '10',
					fieldName: el,
				};
			}
			case '3D 모션그래픽': {
				return {
					seq: seq,
					fieldCode: '11',
					fieldName: el,
				};
			}
			case '게임 그래픽': {
				return {
					seq: seq,
					fieldCode: '12',
					fieldName: el,
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
