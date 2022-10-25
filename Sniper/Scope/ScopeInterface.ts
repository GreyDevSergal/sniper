export namespace ScopeInterface
{

    export interface ScopeInterface
    {

        name: string;
        getName: () => string;

        execute: (data) => any;

    }

}

