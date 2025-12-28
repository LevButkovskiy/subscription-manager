import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '../ui/drawer';

interface ResponsiveDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	trigger: React.ReactNode;
	title: string;
	description: string;
	children: React.ReactNode;
}

const ResponsiveDialog = ({
	open,
	onOpenChange,
	trigger,
	title,
	description,
	children,
}: ResponsiveDialogProps) => {
	const isDesktop = useMediaQuery('(min-width: 768px)');

	if (isDesktop) {
		return (
			<Dialog open={open} onOpenChange={onOpenChange}>
				<DialogTrigger asChild>{trigger}</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						{description && (
							<DialogDescription>{description}</DialogDescription>
						)}
					</DialogHeader>
					{children}
				</DialogContent>
			</Dialog>
		);
	}
	return (
		<Drawer open={open} onOpenChange={onOpenChange}>
			<DrawerTrigger asChild>{trigger}</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>{title}</DrawerTitle>
					{description && (
						<DrawerDescription>{description}</DrawerDescription>
					)}
				</DrawerHeader>
				<div className="p-2">{children}</div>
			</DrawerContent>
		</Drawer>
	);
};

export default ResponsiveDialog;
