import { useActions } from 'hooks/useActions';
import { useClickOutside } from 'hooks/useClickOutside';
import  { FC } from 'react';

import * as S from './style';

interface ModalProps {
	children?: JSX.Element;
}

export const Modal: FC<ModalProps> = ({ children }) => {
	const { toggleModal } = useActions();


	const ref = useClickOutside(() => {
		toggleModal();
	});


	return (
		<S.Overlay>
			<S.Modal ref={ref}>{children}</S.Modal>
		</S.Overlay>
	);
};
