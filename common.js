module.exports = {
  "extends": "airbnb",
  "rules": {
    "indent": [2, "tab"],
    "no-tabs": 0,
    "no-plusplus": 0,
    "no-bitwise": 0,
    "no-prototype-builtins": 0,
    "import/no-named-as-default": 0,
    "import/no-extraneous-dependencies": 0,
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true
      }
    ],
    "no-param-reassign": [
			2,
			{
        "props": false
			}
		],
    "no-multi-spaces": [
			"error",
			{
	      "exceptions": {
	      "VariableDeclarator": true,
	      "ImportDeclaration": true,
	      "AssignmentExpression": true
				}
			},
		]
	}
};
