"use client"

import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect, ComponentType } from "react";

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
    const AuthComponent = (props: P) => {
        const router = useRouter();
        const user = useAppSelector((state) => state.userReducer.user);

        useEffect(() => {
            if (!user) {
                router.replace('/login');
            }
        }, [user]);

        if (!user) return null;

        return <WrappedComponent {...props} />;
    }

    // Add display name for debugging purposes
    AuthComponent.displayName = `withAuth(${getDisplayName(WrappedComponent)})`;
    return AuthComponent;
}

// Helper function to get the display name of a component
function getDisplayName<P>(WrappedComponent: ComponentType<P>): string {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withAuth;