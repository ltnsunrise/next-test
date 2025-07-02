// gen-context.ts
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const nameInput = process.argv[2];

if (!nameInput) {
  console.error("❌ Please provide a context name");
  process.exit(1);
}

const Name = nameInput[0].toUpperCase() + nameInput.slice(1);
const contextDir = join(__dirname, "../src/contexts");
const filePath = join(contextDir, `${Name}Context.tsx`);

if (existsSync(filePath)) {
  console.error(`❌ ${Name}Context.tsx already exists.`);
  process.exit(1);
}

mkdirSync(join(__dirname, "src", "contexts"), { recursive: true });

const content = `import { createContext, useContext, useState, useMemo } from 'react';

type ${Name}ContextType = any;

const ${Name}StateContext = createContext<${Name}ContextType | null>(null);
const ${Name}ActionContext = createContext<{
  // TODO: define actions
  login: (u: any) => void;
  logout: () => void;
} | null>(null);

export const ${Name}Provider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  const login = (u: any) => setUser(u);
  const logout = () => setUser(null);

  const actions = useMemo(() => ({ login, logout }), []);

  return (
    <${Name}StateContext.Provider value={user}>
      <${Name}ActionContext.Provider value={actions}>
        {children}
      </${Name}ActionContext.Provider>
    </${Name}StateContext.Provider>
  );
};

export const use${Name}State = () => {
  const ctx = useContext(${Name}StateContext);
  if (ctx === null) throw new Error('use${Name}State must be used within ${Name}Provider');
  return ctx;
};

export const use${Name}Actions = () => {
  const ctx = useContext(${Name}ActionContext);
  if (ctx === null) throw new Error('use${Name}Actions must be used within ${Name}Provider');
  return ctx;
};
`;

writeFileSync(filePath, content);
console.log(`✅ Created: src/contexts/${Name}Context.tsx`);
