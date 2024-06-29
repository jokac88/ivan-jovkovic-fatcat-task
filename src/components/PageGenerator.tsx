import React, { ReactNode } from 'react';

import { ComponentHero } from '@homework-task/components/ComponentHero.tsx';
import { ComponentItemsShowcase } from '@homework-task/components/ComponentItemsShowcase.tsx';
import { ComponentTrustBar } from '@homework-task/components/ComponentTrustBar.tsx';
import { FlexLayout } from '@homework-task/components/FlexLayout.tsx';
import { Layout } from '@homework-task/components/Layout.tsx';

type LayoutProps = {
    children: ReactNode;
    background: string;
};

type ComponentProps = {
    type: string;
    props: {
        title: string;
        description: string;
        image: string;
        className: string;
        buttonText: string;
        onClick: () => void;
    };
};

type ComponentData = {
    type: string;
    props: LayoutProps;
    components: ComponentProps[];
};

type PageGeneratorProps = {
    data: ComponentData[];
};

const COMPONENTS = {
    layoutSection: Layout,
    flexLayoutSection: FlexLayout,
    componentHero: ComponentHero,
    componentItemsShowcase: ComponentItemsShowcase,
    componentTrustBar: ComponentTrustBar,
};

type SectionType = {
    layoutSection: React.ComponentType<LayoutProps>;
    flexLayoutSection: React.ComponentType<LayoutProps>;
};

type ComponentType = {
    componentHero: React.ComponentType<ComponentProps>;
    componentItemsShowcase: React.ComponentType<ComponentProps>;
    componentTrustBar: React.ComponentType<ComponentProps>;
};

export const PageGenerator = ({ data }: PageGeneratorProps) => {
    return (
        <>
            {data.map((section, index) => {
                const SectionLayout =
                    COMPONENTS[section.type as keyof SectionType];

                return (
                    <SectionLayout key={index} {...section.props}>
                        {section.components.map((component, index) => {
                            const Component =
                                COMPONENTS[
                                    component.type as keyof ComponentType
                                ];

                            return (
                                <Component key={index} {...component.props} />
                            );
                        })}
                    </SectionLayout>
                );
            })}
        </>
    );
};
