module.exports = {
  "extends": "novacredit/common",
    "rules": {
      'class-methods-use-this': [
				'error',
				{
	        exceptMethods: [
	          'render',
	          'getInitialState',
	          'getDefaultProps',
	          'getChildContext',
	          'componentWillMount',
	          'componentDidMount',
	          'componentWillReceiveProps',
	          'shouldComponentUpdate',
	          'componentWillUpdate',
	          'componentDidUpdate',
	          'componentWillUnmount',
	        ],
      	}
			],
    "react/forbid-prop-types": [1, { "forbid": ['any'] }],
	}
};
