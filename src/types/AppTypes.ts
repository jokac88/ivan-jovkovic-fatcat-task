import { ReactNode } from 'react';

export type TrustBarProps = {
    images: string[];
};

type ItemProp = {
    title: string;
    image: string;
};

type ExtendedItemProp = ItemProp & {
    description: string;
};

export interface PanelShowcaseProps {
    items: ExtendedItemProp[];
}

export type LayoutProps = {
    children: ReactNode;
    background: string;
};

type ItemShowcaseProp = {
    title: string;
    description: string;
};

export interface ItemsShowcaseProps {
    items: ItemShowcaseProp[];
}

export type HeroProps = {
    title: string;
    image: string;
};

type CardProps = ExtendedItemProp & {
    background: string;
    onClick: () => void;
    buttonText: string;
};

export type CardsProps = {
    cards: CardProps[];
};

export type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
    className?: string;
};

export interface LandingCardProps {
    title: string;
    text: string;
    link: string;
}

export type UserProps = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export type ComponentProps = {
    title: string;
    description: string;
    image: string;
    className: string;
    buttonText: string;
    onClick: () => void;
};
