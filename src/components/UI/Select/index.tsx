import { FC, useState } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';
import { BsChevronDown } from 'react-icons/bs';
import { ISelectItem } from 'types/selectItem';
import { IconButton } from '../IconButton';
import { LocalLoader } from '../LocalLoader';
import * as S from './style';

interface SelectProps {
	options: ISelectItem[];
	selected: ISelectItem;
	placeholder: string;
	fetching?: boolean;
	setSelected: (option: ISelectItem) => void;
	isDisabled?: boolean;
}

export const Select: FC<SelectProps> = ({
	options,
	selected,
	placeholder,
	setSelected,
	fetching,
	isDisabled
}) => {
	const [isOpen, setIsOpen] = useState(false);


	const toggleSelect = () => {
		setIsOpen(!isOpen);
	};

	const getSelectedOption = (item: ISelectItem) => {
		setSelected(item);
		setIsOpen(false);
	};

	const ref = useClickOutside(() => {
		setIsOpen(false);
	});

	const optionsArr = options.map(item => (
		<S.Option key={item.id} onClick={() => getSelectedOption(item)}>
			<span>
				{item.option}
			</span>
		</S.Option>
	));

	return (
		<S.SelectBox ref={ref} >
			<S.SelectedOption isActive={isOpen} onClick={toggleSelect} isDisabled={isDisabled}>
				{selected.option.length ? selected.option : placeholder}
				<S.SelectIndicate>
					{fetching ? <LocalLoader /> : <IconButton icon={<BsChevronDown />} />}
				</S.SelectIndicate>
			</S.SelectedOption>
			<S.OptionsContainer isActive={isOpen}>{optionsArr}</S.OptionsContainer>
		</S.SelectBox>
	);
};
