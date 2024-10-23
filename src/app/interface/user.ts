export interface User {
    nom: string;
    email: string;
    password: string;
    role: "admin" | "user";
}
