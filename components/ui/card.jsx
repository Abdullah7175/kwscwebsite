import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const CustomCard = ({ title, content, footer, icon: Icon }) => {
  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-lg p-4 transition-transform hover:scale-105">
      <CardHeader className="flex items-center space-x-3">
        {Icon && <Icon className="w-6 h-6 text-primary" />}
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-600 text-sm">{content}</CardContent>
      {footer && <CardFooter className="border-t pt-2 text-right text-xs text-gray-500">{footer}</CardFooter>}
    </Card>
  );
};

export default CustomCard;