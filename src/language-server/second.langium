grammar Second
hidden(WS,COMMENT)

Model:
    (declarations+=Declaration)*;

Declaration:
    (Author |DatasetDefinition | Requeriment);

// Document Author
Author:
    'author' name=ID 'email:' email=ID;

// Dataset definition
DatasetDefinition:
    'dataset' name=ID 'withDescription:' description=ID 'composedBy:' (instances+=Instance)*;

Instance: 
    'instance' name=ID 'ofType:'  type=Type 'withAttributes:' (attributes+=Attribute)*;

Attribute:
    'attribute' name=ID 'ofType' attType=ATtype ;

// Requeriments
Requeriment:
    'requeriment' name=ID 'reportedby:' reporter=[Author] 'fromAtt' desName=[Attribute|ID] ;

// Data Type Rules
ATtype returns string: 'int' | 'string' | 'bool';
Type returns string: 'people' | 'images' | 'raw';
OpType returns string: 'grater' | 'lower' | 'equal';
QualifiedName returns string: ID ('.'ID ('.'ID)*)*;

// Terminals
terminal COMMENT: /--[^\n\r]*[\n\r]*/;
terminal EOL: /\r?\n/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal WS: /\s+/;
terminal INT returns number: /[0-9]+/;
terminal TEXT: /"[^"]*"|'[^']*'/;
           




