/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {
	"use strict";
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
"use strict";
var arr = [];
var getProto = Object.getPrototypeOf;
var slice = arr.slice;
var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};
var push = arr.push;
var indexOf = arr.indexOf;
var class2type = {};
var toString = class2type.toString;
var hasOwn = class2type.hasOwnProperty;
var fnToString = hasOwn.toString;
var ObjectFunctionString = fnToString.call( Object );
var support = {};
var isFunction = function isFunction( obj ) {
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};
var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};
var document = window.document;
	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};
	function DOMEval( code, node, doc ) {
		doc = doc || document;
		var i, val,
			script = doc.createElement( "script" );
		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
var
	version = "3.6.0",
	jQuery = function( selector, context ) {
		return new jQuery.fn.init( selector, context );
	};
jQuery.fn = jQuery.prototype = {
	jquery: version,
	constructor: jQuery,
	length: 0,
	toArray: function() {
		return slice.call( this );
	},
	get: function( num ) {
		if ( num == null ) {
			return slice.call( this );
		}
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},
	pushStack: function( elems ) {
		var ret = jQuery.merge( this.constructor(), elems );
		ret.prevObject = this;
		return ret;
	},
	each: function( callback ) {
		return jQuery.each( this, callback );
	},
	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},
	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},
	first: function() {
		return this.eq( 0 );
	},
	last: function() {
		return this.eq( -1 );
	},
	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},
	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},
	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},
	end: function() {
		return this.prevObject || this.constructor();
	},
	push: push,
	sort: arr.sort,
	splice: arr.splice
};
jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[ i ] || {};
		i++;
	}
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}
	if ( i === length ) {
		target = this;
		i--;
	}
	for ( ; i < length; i++ ) {
		if ( ( options = arguments[ i ] ) != null ) {
			for ( name in options ) {
				copy = options[ name ];
				if ( name === "__proto__" || target === copy ) {
					continue;
				}
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;
					target[ name ] = jQuery.extend( deep, clone, copy );
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}
	return target;
};
jQuery.extend( {
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	isReady: true,
	error: function( msg ) {
		throw new Error( msg );
	},
	noop: function() {},
	isPlainObject: function( obj ) {
		var proto, Ctor;
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}
		proto = getProto( obj );
		if ( !proto ) {
			return true;
		}
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},
	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},
	each: function( obj, callback ) {
		var length, i = 0;
		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}
		return obj;
	},
	makeArray: function( arr, results ) {
		var ret = results || [];
		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}
		return ret;
	},
	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;
		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}
		first.length = i;
		return first;
	},
	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}
		return matches;
	},
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );
				if ( value != null ) {
					ret.push( value );
				}
			}
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );
				if ( value != null ) {
					ret.push( value );
				}
			}
		}
		return flat( ret );
	},
	guid: 1,
	support: support
} );
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
function isArrayLike( obj ) {
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );
	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}
	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},
	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",
	whitespace = "[\\x20\\t\\r\\n\\f]",
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		"*([*^$|!~]?=)" + whitespace +
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",
	pseudos = ":(" + identifier + ")(?:\\((" +
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		".*" +
		")\\)|)",
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),
	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),
	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),
	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},
	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,
	rnative = /^[^{]+\{\s*\[native \w/,
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	rsibling = /[+~]/,
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;
		return nonHex ?
			nonHex :
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {
			if ( ch === "\0" ) {
				return "\uFFFD";
			}
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}
		return "\\" + ch;
	},
	unloadHandler = function() {
		setDocument();
	},
	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :
		function( target, els ) {
			var j = target.length,
				i = 0;
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}
function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,
		nodeType = context ? context.nodeType : 9;
	results = results || [];
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
		return results;
	}
	if ( !seed ) {
		setDocument( context );
		context = context || document;
		if ( documentIsHTML ) {
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {
				if ( ( m = match[ 1 ] ) ) {
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {
							results.push( elem );
							return results;
						}
					}
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {
				newSelector = selector;
				newContext = context;
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
					if ( newContext !== context || !support.scope ) {
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}
/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];
	function cache( key, value ) {
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}
/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}
/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );
	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		el = null;
	}
}
/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;
	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}
/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;
	if ( diff ) {
		return diff;
	}
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}
	return a ? 1 : -1;
}
/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}
/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}
/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {
	return function( elem ) {
		if ( "form" in elem ) {
			if ( elem.parentNode && elem.disabled === false ) {
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}
				return elem.isDisabled === disabled ||
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}
			return elem.disabled === disabled;
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}
		return false;
	};
}
/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}
/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}
support = Sizzle.support = {};
/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};
/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );
	/* Attributes
	---------------------------------------------------------------------- */
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );
	/* getElement(s)By*
	---------------------------------------------------------------------- */
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );
				if ( elem ) {
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}
				return [];
			}
		};
	}
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}
				return tmp;
			}
			return results;
		};
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};
	/* QSA/matchesSelector
	---------------------------------------------------------------------- */
	rbuggyMatches = [];
	rbuggyQSA = [];
	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {
		assert( function( el ) {
			var input;
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );
		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}
	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {
		assert( function( el ) {
			support.disconnectedMatch = matches.call( el, "*" );
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}
	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );
	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};
	/* Sorting
	---------------------------------------------------------------------- */
	sortOrder = hasCompare ?
	function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :
			1;
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}
		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];
		if ( !aup || !bup ) {
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}
		return i ?
			siblingCheck( ap[ i ], bp[ i ] ) :
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};
	return document;
};
Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};
Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );
	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
		try {
			var ret = matches.call( elem, expr );
			if ( ret || support.disconnectedMatch ||
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}
	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};
Sizzle.contains = function( context, elem ) {
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};
Sizzle.attr = function( elem, name ) {
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}
	var fn = Expr.attrHandle[ name.toLowerCase() ],
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;
	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};
Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};
Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};
/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );
	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}
	sortInput = null;
	return results;
};
/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;
	if ( !nodeType ) {
		while ( ( node = elem[ i++ ] ) ) {
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	return ret;
};
Expr = Sizzle.selectors = {
	cacheLength: 50,
	createPseudo: markFunction,
	match: matchExpr,
	attrHandle: {},
	find: {},
	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},
	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );
			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}
			return match.slice( 0, 4 );
		},
		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();
			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}
			return match;
		},
		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];
			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				( excess = tokenize( unquoted, true ) ) &&
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}
			return match.slice( 0, 3 );
		}
	},
	filter: {
		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},
		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];
			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},
		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );
				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}
				result += "";
				/* eslint-disable max-len */
				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */
			};
		},
		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";
			return first === 1 && last === 0 ?
				function( elem ) {
					return !!elem.parentNode;
				} :
				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;
					if ( parent ) {
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {
										return false;
									}
								}
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}
						start = [ forward ? parent.firstChild : parent.lastChild ];
						if ( forward && useCache ) {
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );
							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];
							while ( ( node = ++nodeIndex && node && node[ dir ] ||
								( diff = nodeIndex = 0 ) || start.pop() ) ) {
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}
						} else {
							if ( useCache ) {
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}
							if ( diff === false ) {
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {
									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );
											uniqueCache[ type ] = [ dirruns, diff ];
										}
										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},
		"PSEUDO": function( pseudo, argument ) {
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );
			if ( fn[ expando ] ) {
				return fn( argument );
			}
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}
			return fn;
		}
	},
	pseudos: {
		"not": markFunction( function( selector ) {
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );
			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),
		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),
		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),
		"lang": markFunction( function( lang ) {
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {
						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},
		"root": function( elem ) {
			return elem === docElem;
		},
		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),
		"checked": function( elem ) {
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},
		"selected": function( elem ) {
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}
			return elem.selected === true;
		},
		"empty": function( elem ) {
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},
		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},
		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},
		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},
		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),
		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),
		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),
		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),
		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),
		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),
		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};
Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();
tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];
	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}
	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;
	while ( soFar ) {
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}
		matched = false;
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}
		if ( !matched ) {
			break;
		}
	}
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			tokenCache( selector, groups ).slice( 0 );
};
function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}
function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;
	return combinator.first ?
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );
						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {
							uniqueCache[ key ] = newCache;
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}
function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}
function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}
function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;
	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}
	return newUnmatched;
}
function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,
			matcherOut = matcher ?
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
					[] :
					results :
				matcherIn;
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}
		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {
						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}
function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			checkContext = null;
			return ret;
		} ];
	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );
			if ( matcher[ expando ] ) {
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}
	return elementMatcher( matchers );
}
function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;
			if ( outermost ) {
				outermostContext = context == document || context || outermost;
			}
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}
				if ( bySet ) {
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}
				if ( seed ) {
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}
					setMatched = condense( setMatched );
				}
				push.apply( results, setMatched );
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {
					Sizzle.uniqueSort( results );
				}
			}
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}
			return unmatched;
		};
	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}
compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];
	if ( !cached ) {
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);
		cached.selector = selector;
	}
	return cached;
};
/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );
	results = results || [];
	if ( match.length === 1 ) {
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {
			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;
			} else if ( compiled ) {
				context = context.parentNode;
			}
			selector = selector.slice( tokens.shift().value.length );
		}
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}
					break;
				}
			}
		}
	}
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;
support.detectDuplicates = !!hasDuplicate;
setDocument();
support.sortDetached = assert( function( el ) {
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}
return Sizzle;
} )( window );
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;
var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;
	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};
var siblings = function( n, elem ) {
	var matched = [];
	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}
	return matched;
};
var rneedsContext = jQuery.expr.match.needsContext;
function nodeName( elem, name ) {
	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}
	return jQuery.filter( qualifier, elements, not );
}
jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];
	if ( not ) {
		expr = ":not(" + expr + ")";
	}
	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}
	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};
jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;
		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}
		ret = this.pushStack( [] );
		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}
		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );
var rootjQuery,
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;
		if ( !selector ) {
			return this;
		}
		root = root || rootjQuery;
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {
				match = [ null, selector, null ];
			} else {
				match = rquickExpr.exec( selector );
			}
			if ( match && ( match[ 1 ] || !context ) ) {
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}
					return this;
				} else {
					elem = document.getElementById( match[ 2 ] );
					if ( elem ) {
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );
			} else {
				return this.constructor( context ).find( selector );
			}
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :
				selector( jQuery );
		}
		return jQuery.makeArray( selector, this );
	};
init.prototype = jQuery.fn;
rootjQuery = jQuery( document );
var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};
jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;
		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},
	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {
						matched.push( cur );
						break;
					}
				}
			}
		}
		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},
	index: function( elem ) {
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}
		return indexOf.call( this,
			elem.jquery ? elem[ 0 ] : elem
		);
	},
	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},
	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );
function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}
jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&
			getProto( elem.contentDocument ) ) {
			return elem.contentDocument;
		}
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}
		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );
		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}
		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}
		if ( this.length > 1 ) {
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}
		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}
/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );
	var // Flag to know if list is currently firing
		firing,
		memory,
		fired,
		locked,
		list = [],
		queue = [],
		firingIndex = -1,
		fire = function() {
			locked = locked || options.once;
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {
						firingIndex = list.length;
						memory = false;
					}
				}
			}
			if ( !options.memory ) {
				memory = false;
			}
			firing = false;
			if ( locked ) {
				if ( memory ) {
					list = [];
				} else {
					list = "";
				}
			}
		},
		self = {
			add: function() {
				if ( list ) {
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}
					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {
								add( arg );
							}
						} );
					} )( arguments );
					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			fired: function() {
				return !!fired;
			}
		};
	return self;
};
function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}
function adoptValue( value, resolve, reject, noValue ) {
	var method;
	try {
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );
		} else {
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}
	} catch ( value ) {
		reject.apply( undefined, [ value ] );
	}
}
jQuery.extend( {
	Deferred: function( func ) {
		var tuples = [
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;
									if ( depth < maxDepth ) {
										return;
									}
									returned = handler.apply( that, args );
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}
									then = returned &&
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;
									if ( isFunction( then ) ) {
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);
										} else {
											maxDepth++;
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}
									} else {
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}
										( special || deferred.resolveWith )( that, args );
									}
								},
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {
											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}
											if ( depth + 1 >= maxDepth ) {
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}
												deferred.rejectWith( that, args );
											}
										}
									};
							if ( depth ) {
								process();
							} else {
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}
					return jQuery.Deferred( function( newDefer ) {
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];
			promise[ tuple[ 1 ] ] = list.add;
			if ( stateString ) {
				list.add(
					function() {
						state = stateString;
					},
					tuples[ 3 - i ][ 2 ].disable,
					tuples[ 3 - i ][ 3 ].disable,
					tuples[ 0 ][ 2 ].lock,
					tuples[ 0 ][ 3 ].lock
				);
			}
			list.add( tuple[ 3 ].fire );
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );
		promise.promise( deferred );
		if ( func ) {
			func.call( deferred, deferred );
		}
		return deferred;
	},
	when: function( singleValue ) {
		var
			remaining = arguments.length,
			i = remaining,
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),
			primary = jQuery.Deferred(),
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
				return primary.then();
			}
		}
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}
		return primary.promise();
	}
} );
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
jQuery.Deferred.exceptionHook = function( error, stack ) {
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};
jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};
var readyList = jQuery.Deferred();
jQuery.fn.ready = function( fn ) {
	readyList
		.then( fn )
		.catch( function( error ) {
			jQuery.readyException( error );
		} );
	return this;
};
jQuery.extend( {
	isReady: false,
	readyWait: 1,
	ready: function( wait ) {
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}
		jQuery.isReady = true;
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}
		readyList.resolveWith( document, [ jQuery ] );
	}
} );
jQuery.ready.then = readyList.then;
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	window.setTimeout( jQuery.ready );
} else {
	document.addEventListener( "DOMContentLoaded", completed );
	window.addEventListener( "load", completed );
}
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}
	} else if ( value !== undefined ) {
		chainable = true;
		if ( !isFunction( value ) ) {
			raw = true;
		}
		if ( bulk ) {
			if ( raw ) {
				fn.call( elems, value );
				fn = null;
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}
		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}
	if ( chainable ) {
		return elems;
	}
	if ( bulk ) {
		return fn.call( elems );
	}
	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};
function Data() {
	this.expando = jQuery.expando + Data.uid++;
}
Data.uid = 1;
Data.prototype = {
	cache: function( owner ) {
		var value = owner[ this.expando ];
		if ( !value ) {
			value = {};
			if ( acceptData( owner ) ) {
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}
		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;
		} else {
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {
			return this.get( owner, key );
		}
		this.set( owner, key, value );
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];
		if ( cache === undefined ) {
			return;
		}
		if ( key !== undefined ) {
			if ( Array.isArray( key ) ) {
				key = key.map( camelCase );
			} else {
				key = camelCase( key );
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}
			i = key.length;
			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();
var dataUser = new Data();
var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;
function getData( data ) {
	if ( data === "true" ) {
		return true;
	}
	if ( data === "false" ) {
		return false;
	}
	if ( data === "null" ) {
		return null;
	}
	if ( data === +data + "" ) {
		return +data;
	}
	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}
	return data;
}
function dataAttr( elem, key, data ) {
	var name;
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );
		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}
jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},
	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},
	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},
	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );
jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );
				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}
			return data;
		}
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}
		return access( this, function( value ) {
			var data;
			if ( elem && value === undefined ) {
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}
				return;
			}
			this.each( function() {
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},
	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );
jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;
		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},
	dequeue: function( elem, type ) {
		type = type || "fx";
		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}
		if ( fn ) {
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}
		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );
jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}
		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}
		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );
				jQuery._queueHooks( this, type );
				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};
		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";
		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
var documentElement = document.documentElement;
	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {
		elem = el || elem;
		return elem.style.display === "none" ||
			elem.style.display === "" &&
			isAttached( elem ) &&
			jQuery.css( elem, "display" ) === "none";
	};
function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );
	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
		initial = initial / 2;
		unit = unit || initialInUnit[ 3 ];
		initialInUnit = +initial || 1;
		while ( maxIterations-- ) {
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;
		}
		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );
		valueParts = valueParts || [];
	}
	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}
var defaultDisplayMap = {};
function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];
	if ( display ) {
		return display;
	}
	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );
	temp.parentNode.removeChild( temp );
	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;
	return display;
}
function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		display = elem.style.display;
		if ( show ) {
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";
				dataPriv.set( elem, "display", display );
			}
		}
	}
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}
	return elements;
}
jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}
		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );
var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );
var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );
( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );
	div.appendChild( input );
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();
var wrapMap = {
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	_default: [ 0, "", "" ]
};
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}
function getAll( context, tag ) {
	var ret;
	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );
	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );
	} else {
		ret = [];
	}
	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}
	return ret;
}
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;
	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}
var rhtml = /<|&#?\w+;/;
function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;
	for ( ; i < l; i++ ) {
		elem = elems[ i ];
		if ( elem || elem === 0 ) {
			if ( toType( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}
				jQuery.merge( nodes, tmp.childNodes );
				tmp = fragment.firstChild;
				tmp.textContent = "";
			}
		}
	}
	fragment.textContent = "";
	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}
		attached = isAttached( elem );
		tmp = getAll( fragment.appendChild( elem ), "script" );
		if ( attached ) {
			setGlobalEval( tmp );
		}
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}
	return fragment;
}
var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
function returnTrue() {
	return true;
}
function returnFalse() {
	return false;
}
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}
function on( elem, types, selector, data, fn, one ) {
	var origFn, type;
	if ( typeof types === "object" ) {
		if ( typeof selector !== "string" ) {
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}
	if ( data == null && fn == null ) {
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {
			fn = data;
			data = undefined;
		} else {
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}
	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}
/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {
	global: {},
	add: function( elem, types, handler, data, selector ) {
		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );
		if ( !acceptData( elem ) ) {
			return;
		}
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
			if ( !type ) {
				continue;
			}
			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			special = jQuery.event.special[ type ] || {};
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}
			if ( special.add ) {
				special.add.call( elem, handleObj );
				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}
			jQuery.event.global[ type ] = true;
		}
	},
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}
			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];
				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );
					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}
				delete events[ type ];
			}
		}
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},
	dispatch: function( nativeEvent ) {
		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			event = jQuery.event.fix( nativeEvent ),
			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};
		args[ 0 ] = event;
		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}
		event.delegateTarget = this;
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;
			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {
					event.handleObj = handleObj;
					event.data = handleObj.data;
					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );
					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}
		return event.result;
	},
	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;
		if ( delegateCount &&
			cur.nodeType &&
			!( event.type === "click" && event.button >= 1 ) ) {
			for ( ; cur !== this; cur = cur.parentNode || this ) {
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];
						sel = handleObj.selector + " ";
						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}
		return handlerQueue;
	},
	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,
			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},
			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},
	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},
	special: {
		load: {
			noBubble: true
		},
		click: {
			setup: function( data ) {
				var el = this || data;
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {
					leverageNative( el, "click", returnTrue );
				}
				return false;
			},
			trigger: function( data ) {
				var el = this || data;
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {
					leverageNative( el, "click" );
				}
				return true;
			},
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},
		beforeunload: {
			postDispatch: function( event ) {
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};
function leverageNative( el, type, expectSync ) {
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );
			if ( ( event.isTrigger & 1 ) && this[ type ] ) {
				if ( !saved.length ) {
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {
						event.stopImmediatePropagation();
						event.preventDefault();
						return result && result.value;
					}
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}
			} else if ( saved.length ) {
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );
				event.stopImmediatePropagation();
			}
		}
	} );
}
jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};
jQuery.Event = function( src, props ) {
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				src.returnValue === false ?
			returnTrue :
			returnFalse;
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;
		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;
	} else {
		this.type = src;
	}
	if ( props ) {
		jQuery.extend( this, props );
	}
	this.timeStamp = src && src.timeStamp || Date.now();
	this[ jQuery.expando ] = true;
};
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,
	preventDefault: function() {
		var e = this.originalEvent;
		this.isDefaultPrevented = returnTrue;
		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;
		this.isPropagationStopped = returnTrue;
		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;
		this.isImmediatePropagationStopped = returnTrue;
		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}
		this.stopPropagation();
	}
};
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );
jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {
		setup: function() {
			leverageNative( this, type, expectSync );
			return false;
		},
		trigger: function() {
			leverageNative( this, type );
			return true;
		},
		_default: function() {
			return true;
		},
		delegateType: delegateType
	};
} );
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,
		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );
jQuery.fn.extend( {
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );
var
	rnoInnerhtml = /<script|<style|<link/i,
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}
	return elem;
}
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}
function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;
	if ( dest.nodeType !== 1 ) {
		return;
	}
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;
		if ( events ) {
			dataPriv.remove( dest, "handle events" );
			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );
		dataUser.set( dest, udataCur );
	}
}
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}
function domManip( collection, args, callback, ignored ) {
	args = flat( args );
	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}
	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;
		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;
			for ( ; i < l; i++ ) {
				node = fragment;
				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );
					if ( hasScripts ) {
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}
				callback.call( collection[ i ], node, i );
			}
			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;
				jQuery.map( scripts, restoreScript );
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {
						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}
	return collection;
}
function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;
	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}
		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}
	return elem;
}
jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {
			destElements = getAll( clone );
			srcElements = getAll( elem );
			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}
		return clone;
	},
	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;
		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );
jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},
	remove: function( selector ) {
		return remove( this, selector );
	},
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},
	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},
	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},
	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},
	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},
	empty: function() {
		var elem,
			i = 0;
		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
				elem.textContent = "";
			}
		}
		return this;
	},
	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},
	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;
			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
				value = jQuery.htmlPrefilter( value );
				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}
					elem = 0;
				} catch ( e ) {}
			}
			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},
	replaceWith: function() {
		var ignored = [];
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;
			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}
		}, ignored );
	}
} );
jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;
		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );
			push.apply( ret, elems.get() );
		}
		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
var getStyles = function( elem ) {
		var view = elem.ownerDocument.defaultView;
		if ( !view || !view.opener ) {
			view = window;
		}
		return view.getComputedStyle( elem );
	};
var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}
	ret = callback.call( elem );
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}
	return ret;
};
var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );
( function() {
	function computeStyleTests() {
		if ( !div ) {
			return;
		}
		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );
		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;
		documentElement.removeChild( container );
		div = null;
	}
	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}
	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );
	if ( !div.style ) {
		return;
	}
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";
	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );
				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";
				tr.style.height = "1px";
				trChild.style.height = "9px";
				trChild.style.display = "block";
				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );
				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;
				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();
function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;
	computed = computed || getStyles( elem );
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}
	return ret !== undefined ?
		ret + "" :
		ret;
}
function addGetHookIf( conditionFn, hookFn ) {
	return {
		get: function() {
			if ( conditionFn() ) {
				delete this.get;
				return;
			}
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}
var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};
function vendorPropName( name ) {
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;
	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];
	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}
var
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};
function setPositiveNumber( _elem, value, subtract ) {
	var matches = rcssNum.exec( value );
	return matches ?
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}
function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}
	for ( ; i < 4; i += 2 ) {
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}
		if ( !isBorderBox ) {
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}
	if ( !isBorderBox && computedVal >= 0 ) {
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) ) || 0;
	}
	return delta;
}
function getWidthOrHeight( elem, dimension, extra ) {
	var styles = getStyles( elem ),
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,
		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}
	val = parseFloat( val ) || 0;
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,
			val
		)
	) + "px";
}
jQuery.extend( {
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},
	cssProps: {},
	style: function( elem, name, value, extra ) {
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
		if ( value !== undefined ) {
			type = typeof value;
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );
				type = "number";
			}
			if ( value == null || value !== value ) {
				return;
			}
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {
				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}
		} else {
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
				return ret;
			}
			return style[ name ];
		}
	},
	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );
jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},
		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {
				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}
			return setPositiveNumber( elem, value, subtract );
		}
	};
} );
jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},
				parts = typeof value === "string" ? value.split( " " ) : [ value ];
			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}
			return expanded;
		}
	};
	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );
jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;
			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;
				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}
				return map;
			}
			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );
function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;
Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];
		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];
		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;
		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}
		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};
Tween.prototype.init.prototype = Tween.prototype;
Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}
			result = jQuery.css( tween.elem, tween.prop, "" );
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};
jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};
jQuery.fx = Tween.prototype.init;
jQuery.fx.step = {};
var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;
function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}
		jQuery.fx.tick();
	}
}
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}
	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}
	return attrs;
}
function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
			return tween;
		}
	}
}
function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;
		anim.always( function() {
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}
	if ( isBox && elem.nodeType === 1 ) {
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}
	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}
	propTween = false;
	for ( prop in orig ) {
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				showHide( [ elem ], true );
			}
			/* eslint-disable no-loop-func */
			anim.done( function() {
				/* eslint-enable no-loop-func */
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}
function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}
		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}
		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}
function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;
			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}
			deferred.notifyWith( elem, [ animation, percent, remaining ] );
			if ( percent < 1 && length ) {
				return remaining;
			}
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;
	propFilter( props, animation.opts.specialEasing );
	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}
	jQuery.map( props, createTween, animation );
	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);
	return animation;
}
jQuery.Animation = jQuery.extend( Animation, {
	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},
	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}
		var prop,
			index = 0,
			length = props.length;
		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},
	prefilters: [ defaultPrefilter ],
	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );
jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};
	if ( jQuery.fx.off ) {
		opt.duration = 0;
	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];
			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}
	opt.old = opt.complete;
	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}
		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};
	return opt;
};
jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
		doAnimation.finish = doAnimation;
		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};
		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}
		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );
			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;
			data.finish = true;
			jQuery.queue( this, type, [] );
			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}
			delete data.finish;
		} );
	}
} );
jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );
jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;
	fxNow = Date.now();
	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}
	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};
jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};
jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}
	inProgress = true;
	schedule();
};
jQuery.fx.stop = function() {
	inProgress = null;
};
jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	_default: 400
};
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";
	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};
( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );
	input.type = "checkbox";
	support.checkOn = input.value !== "";
	support.optSelected = opt.selected;
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();
var boolHook,
	attrHandle = jQuery.expr.attrHandle;
jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},
	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );
jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}
		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}
			elem.setAttribute( name, value + "" );
			return value;
		}
		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}
		ret = jQuery.find.attr( elem, name );
		return ret == null ? undefined : ret;
	},
	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},
	removeAttr: function( elem, value ) {
		var name,
			i = 0,
			attrNames = value && value.match( rnothtmlwhite );
		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;
	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();
		if ( !isXML ) {
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );
var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;
jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},
	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );
jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}
		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}
			return ( elem[ name ] = value );
		}
		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}
		return elem[ name ];
	},
	propHooks: {
		tabIndex: {
			get: function( elem ) {
				var tabindex = jQuery.find.attr( elem, "tabindex" );
				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}
				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}
				return -1;
			}
		}
	},
	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			/* eslint no-unused-expressions: "off" */
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			/* eslint no-unused-expressions: "off" */
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}
jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}
function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}
function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}
jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;
		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}
		classes = classesToArray( value );
		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}
		return this;
	},
	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;
		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}
		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}
		classes = classesToArray( value );
		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}
		return this;
	},
	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );
		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}
		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}
		return this.each( function() {
			var className, i, self, classNames;
			if ( isValidValue ) {
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );
				while ( ( className = classNames[ i++ ] ) ) {
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {
					dataPriv.set( this, "__className__", className );
				}
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},
	hasClass: function( selector ) {
		var className, elem,
			i = 0;
		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}
		return false;
	}
} );
var rreturn = /\r/g;
jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];
		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];
				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}
				ret = elem.value;
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}
				return ret == null ? "" : ret;
			}
			return;
		}
		valueIsFunction = isFunction( value );
		return this.each( function( i ) {
			var val;
			if ( this.nodeType !== 1 ) {
				return;
			}
			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}
			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );
jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;
				if ( index < 0 ) {
					i = max;
				} else {
					i = one ? index : 0;
				}
				for ( ; i < max; i++ ) {
					option = options[ i ];
					if ( ( option.selected || i === index ) &&
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {
						value = jQuery( option ).val();
						if ( one ) {
							return value;
						}
						values.push( value );
					}
				}
				return values;
			},
			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;
				while ( i-- ) {
					option = options[ i ];
					/* eslint-disable no-cond-assign */
					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
					/* eslint-enable no-cond-assign */
				}
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );
support.focusin = "onfocusin" in window;
var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};
jQuery.extend( jQuery.event, {
	trigger: function( event, data, elem, onlyHandlers ) {
		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
		cur = lastElement = tmp = elem = elem || document;
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}
		if ( type.indexOf( "." ) > -1 ) {
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {
			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {
			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {
					tmp = elem[ ontype ];
					if ( tmp ) {
						elem[ ontype ] = null;
					}
					jQuery.event.triggered = type;
					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}
					elem[ type ]();
					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}
					jQuery.event.triggered = undefined;
					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}
		return event.result;
	},
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);
		jQuery.event.trigger( e, null, elem );
	}
} );
jQuery.fn.extend( {
	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};
		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );
				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;
				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );
				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;
var nonce = { guid: Date.now() };
var rquery = ( /\?/ );
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}
	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};
var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;
function buildParams( prefix, obj, traditional, add ) {
	var name;
	if ( Array.isArray( obj ) ) {
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				add( prefix, v );
			} else {
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );
	} else if ( !traditional && toType( obj ) === "object" ) {
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}
	} else {
		add( prefix, obj );
	}
}
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;
			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};
	if ( a == null ) {
		return "";
	}
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );
	} else {
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}
	return s.join( "&" );
};
jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();
			if ( val == null ) {
				return null;
			}
			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}
			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );
var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},
	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},
	allTypes = "*/".concat( "*" ),
	originAnchor = document.createElement( "a" );
originAnchor.href = location.href;
function addToPrefiltersOrTransports( structure ) {
	return function( dataTypeExpression, func ) {
		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}
		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
		if ( isFunction( func ) ) {
			while ( ( dataType = dataTypes[ i++ ] ) ) {
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	var inspected = {},
		seekingTransport = ( structure === transports );
	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}
	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};
	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}
	return target;
}
/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		finalDataType = finalDataType || firstDataType;
	}
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}
/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		dataTypes = s.dataTypes.slice();
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}
	current = dataTypes.shift();
	while ( current ) {
		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}
		prev = current;
		current = dataTypes.shift();
		if ( current ) {
			if ( current === "*" ) {
				current = prev;
			} else if ( prev !== "*" && prev !== current ) {
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];
				if ( !conv ) {
					for ( conv2 in converters ) {
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								if ( conv === true ) {
									conv = converters[ conv2 ];
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}
				if ( conv !== true ) {
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}
	return { state: "success", data: response };
}
jQuery.extend( {
	active: 0,
	lastModified: {},
	etag: {},
	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},
		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},
		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},
		converters: {
			"* text": String,
			"text html": true,
			"text json": JSON.parse,
			"text xml": jQuery.parseXML
		},
		flatOptions: {
			url: true,
			context: true
		}
	},
	ajaxSetup: function( target, settings ) {
		return settings ?
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
			ajaxExtend( jQuery.ajaxSettings, target );
	},
	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),
	ajax: function( url, options ) {
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}
		options = options || {};
		var transport,
			cacheURL,
			responseHeadersString,
			responseHeaders,
			timeoutTimer,
			urlAnchor,
			completed,
			fireGlobals,
			i,
			uncached,
			s = jQuery.ajaxSetup( {}, options ),
			callbackContext = s.context || s,
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),
			statusCode = s.statusCode || {},
			requestHeaders = {},
			requestHeadersNames = {},
			strAbort = "canceled",
			jqXHR = {
				readyState: 0,
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {
							jqXHR.always( map[ jqXHR.status ] );
						} else {
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};
		deferred.promise( jqXHR );
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );
		s.type = options.method || options.type || s.method || s.type;
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );
			try {
				urlAnchor.href = s.url;
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {
				s.crossDomain = true;
			}
		}
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
		if ( completed ) {
			return jqXHR;
		}
		fireGlobals = jQuery.event && s.global;
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}
		s.type = s.type.toUpperCase();
		s.hasContent = !rnoContent.test( s.type );
		cacheURL = s.url.replace( rhash, "" );
		if ( !s.hasContent ) {
			uncached = s.url.slice( cacheURL.length );
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
				delete s.data;
			}
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}
			s.url = cacheURL + uncached;
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
			return jqXHR.abort();
		}
		strAbort = "abort";
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			if ( completed ) {
				return jqXHR;
			}
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}
			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				if ( completed ) {
					throw e;
				}
				done( -1, e );
			}
		}
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;
			if ( completed ) {
				return;
			}
			completed = true;
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}
			transport = undefined;
			responseHeadersString = headers || "";
			jqXHR.readyState = status > 0 ? 4 : 0;
			isSuccess = status >= 200 && status < 300 || status === 304;
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}
			response = ajaxConvert( s, response, jqXHR, isSuccess );
			if ( isSuccess ) {
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";
				} else if ( status === 304 ) {
					statusText = "notmodified";
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}
			jqXHR.statusCode( statusCode );
			statusCode = undefined;
			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}
		return jqXHR;
	},
	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},
	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );
jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );
jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );
jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};
jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;
		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}
			wrap.map( function() {
				var elem = this;
				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}
				return elem;
			} ).append( this );
		}
		return this;
	},
	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}
		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();
			if ( contents.length ) {
				contents.wrapAll( html );
			} else {
				self.append( html );
			}
		} );
	},
	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );
		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},
	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );
jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};
jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};
var xhrSuccessStatus = {
		0: 200,
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;
jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();
				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;
							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {
						if ( xhr.readyState === 4 ) {
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}
				callback = callback( "abort" );
				try {
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					if ( callback ) {
						throw e;
					}
				}
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );
jQuery.ajaxTransport( "script", function( s ) {
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};
		s.dataTypes[ 0 ] = "json";
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};
		jqXHR.always( function() {
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );
			} else {
				window[ callbackName ] = overwritten;
			}
			if ( s[ callbackName ] ) {
				s.jsonpCallback = originalSettings.jsonpCallback;
				oldCallbacks.push( callbackName );
			}
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}
			responseContainer = overwritten = undefined;
		} );
		return "script";
	}
} );
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	var base, parsed, scripts;
	if ( !context ) {
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}
	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}
	parsed = buildFragment( [ data ], context, scripts );
	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}
	return jQuery.merge( [], parsed.childNodes );
};
/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );
	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}
	if ( isFunction( params ) ) {
		callback = params;
		params = undefined;
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {
			response = arguments;
			self.html( selector ?
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
				responseText );
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}
	return this;
};
jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};
jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};
		if ( position === "static" ) {
			elem.style.position = "relative";
		}
		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}
		if ( isFunction( options ) ) {
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}
		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}
		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};
jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}
		var rect, win,
			elem = this[ 0 ];
		if ( !elem ) {
			return;
		}
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}
		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			offset = elem.getBoundingClientRect();
		} else {
			offset = this.offset();
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;
			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;
	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}
			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}
			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);
			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
			return access( this, function( elem, type, value ) {
				var doc;
				if ( isWindow( elem ) ) {
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}
				return value === undefined ?
					jQuery.css( elem, type, extra ) :
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );
jQuery.fn.extend( {
	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},
	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );
jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;
	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}
	if ( !isFunction( fn ) ) {
		return undefined;
	}
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	return proxy;
};
jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;
jQuery.now = Date.now;
jQuery.isNumeric = function( obj ) {
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&
		!isNaN( obj - parseFloat( obj ) );
};
jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};
if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}
var
	_jQuery = window.jQuery,
	_$ = window.$;
jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}
	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}
	return jQuery;
};
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}
return jQuery;
} );
jQuery.noConflict();
/*!
 * jQuery Migrate - v3.3.2 - 2020-11-18T08:29Z
 * Copyright OpenJS Foundation and other contributors
 */
(function(factory){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],function(jQuery){return factory(jQuery,window);});}else if(typeof module==="object"&&module.exports){module.exports=factory(require("jquery"),window);}else{factory(jQuery,window);}})(function(jQuery,window){"use strict";jQuery.migrateVersion="3.3.2";function compareVersions(v1,v2){var i,rVersionParts=/^(\d+)\.(\d+)\.(\d+)/,v1p=rVersionParts.exec(v1)||[],v2p=rVersionParts.exec(v2)||[];for(i=1;i<=3;i++){if(+v1p[i]>+v2p[i]){return 1;}
if(+v1p[i]<+v2p[i]){return-1;}}
return 0;}
function jQueryVersionSince(version){return compareVersions(jQuery.fn.jquery,version)>=0;}
(function(){if(!window.console||!window.console.log){return;}
if(!jQuery||!jQueryVersionSince("3.0.0")){window.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED");}
if(jQuery.migrateWarnings){window.console.log("JQMIGRATE: Migrate plugin loaded multiple times");}
window.console.log("JQMIGRATE: Migrate is installed"+
(jQuery.migrateMute?"":" with logging active")+", version "+jQuery.migrateVersion);})();var warnedAbout={};jQuery.migrateDeduplicateWarnings=true;jQuery.migrateWarnings=[];if(jQuery.migrateTrace===undefined){jQuery.migrateTrace=true;}
jQuery.migrateReset=function(){warnedAbout={};jQuery.migrateWarnings.length=0;};function migrateWarn(msg){var console=window.console;if(!jQuery.migrateDeduplicateWarnings||!warnedAbout[msg]){warnedAbout[msg]=true;jQuery.migrateWarnings.push(msg);if(console&&console.warn&&!jQuery.migrateMute){console.warn("JQMIGRATE: "+msg);if(jQuery.migrateTrace&&console.trace){console.trace();}}}}
function migrateWarnProp(obj,prop,value,msg){Object.defineProperty(obj,prop,{configurable:true,enumerable:true,get:function(){migrateWarn(msg);return value;},set:function(newValue){migrateWarn(msg);value=newValue;}});}
function migrateWarnFunc(obj,prop,newFunc,msg){obj[prop]=function(){migrateWarn(msg);return newFunc.apply(this,arguments);};}
if(window.document.compatMode==="BackCompat"){migrateWarn("jQuery is not compatible with Quirks Mode");}
var findProp,class2type={},oldInit=jQuery.fn.init,oldFind=jQuery.find,rattrHashTest=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,rattrHashGlob=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;jQuery.fn.init=function(arg1){var args=Array.prototype.slice.call(arguments);if(typeof arg1==="string"&&arg1==="#"){migrateWarn("jQuery( '#' ) is not a valid selector");args[0]=[];}
return oldInit.apply(this,args);};jQuery.fn.init.prototype=jQuery.fn;jQuery.find=function(selector){var args=Array.prototype.slice.call(arguments);if(typeof selector==="string"&&rattrHashTest.test(selector)){try{window.document.querySelector(selector);}catch(err1){selector=selector.replace(rattrHashGlob,function(_,attr,op,value){return"["+attr+op+"\""+value+"\"]";});try{window.document.querySelector(selector);migrateWarn("Attribute selector with '#' must be quoted: "+args[0]);args[0]=selector;}catch(err2){migrateWarn("Attribute selector with '#' was not fixed: "+args[0]);}}}
return oldFind.apply(this,args);};for(findProp in oldFind){if(Object.prototype.hasOwnProperty.call(oldFind,findProp)){jQuery.find[findProp]=oldFind[findProp];}}
migrateWarnFunc(jQuery.fn,"size",function(){return this.length;},"jQuery.fn.size() is deprecated and removed; use the .length property");migrateWarnFunc(jQuery,"parseJSON",function(){return JSON.parse.apply(null,arguments);},"jQuery.parseJSON is deprecated; use JSON.parse");migrateWarnFunc(jQuery,"holdReady",jQuery.holdReady,"jQuery.holdReady is deprecated");migrateWarnFunc(jQuery,"unique",jQuery.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort");migrateWarnProp(jQuery.expr,"filters",jQuery.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos");migrateWarnProp(jQuery.expr,":",jQuery.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos");if(jQueryVersionSince("3.1.1")){migrateWarnFunc(jQuery,"trim",function(text){return text==null?"":(text+"").replace(rtrim,"");},"jQuery.trim is deprecated; use String.prototype.trim");}
if(jQueryVersionSince("3.2.0")){migrateWarnFunc(jQuery,"nodeName",function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},"jQuery.nodeName is deprecated");migrateWarnFunc(jQuery,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray");}
if(jQueryVersionSince("3.3.0")){migrateWarnFunc(jQuery,"isNumeric",function(obj){var type=typeof obj;return(type==="number"||type==="string")&&!isNaN(obj-parseFloat(obj));},"jQuery.isNumeric() is deprecated");jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(_,name){class2type["[object "+name+"]"]=name.toLowerCase();});migrateWarnFunc(jQuery,"type",function(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[Object.prototype.toString.call(obj)]||"object":typeof obj;},"jQuery.type is deprecated");migrateWarnFunc(jQuery,"isFunction",function(obj){return typeof obj==="function";},"jQuery.isFunction() is deprecated");migrateWarnFunc(jQuery,"isWindow",function(obj){return obj!=null&&obj===obj.window;},"jQuery.isWindow() is deprecated");}
if(jQuery.ajax){var oldAjax=jQuery.ajax,rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajax=function(){var jQXHR=oldAjax.apply(this,arguments);if(jQXHR.promise){migrateWarnFunc(jQXHR,"success",jQXHR.done,"jQXHR.success is deprecated and removed");migrateWarnFunc(jQXHR,"error",jQXHR.fail,"jQXHR.error is deprecated and removed");migrateWarnFunc(jQXHR,"complete",jQXHR.always,"jQXHR.complete is deprecated and removed");}
return jQXHR;};if(!jQueryVersionSince("4.0.0")){jQuery.ajaxPrefilter("+json",function(s){if(s.jsonp!==false&&(rjsonp.test(s.url)||typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data))){migrateWarn("JSON-to-JSONP auto-promotion is deprecated");}});}}
var oldRemoveAttr=jQuery.fn.removeAttr,oldToggleClass=jQuery.fn.toggleClass,rmatchNonSpace=/\S+/g;jQuery.fn.removeAttr=function(name){var self=this;jQuery.each(name.match(rmatchNonSpace),function(_i,attr){if(jQuery.expr.match.bool.test(attr)){migrateWarn("jQuery.fn.removeAttr no longer sets boolean properties: "+attr);self.prop(attr,false);}});return oldRemoveAttr.apply(this,arguments);};jQuery.fn.toggleClass=function(state){if(state!==undefined&&typeof state!=="boolean"){return oldToggleClass.apply(this,arguments);}
migrateWarn("jQuery.fn.toggleClass( boolean ) is deprecated");return this.each(function(){var className=this.getAttribute&&this.getAttribute("class")||"";if(className){jQuery.data(this,"__className__",className);}
if(this.setAttribute){this.setAttribute("class",className||state===false?"":jQuery.data(this,"__className__")||"");}});};function camelCase(string){return string.replace(/-([a-z])/g,function(_,letter){return letter.toUpperCase();});}
var oldFnCss,internalSwapCall=false,ralphaStart=/^[a-z]/,rautoPx=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;if(jQuery.swap){jQuery.each(["height","width","reliableMarginRight"],function(_,name){var oldHook=jQuery.cssHooks[name]&&jQuery.cssHooks[name].get;if(oldHook){jQuery.cssHooks[name].get=function(){var ret;internalSwapCall=true;ret=oldHook.apply(this,arguments);internalSwapCall=false;return ret;};}});}
jQuery.swap=function(elem,options,callback,args){var ret,name,old={};if(!internalSwapCall){migrateWarn("jQuery.swap() is undocumented and deprecated");}
for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;};if(jQueryVersionSince("3.4.0")&&typeof Proxy!=="undefined"){jQuery.cssProps=new Proxy(jQuery.cssProps||{},{set:function(){migrateWarn("JQMIGRATE: jQuery.cssProps is deprecated");return Reflect.set.apply(this,arguments);}});}
if(!jQuery.cssNumber){jQuery.cssNumber={};}
function isAutoPx(prop){return ralphaStart.test(prop)&&rautoPx.test(prop[0].toUpperCase()+prop.slice(1));}
oldFnCss=jQuery.fn.css;jQuery.fn.css=function(name,value){var camelName,origThis=this;if(name&&typeof name==="object"&&!Array.isArray(name)){jQuery.each(name,function(n,v){jQuery.fn.css.call(origThis,n,v);});return this;}
if(typeof value==="number"){camelName=camelCase(name);if(!isAutoPx(camelName)&&!jQuery.cssNumber[camelName]){migrateWarn("Number-typed values are deprecated for jQuery.fn.css( \""+
name+"\", value )");}}
return oldFnCss.apply(this,arguments);};var oldData=jQuery.data;jQuery.data=function(elem,name,value){var curData,sameKeys,key;if(name&&typeof name==="object"&&arguments.length===2){curData=jQuery.hasData(elem)&&oldData.call(this,elem);sameKeys={};for(key in name){if(key!==camelCase(key)){migrateWarn("jQuery.data() always sets/gets camelCased names: "+key);curData[key]=name[key];}else{sameKeys[key]=name[key];}}
oldData.call(this,elem,sameKeys);return name;}
if(name&&typeof name==="string"&&name!==camelCase(name)){curData=jQuery.hasData(elem)&&oldData.call(this,elem);if(curData&&name in curData){migrateWarn("jQuery.data() always sets/gets camelCased names: "+name);if(arguments.length>2){curData[name]=value;}
return curData[name];}}
return oldData.apply(this,arguments);};if(jQuery.fx){var intervalValue,intervalMsg,oldTweenRun=jQuery.Tween.prototype.run,linearEasing=function(pct){return pct;};jQuery.Tween.prototype.run=function(){if(jQuery.easing[this.easing].length>1){migrateWarn("'jQuery.easing."+this.easing.toString()+"' should use only one argument");jQuery.easing[this.easing]=linearEasing;}
oldTweenRun.apply(this,arguments);};intervalValue=jQuery.fx.interval||13;intervalMsg="jQuery.fx.interval is deprecated";if(window.requestAnimationFrame){Object.defineProperty(jQuery.fx,"interval",{configurable:true,enumerable:true,get:function(){if(!window.document.hidden){migrateWarn(intervalMsg);}
return intervalValue;},set:function(newValue){migrateWarn(intervalMsg);intervalValue=newValue;}});}}
var oldLoad=jQuery.fn.load,oldEventAdd=jQuery.event.add,originalFix=jQuery.event.fix;jQuery.event.props=[];jQuery.event.fixHooks={};migrateWarnProp(jQuery.event.props,"concat",jQuery.event.props.concat,"jQuery.event.props.concat() is deprecated and removed");jQuery.event.fix=function(originalEvent){var event,type=originalEvent.type,fixHook=this.fixHooks[type],props=jQuery.event.props;if(props.length){migrateWarn("jQuery.event.props are deprecated and removed: "+props.join());while(props.length){jQuery.event.addProp(props.pop());}}
if(fixHook&&!fixHook._migrated_){fixHook._migrated_=true;migrateWarn("jQuery.event.fixHooks are deprecated and removed: "+type);if((props=fixHook.props)&&props.length){while(props.length){jQuery.event.addProp(props.pop());}}}
event=originalFix.call(this,originalEvent);return fixHook&&fixHook.filter?fixHook.filter(event,originalEvent):event;};jQuery.event.add=function(elem,types){if(elem===window&&types==="load"&&window.document.readyState==="complete"){migrateWarn("jQuery(window).on('load'...) called after load event occurred");}
return oldEventAdd.apply(this,arguments);};jQuery.each(["load","unload","error"],function(_,name){jQuery.fn[name]=function(){var args=Array.prototype.slice.call(arguments,0);if(name==="load"&&typeof args[0]==="string"){return oldLoad.apply(this,args);}
migrateWarn("jQuery.fn."+name+"() is deprecated");args.splice(0,0,name);if(arguments.length){return this.on.apply(this,args);}
this.triggerHandler.apply(this,args);return this;};});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(_i,name){jQuery.fn[name]=function(data,fn){migrateWarn("jQuery.fn."+name+"() event shorthand is deprecated");return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery(function(){jQuery(window.document).triggerHandler("ready");});jQuery.event.special.ready={setup:function(){if(this===window.document){migrateWarn("'ready' event is deprecated");}}};jQuery.fn.extend({bind:function(types,data,fn){migrateWarn("jQuery.fn.bind() is deprecated");return this.on(types,null,data,fn);},unbind:function(types,fn){migrateWarn("jQuery.fn.unbind() is deprecated");return this.off(types,null,fn);},delegate:function(selector,types,data,fn){migrateWarn("jQuery.fn.delegate() is deprecated");return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){migrateWarn("jQuery.fn.undelegate() is deprecated");return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},hover:function(fnOver,fnOut){migrateWarn("jQuery.fn.hover() is deprecated");return this.on("mouseenter",fnOver).on("mouseleave",fnOut||fnOver);}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,origHtmlPrefilter=jQuery.htmlPrefilter,makeMarkup=function(html){var doc=window.document.implementation.createHTMLDocument("");doc.body.innerHTML=html;return doc.body&&doc.body.innerHTML;},warnIfChanged=function(html){var changed=html.replace(rxhtmlTag,"<$1></$2>");if(changed!==html&&makeMarkup(html)!==makeMarkup(changed)){migrateWarn("HTML tags must be properly nested and closed: "+html);}};jQuery.UNSAFE_restoreLegacyHtmlPrefilter=function(){jQuery.htmlPrefilter=function(html){warnIfChanged(html);return html.replace(rxhtmlTag,"<$1></$2>");};};jQuery.htmlPrefilter=function(html){warnIfChanged(html);return origHtmlPrefilter(html);};var oldOffset=jQuery.fn.offset;jQuery.fn.offset=function(){var elem=this[0];if(elem&&(!elem.nodeType||!elem.getBoundingClientRect)){migrateWarn("jQuery.fn.offset() requires a valid DOM element");return arguments.length?this:undefined;}
return oldOffset.apply(this,arguments);};if(jQuery.ajax){var oldParam=jQuery.param;jQuery.param=function(data,traditional){var ajaxTraditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;if(traditional===undefined&&ajaxTraditional){migrateWarn("jQuery.param() no longer uses jQuery.ajaxSettings.traditional");traditional=ajaxTraditional;}
return oldParam.call(this,data,traditional);};}
var oldSelf=jQuery.fn.andSelf||jQuery.fn.addBack;jQuery.fn.andSelf=function(){migrateWarn("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()");return oldSelf.apply(this,arguments);};if(jQuery.Deferred){var oldDeferred=jQuery.Deferred,tuples=[["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory")]];jQuery.Deferred=function(func){var deferred=oldDeferred(),promise=deferred.promise();deferred.pipe=promise.pipe=function(){var fns=arguments;migrateWarn("deferred.pipe() is deprecated");return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=typeof fns[i]==="function"&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&typeof returned.promise==="function"){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();};if(func){func.call(deferred,deferred);}
return deferred;};jQuery.Deferred.exceptionHook=oldDeferred.exceptionHook;}
return jQuery;});
window.qm_twig_profile=window.qm_twig_profile||{}
window.qm_twig_profile.save=function(filename,data){var blob=new Blob([data],{type:'text/csv'});if(window.navigator.msSaveOrOpenBlob){window.navigator.msSaveBlob(blob,filename);}
else{var elem=window.document.createElement('a');elem.href=window.URL.createObjectURL(blob);elem.download=filename;document.body.appendChild(elem);elem.click();document.body.removeChild(elem);}};
(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="5a74");})
({"1be2":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("c8dc");var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)if(["default"].indexOf(__WEBPACK_IMPORT_KEY__)<0)(function(key){__webpack_require__.d(__webpack_exports__,key,function(){return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];})}(__WEBPACK_IMPORT_KEY__));__webpack_exports__["default"]=(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);}),"2083":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("f457");var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__)if(["default"].indexOf(__WEBPACK_IMPORT_KEY__)<0)(function(key){__webpack_require__.d(__webpack_exports__,key,function(){return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key];})}(__WEBPACK_IMPORT_KEY__));__webpack_exports__["default"]=(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default.a);}),"24fb":(function(module,exports,__webpack_require__){"use strict";module.exports=function(useSourceMap){var list=[];list.toString=function toString(){return this.map(function(item){var content=cssWithMappingToString(item,useSourceMap);if(item[2]){return"@media ".concat(item[2]," {").concat(content,"}");}
return content;}).join('');};list.i=function(modules,mediaQuery,dedupe){if(typeof modules==='string'){modules=[[null,modules,'']];}
var alreadyImportedModules={};if(dedupe){for(var i=0;i<this.length;i++){var id=this[i][0];if(id!=null){alreadyImportedModules[id]=true;}}}
for(var _i=0;_i<modules.length;_i++){var item=[].concat(modules[_i]);if(dedupe&&alreadyImportedModules[item[0]]){continue;}
if(mediaQuery){if(!item[2]){item[2]=mediaQuery;}else{item[2]="".concat(mediaQuery," and ").concat(item[2]);}}
list.push(item);}};return list;};function cssWithMappingToString(item,useSourceMap){var content=item[1]||'';var cssMapping=item[3];if(!cssMapping){return content;}
if(useSourceMap&&typeof btoa==='function'){var sourceMapping=toComment(cssMapping);var sourceURLs=cssMapping.sources.map(function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot||'').concat(source," */");});return[content].concat(sourceURLs).concat([sourceMapping]).join('\n');}
return[content].join('\n');}
function toComment(sourceMap){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));var data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);return"/*# ".concat(data," */");}}),"2b0e":(function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){
/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
var emptyObject=Object.freeze({});function isUndef(v){return v===undefined||v===null}
function isDef(v){return v!==undefined&&v!==null}
function isTrue(v){return v===true}
function isFalse(v){return v===false}
function isPrimitive(value){return(typeof value==='string'||typeof value==='number'||typeof value==='symbol'||typeof value==='boolean')}
function isObject(obj){return obj!==null&&typeof obj==='object'}
var _toString=Object.prototype.toString;function toRawType(value){return _toString.call(value).slice(8,-1)}
function isPlainObject(obj){return _toString.call(obj)==='[object Object]'}
function isRegExp(v){return _toString.call(v)==='[object RegExp]'}
function isValidArrayIndex(val){var n=parseFloat(String(val));return n>=0&&Math.floor(n)===n&&isFinite(val)}
function isPromise(val){return(isDef(val)&&typeof val.then==='function'&&typeof val.catch==='function')}
function toString(val){return val==null?'':Array.isArray(val)||(isPlainObject(val)&&val.toString===_toString)?JSON.stringify(val,null,2):String(val)}
function toNumber(val){var n=parseFloat(val);return isNaN(n)?val:n}
function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}
return expectsLowerCase?function(val){return map[val.toLowerCase()];}:function(val){return map[val];}}
var isBuiltInTag=makeMap('slot,component',true);var isReservedAttribute=makeMap('key,ref,slot,slot-scope,is');function remove(arr,item){if(arr.length){var index=arr.indexOf(item);if(index>-1){return arr.splice(index,1)}}}
var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(obj,key){return hasOwnProperty.call(obj,key)}
function cached(fn){var cache=Object.create(null);return(function cachedFn(str){var hit=cache[str];return hit||(cache[str]=fn(str))})}
var camelizeRE=/-(\w)/g;var camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';})});var capitalize=cached(function(str){return str.charAt(0).toUpperCase()+str.slice(1)});var hyphenateRE=/\B([A-Z])/g;var hyphenate=cached(function(str){return str.replace(hyphenateRE,'-$1').toLowerCase()});function polyfillBind(fn,ctx){function boundFn(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx)}
boundFn._length=fn.length;return boundFn}
function nativeBind(fn,ctx){return fn.bind(ctx)}
var bind=Function.prototype.bind?nativeBind:polyfillBind;function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}
return ret}
function extend(to,_from){for(var key in _from){to[key]=_from[key];}
return to}
function toObject(arr){var res={};for(var i=0;i<arr.length;i++){if(arr[i]){extend(res,arr[i]);}}
return res}
function noop(a,b,c){}
var no=function(a,b,c){return false;};var identity=function(_){return _;};function looseEqual(a,b){if(a===b){return true}
var isObjectA=isObject(a);var isObjectB=isObject(b);if(isObjectA&&isObjectB){try{var isArrayA=Array.isArray(a);var isArrayB=Array.isArray(b);if(isArrayA&&isArrayB){return a.length===b.length&&a.every(function(e,i){return looseEqual(e,b[i])})}else if(a instanceof Date&&b instanceof Date){return a.getTime()===b.getTime()}else if(!isArrayA&&!isArrayB){var keysA=Object.keys(a);var keysB=Object.keys(b);return keysA.length===keysB.length&&keysA.every(function(key){return looseEqual(a[key],b[key])})}else{return false}}catch(e){return false}}else if(!isObjectA&&!isObjectB){return String(a)===String(b)}else{return false}}
function looseIndexOf(arr,val){for(var i=0;i<arr.length;i++){if(looseEqual(arr[i],val)){return i}}
return-1}
function once(fn){var called=false;return function(){if(!called){called=true;fn.apply(this,arguments);}}}
var SSR_ATTR='data-server-rendered';var ASSET_TYPES=['component','directive','filter'];var LIFECYCLE_HOOKS=['beforeCreate','created','beforeMount','mounted','beforeUpdate','updated','beforeDestroy','destroyed','activated','deactivated','errorCaptured','serverPrefetch'];var config=({optionMergeStrategies:Object.create(null),silent:false,productionTip:"production"!=='production',devtools:"production"!=='production',performance:false,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:no,isReservedAttr:no,isUnknownElement:no,getTagNamespace:noop,parsePlatformTagName:identity,mustUseProp:no,async:true,_lifecycleHooks:LIFECYCLE_HOOKS});var unicodeRegExp=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F}
function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});}
var bailRE=new RegExp(("[^"+(unicodeRegExp.source)+".$_\\d]"));function parsePath(path){if(bailRE.test(path)){return}
var segments=path.split('.');return function(obj){for(var i=0;i<segments.length;i++){if(!obj){return}
obj=obj[segments[i]];}
return obj}}
var hasProto='__proto__'in{};var inBrowser=typeof window!=='undefined';var inWeex=typeof WXEnvironment!=='undefined'&&!!WXEnvironment.platform;var weexPlatform=inWeex&&WXEnvironment.platform.toLowerCase();var UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIE=UA&&/msie|trident/.test(UA);var isIE9=UA&&UA.indexOf('msie 9.0')>0;var isEdge=UA&&UA.indexOf('edge/')>0;var isAndroid=(UA&&UA.indexOf('android')>0)||(weexPlatform==='android');var isIOS=(UA&&/iphone|ipad|ipod|ios/.test(UA))||(weexPlatform==='ios');var isChrome=UA&&/chrome\/\d+/.test(UA)&&!isEdge;var isPhantomJS=UA&&/phantomjs/.test(UA);var isFF=UA&&UA.match(/firefox\/(\d+)/);var nativeWatch=({}).watch;var supportsPassive=false;if(inBrowser){try{var opts={};Object.defineProperty(opts,'passive',({get:function get(){supportsPassive=true;}}));window.addEventListener('test-passive',null,opts);}catch(e){}}
var _isServer;var isServerRendering=function(){if(_isServer===undefined){if(!inBrowser&&!inWeex&&typeof global!=='undefined'){_isServer=global['process']&&global['process'].env.VUE_ENV==='server';}else{_isServer=false;}}
return _isServer};var devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function isNative(Ctor){return typeof Ctor==='function'&&/native code/.test(Ctor.toString())}
var hasSymbol=typeof Symbol!=='undefined'&&isNative(Symbol)&&typeof Reflect!=='undefined'&&isNative(Reflect.ownKeys);var _Set;if(typeof Set!=='undefined'&&isNative(Set)){_Set=Set;}else{_Set=(function(){function Set(){this.set=Object.create(null);}
Set.prototype.has=function has(key){return this.set[key]===true};Set.prototype.add=function add(key){this.set[key]=true;};Set.prototype.clear=function clear(){this.set=Object.create(null);};return Set;}());}
var warn=noop;var tip=noop;var generateComponentTrace=(noop);var formatComponentName=(noop);if(false){var repeat,classify,classifyRE,hasConsole;}
var uid=0;var Dep=function Dep(){this.id=uid++;this.subs=[];};Dep.prototype.addSub=function addSub(sub){this.subs.push(sub);};Dep.prototype.removeSub=function removeSub(sub){remove(this.subs,sub);};Dep.prototype.depend=function depend(){if(Dep.target){Dep.target.addDep(this);}};Dep.prototype.notify=function notify(){var subs=this.subs.slice();if(false){}
for(var i=0,l=subs.length;i<l;i++){subs[i].update();}};Dep.target=null;var targetStack=[];function pushTarget(target){targetStack.push(target);Dep.target=target;}
function popTarget(){targetStack.pop();Dep.target=targetStack[targetStack.length-1];}
var VNode=function VNode(tag,data,children,text,elm,context,componentOptions,asyncFactory){this.tag=tag;this.data=data;this.children=children;this.text=text;this.elm=elm;this.ns=undefined;this.context=context;this.fnContext=undefined;this.fnOptions=undefined;this.fnScopeId=undefined;this.key=data&&data.key;this.componentOptions=componentOptions;this.componentInstance=undefined;this.parent=undefined;this.raw=false;this.isStatic=false;this.isRootInsert=true;this.isComment=false;this.isCloned=false;this.isOnce=false;this.asyncFactory=asyncFactory;this.asyncMeta=undefined;this.isAsyncPlaceholder=false;};var prototypeAccessors={child:{configurable:true}};prototypeAccessors.child.get=function(){return this.componentInstance};Object.defineProperties(VNode.prototype,prototypeAccessors);var createEmptyVNode=function(text){if(text===void 0)text='';var node=new VNode();node.text=text;node.isComment=true;return node};function createTextVNode(val){return new VNode(undefined,undefined,undefined,String(val))}
function cloneVNode(vnode){var cloned=new VNode(vnode.tag,vnode.data,vnode.children&&vnode.children.slice(),vnode.text,vnode.elm,vnode.context,vnode.componentOptions,vnode.asyncFactory);cloned.ns=vnode.ns;cloned.isStatic=vnode.isStatic;cloned.key=vnode.key;cloned.isComment=vnode.isComment;cloned.fnContext=vnode.fnContext;cloned.fnOptions=vnode.fnOptions;cloned.fnScopeId=vnode.fnScopeId;cloned.asyncMeta=vnode.asyncMeta;cloned.isCloned=true;return cloned}
var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto);var methodsToPatch=['push','pop','shift','unshift','splice','sort','reverse'];methodsToPatch.forEach(function(method){var original=arrayProto[method];def(arrayMethods,method,function mutator(){var args=[],len=arguments.length;while(len--)args[len]=arguments[len];var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case'push':case'unshift':inserted=args;break
case'splice':inserted=args.slice(2);break}
if(inserted){ob.observeArray(inserted);}
ob.dep.notify();return result});});var arrayKeys=Object.getOwnPropertyNames(arrayMethods);var shouldObserve=true;function toggleObserving(value){shouldObserve=value;}
var Observer=function Observer(value){this.value=value;this.dep=new Dep();this.vmCount=0;def(value,'__ob__',this);if(Array.isArray(value)){if(hasProto){protoAugment(value,arrayMethods);}else{copyAugment(value,arrayMethods,arrayKeys);}
this.observeArray(value);}else{this.walk(value);}};Observer.prototype.walk=function walk(obj){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){defineReactive$$1(obj,keys[i]);}};Observer.prototype.observeArray=function observeArray(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}};function protoAugment(target,src){target.__proto__=src;}
function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key]);}}
function observe(value,asRootData){if(!isObject(value)||value instanceof VNode){return}
var ob;if(hasOwn(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(shouldObserve&&!isServerRendering()&&(Array.isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}
if(asRootData&&ob){ob.vmCount++;}
return ob}
function defineReactive$$1(obj,key,val,customSetter,shallow){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return}
var getter=property&&property.get;var setter=property&&property.set;if((!getter||setter)&&arguments.length===2){val=obj[key];}
var childOb=!shallow&&observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();if(Array.isArray(value)){dependArray(value);}}}
return value},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal===value||(newVal!==newVal&&value!==value)){return}
if(false){}
if(getter&&!setter){return}
if(setter){setter.call(obj,newVal);}else{val=newVal;}
childOb=!shallow&&observe(newVal);dep.notify();}});}
function set(target,key,val){if(false){}
if(Array.isArray(target)&&isValidArrayIndex(key)){target.length=Math.max(target.length,key);target.splice(key,1,val);return val}
if(key in target&&!(key in Object.prototype)){target[key]=val;return val}
var ob=(target).__ob__;if(target._isVue||(ob&&ob.vmCount)){false&&false;return val}
if(!ob){target[key]=val;return val}
defineReactive$$1(ob.value,key,val);ob.dep.notify();return val}
function del(target,key){if(false){}
if(Array.isArray(target)&&isValidArrayIndex(key)){target.splice(key,1);return}
var ob=(target).__ob__;if(target._isVue||(ob&&ob.vmCount)){false&&false;return}
if(!hasOwn(target,key)){return}
delete target[key];if(!ob){return}
ob.dep.notify();}
function dependArray(value){for(var e=(void 0),i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();if(Array.isArray(e)){dependArray(e);}}}
var strats=config.optionMergeStrategies;if(false){}
function mergeData(to,from){if(!from){return to}
var key,toVal,fromVal;var keys=hasSymbol?Reflect.ownKeys(from):Object.keys(from);for(var i=0;i<keys.length;i++){key=keys[i];if(key==='__ob__'){continue}
toVal=to[key];fromVal=from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(toVal!==fromVal&&isPlainObject(toVal)&&isPlainObject(fromVal)){mergeData(toVal,fromVal);}}
return to}
function mergeDataOrFn(parentVal,childVal,vm){if(!vm){if(!childVal){return parentVal}
if(!parentVal){return childVal}
return function mergedDataFn(){return mergeData(typeof childVal==='function'?childVal.call(this,this):childVal,typeof parentVal==='function'?parentVal.call(this,this):parentVal)}}else{return function mergedInstanceDataFn(){var instanceData=typeof childVal==='function'?childVal.call(vm,vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm,vm):parentVal;if(instanceData){return mergeData(instanceData,defaultData)}else{return defaultData}}}}
strats.data=function(parentVal,childVal,vm){if(!vm){if(childVal&&typeof childVal!=='function'){false&&false;return parentVal}
return mergeDataOrFn(parentVal,childVal)}
return mergeDataOrFn(parentVal,childVal,vm)};function mergeHook(parentVal,childVal){var res=childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal;return res?dedupeHooks(res):res}
function dedupeHooks(hooks){var res=[];for(var i=0;i<hooks.length;i++){if(res.indexOf(hooks[i])===-1){res.push(hooks[i]);}}
return res}
LIFECYCLE_HOOKS.forEach(function(hook){strats[hook]=mergeHook;});function mergeAssets(parentVal,childVal,vm,key){var res=Object.create(parentVal||null);if(childVal){false&&false;return extend(res,childVal)}else{return res}}
ASSET_TYPES.forEach(function(type){strats[type+'s']=mergeAssets;});strats.watch=function(parentVal,childVal,vm,key){if(parentVal===nativeWatch){parentVal=undefined;}
if(childVal===nativeWatch){childVal=undefined;}
if(!childVal){return Object.create(parentVal||null)}
if(false){}
if(!parentVal){return childVal}
var ret={};extend(ret,parentVal);for(var key$1 in childVal){var parent=ret[key$1];var child=childVal[key$1];if(parent&&!Array.isArray(parent)){parent=[parent];}
ret[key$1]=parent?parent.concat(child):Array.isArray(child)?child:[child];}
return ret};strats.props=strats.methods=strats.inject=strats.computed=function(parentVal,childVal,vm,key){if(childVal&&"production"!=='production'){assertObjectType(key,childVal,vm);}
if(!parentVal){return childVal}
var ret=Object.create(null);extend(ret,parentVal);if(childVal){extend(ret,childVal);}
return ret};strats.provide=mergeDataOrFn;var defaultStrat=function(parentVal,childVal){return childVal===undefined?parentVal:childVal};function checkComponents(options){for(var key in options.components){validateComponentName(key);}}
function validateComponentName(name){if(!new RegExp(("^[a-zA-Z][\\-\\.0-9_"+(unicodeRegExp.source)+"]*$")).test(name)){warn('Invalid component name: "'+name+'". Component names '+'should conform to valid custom element name in html5 specification.');}
if(isBuiltInTag(name)||config.isReservedTag(name)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+name);}}
function normalizeProps(options,vm){var props=options.props;if(!props){return}
var res={};var i,val,name;if(Array.isArray(props)){i=props.length;while(i--){val=props[i];if(typeof val==='string'){name=camelize(val);res[name]={type:null};}else if(false){}}}else if(isPlainObject(props)){for(var key in props){val=props[key];name=camelize(key);res[name]=isPlainObject(val)?val:{type:val};}}else if(false){}
options.props=res;}
function normalizeInject(options,vm){var inject=options.inject;if(!inject){return}
var normalized=options.inject={};if(Array.isArray(inject)){for(var i=0;i<inject.length;i++){normalized[inject[i]]={from:inject[i]};}}else if(isPlainObject(inject)){for(var key in inject){var val=inject[key];normalized[key]=isPlainObject(val)?extend({from:key},val):{from:val};}}else if(false){}}
function normalizeDirectives(options){var dirs=options.directives;if(dirs){for(var key in dirs){var def$$1=dirs[key];if(typeof def$$1==='function'){dirs[key]={bind:def$$1,update:def$$1};}}}}
function assertObjectType(name,value,vm){if(!isPlainObject(value)){warn("Invalid value for option \""+name+"\": expected an Object, "+"but got "+(toRawType(value))+".",vm);}}
function mergeOptions(parent,child,vm){if(false){}
if(typeof child==='function'){child=child.options;}
normalizeProps(child,vm);normalizeInject(child,vm);normalizeDirectives(child);if(!child._base){if(child.extends){parent=mergeOptions(parent,child.extends,vm);}
if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){parent=mergeOptions(parent,child.mixins[i],vm);}}}
var options={};var key;for(key in parent){mergeField(key);}
for(key in child){if(!hasOwn(parent,key)){mergeField(key);}}
function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}
return options}
function resolveAsset(options,type,id,warnMissing){if(typeof id!=='string'){return}
var assets=options[type];if(hasOwn(assets,id)){return assets[id]}
var camelizedId=camelize(id);if(hasOwn(assets,camelizedId)){return assets[camelizedId]}
var PascalCaseId=capitalize(camelizedId);if(hasOwn(assets,PascalCaseId)){return assets[PascalCaseId]}
var res=assets[id]||assets[camelizedId]||assets[PascalCaseId];if(false){}
return res}
function validateProp(key,propOptions,propsData,vm){var prop=propOptions[key];var absent=!hasOwn(propsData,key);var value=propsData[key];var booleanIndex=getTypeIndex(Boolean,prop.type);if(booleanIndex>-1){if(absent&&!hasOwn(prop,'default')){value=false;}else if(value===''||value===hyphenate(key)){var stringIndex=getTypeIndex(String,prop.type);if(stringIndex<0||booleanIndex<stringIndex){value=true;}}}
if(value===undefined){value=getPropDefaultValue(vm,prop,key);var prevShouldObserve=shouldObserve;toggleObserving(true);observe(value);toggleObserving(prevShouldObserve);}
if(false){}
return value}
function getPropDefaultValue(vm,prop,key){if(!hasOwn(prop,'default')){return undefined}
var def=prop.default;if(false){}
if(vm&&vm.$options.propsData&&vm.$options.propsData[key]===undefined&&vm._props[key]!==undefined){return vm._props[key]}
return typeof def==='function'&&getType(prop.type)!=='Function'?def.call(vm):def}
function assertProp(prop,name,value,vm,absent){if(prop.required&&absent){warn('Missing required prop: "'+name+'"',vm);return}
if(value==null&&!prop.required){return}
var type=prop.type;var valid=!type||type===true;var expectedTypes=[];if(type){if(!Array.isArray(type)){type=[type];}
for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType||'');valid=assertedType.valid;}}
if(!valid){warn(getInvalidTypeMessage(name,value,expectedTypes),vm);return}
var validator=prop.validator;if(validator){if(!validator(value)){warn('Invalid prop: custom validator check failed for prop "'+name+'".',vm);}}}
var simpleCheckRE=/^(String|Number|Boolean|Function|Symbol)$/;function assertType(value,type){var valid;var expectedType=getType(type);if(simpleCheckRE.test(expectedType)){var t=typeof value;valid=t===expectedType.toLowerCase();if(!valid&&t==='object'){valid=value instanceof type;}}else if(expectedType==='Object'){valid=isPlainObject(value);}else if(expectedType==='Array'){valid=Array.isArray(value);}else{valid=value instanceof type;}
return{valid:valid,expectedType:expectedType}}
function getType(fn){var match=fn&&fn.toString().match(/^\s*function (\w+)/);return match?match[1]:''}
function isSameType(a,b){return getType(a)===getType(b)}
function getTypeIndex(type,expectedTypes){if(!Array.isArray(expectedTypes)){return isSameType(expectedTypes,type)?0:-1}
for(var i=0,len=expectedTypes.length;i<len;i++){if(isSameType(expectedTypes[i],type)){return i}}
return-1}
function getInvalidTypeMessage(name,value,expectedTypes){var message="Invalid prop: type check failed for prop \""+name+"\"."+" Expected "+(expectedTypes.map(capitalize).join(', '));var expectedType=expectedTypes[0];var receivedType=toRawType(value);var expectedValue=styleValue(value,expectedType);var receivedValue=styleValue(value,receivedType);if(expectedTypes.length===1&&isExplicable(expectedType)&&!isBoolean(expectedType,receivedType)){message+=" with value "+expectedValue;}
message+=", got "+receivedType+" ";if(isExplicable(receivedType)){message+="with value "+receivedValue+".";}
return message}
function styleValue(value,type){if(type==='String'){return("\""+value+"\"")}else if(type==='Number'){return(""+(Number(value)))}else{return(""+value)}}
function isExplicable(value){var explicitTypes=['string','number','boolean'];return explicitTypes.some(function(elem){return value.toLowerCase()===elem;})}
function isBoolean(){var args=[],len=arguments.length;while(len--)args[len]=arguments[len];return args.some(function(elem){return elem.toLowerCase()==='boolean';})}
function handleError(err,vm,info){pushTarget();try{if(vm){var cur=vm;while((cur=cur.$parent)){var hooks=cur.$options.errorCaptured;if(hooks){for(var i=0;i<hooks.length;i++){try{var capture=hooks[i].call(cur,err,vm,info)===false;if(capture){return}}catch(e){globalHandleError(e,cur,'errorCaptured hook');}}}}}
globalHandleError(err,vm,info);}finally{popTarget();}}
function invokeWithErrorHandling(handler,context,args,vm,info){var res;try{res=args?handler.apply(context,args):handler.call(context);if(res&&!res._isVue&&isPromise(res)&&!res._handled){res.catch(function(e){return handleError(e,vm,info+" (Promise/async)");});res._handled=true;}}catch(e){handleError(e,vm,info);}
return res}
function globalHandleError(err,vm,info){if(config.errorHandler){try{return config.errorHandler.call(null,err,vm,info)}catch(e){if(e!==err){logError(e,null,'config.errorHandler');}}}
logError(err,vm,info);}
function logError(err,vm,info){if(false){}
if((inBrowser||inWeex)&&typeof console!=='undefined'){console.error(err);}else{throw err}}
var isUsingMicroTask=false;var callbacks=[];var pending=false;function flushCallbacks(){pending=false;var copies=callbacks.slice(0);callbacks.length=0;for(var i=0;i<copies.length;i++){copies[i]();}}
var timerFunc;if(typeof Promise!=='undefined'&&isNative(Promise)){var p=Promise.resolve();timerFunc=function(){p.then(flushCallbacks);if(isIOS){setTimeout(noop);}};isUsingMicroTask=true;}else if(!isIE&&typeof MutationObserver!=='undefined'&&(isNative(MutationObserver)||MutationObserver.toString()==='[object MutationObserverConstructor]')){var counter=1;var observer=new MutationObserver(flushCallbacks);var textNode=document.createTextNode(String(counter));observer.observe(textNode,{characterData:true});timerFunc=function(){counter=(counter+1)%2;textNode.data=String(counter);};isUsingMicroTask=true;}else if(typeof setImmediate!=='undefined'&&isNative(setImmediate)){timerFunc=function(){setImmediate(flushCallbacks);};}else{timerFunc=function(){setTimeout(flushCallbacks,0);};}
function nextTick(cb,ctx){var _resolve;callbacks.push(function(){if(cb){try{cb.call(ctx);}catch(e){handleError(e,ctx,'nextTick');}}else if(_resolve){_resolve(ctx);}});if(!pending){pending=true;timerFunc();}
if(!cb&&typeof Promise!=='undefined'){return new Promise(function(resolve){_resolve=resolve;})}}
var initProxy;if(false){var getHandler,hasHandler,isBuiltInModifier,hasProxy,warnReservedPrefix,warnNonPresent,allowedGlobals;}
var seenObjects=new _Set();function traverse(val){_traverse(val,seenObjects);seenObjects.clear();}
function _traverse(val,seen){var i,keys;var isA=Array.isArray(val);if((!isA&&!isObject(val))||Object.isFrozen(val)||val instanceof VNode){return}
if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return}
seen.add(depId);}
if(isA){i=val.length;while(i--){_traverse(val[i],seen);}}else{keys=Object.keys(val);i=keys.length;while(i--){_traverse(val[keys[i]],seen);}}}
var mark;var measure;if(false){var perf;}
var normalizeEvent=cached(function(name){var passive=name.charAt(0)==='&';name=passive?name.slice(1):name;var once$$1=name.charAt(0)==='~';name=once$$1?name.slice(1):name;var capture=name.charAt(0)==='!';name=capture?name.slice(1):name;return{name:name,once:once$$1,capture:capture,passive:passive}});function createFnInvoker(fns,vm){function invoker(){var arguments$1=arguments;var fns=invoker.fns;if(Array.isArray(fns)){var cloned=fns.slice();for(var i=0;i<cloned.length;i++){invokeWithErrorHandling(cloned[i],null,arguments$1,vm,"v-on handler");}}else{return invokeWithErrorHandling(fns,null,arguments,vm,"v-on handler")}}
invoker.fns=fns;return invoker}
function updateListeners(on,oldOn,add,remove$$1,createOnceHandler,vm){var name,def$$1,cur,old,event;for(name in on){def$$1=cur=on[name];old=oldOn[name];event=normalizeEvent(name);if(isUndef(cur)){false&&false;}else if(isUndef(old)){if(isUndef(cur.fns)){cur=on[name]=createFnInvoker(cur,vm);}
if(isTrue(event.once)){cur=on[name]=createOnceHandler(event.name,cur,event.capture);}
add(event.name,cur,event.capture,event.passive,event.params);}else if(cur!==old){old.fns=cur;on[name]=old;}}
for(name in oldOn){if(isUndef(on[name])){event=normalizeEvent(name);remove$$1(event.name,oldOn[name],event.capture);}}}
function mergeVNodeHook(def,hookKey,hook){if(def instanceof VNode){def=def.data.hook||(def.data.hook={});}
var invoker;var oldHook=def[hookKey];function wrappedHook(){hook.apply(this,arguments);remove(invoker.fns,wrappedHook);}
if(isUndef(oldHook)){invoker=createFnInvoker([wrappedHook]);}else{if(isDef(oldHook.fns)&&isTrue(oldHook.merged)){invoker=oldHook;invoker.fns.push(wrappedHook);}else{invoker=createFnInvoker([oldHook,wrappedHook]);}}
invoker.merged=true;def[hookKey]=invoker;}
function extractPropsFromVNodeData(data,Ctor,tag){var propOptions=Ctor.options.props;if(isUndef(propOptions)){return}
var res={};var attrs=data.attrs;var props=data.props;if(isDef(attrs)||isDef(props)){for(var key in propOptions){var altKey=hyphenate(key);if(false){var keyInLowerCase;}
checkProp(res,props,key,altKey,true)||checkProp(res,attrs,key,altKey,false);}}
return res}
function checkProp(res,hash,key,altKey,preserve){if(isDef(hash)){if(hasOwn(hash,key)){res[key]=hash[key];if(!preserve){delete hash[key];}
return true}else if(hasOwn(hash,altKey)){res[key]=hash[altKey];if(!preserve){delete hash[altKey];}
return true}}
return false}
function simpleNormalizeChildren(children){for(var i=0;i<children.length;i++){if(Array.isArray(children[i])){return Array.prototype.concat.apply([],children)}}
return children}
function normalizeChildren(children){return isPrimitive(children)?[createTextVNode(children)]:Array.isArray(children)?normalizeArrayChildren(children):undefined}
function isTextNode(node){return isDef(node)&&isDef(node.text)&&isFalse(node.isComment)}
function normalizeArrayChildren(children,nestedIndex){var res=[];var i,c,lastIndex,last;for(i=0;i<children.length;i++){c=children[i];if(isUndef(c)||typeof c==='boolean'){continue}
lastIndex=res.length-1;last=res[lastIndex];if(Array.isArray(c)){if(c.length>0){c=normalizeArrayChildren(c,((nestedIndex||'')+"_"+i));if(isTextNode(c[0])&&isTextNode(last)){res[lastIndex]=createTextVNode(last.text+(c[0]).text);c.shift();}
res.push.apply(res,c);}}else if(isPrimitive(c)){if(isTextNode(last)){res[lastIndex]=createTextVNode(last.text+c);}else if(c!==''){res.push(createTextVNode(c));}}else{if(isTextNode(c)&&isTextNode(last)){res[lastIndex]=createTextVNode(last.text+c.text);}else{if(isTrue(children._isVList)&&isDef(c.tag)&&isUndef(c.key)&&isDef(nestedIndex)){c.key="__vlist"+nestedIndex+"_"+i+"__";}
res.push(c);}}}
return res}
function initProvide(vm){var provide=vm.$options.provide;if(provide){vm._provided=typeof provide==='function'?provide.call(vm):provide;}}
function initInjections(vm){var result=resolveInject(vm.$options.inject,vm);if(result){toggleObserving(false);Object.keys(result).forEach(function(key){if(false){}else{defineReactive$$1(vm,key,result[key]);}});toggleObserving(true);}}
function resolveInject(inject,vm){if(inject){var result=Object.create(null);var keys=hasSymbol?Reflect.ownKeys(inject):Object.keys(inject);for(var i=0;i<keys.length;i++){var key=keys[i];if(key==='__ob__'){continue}
var provideKey=inject[key].from;var source=vm;while(source){if(source._provided&&hasOwn(source._provided,provideKey)){result[key]=source._provided[provideKey];break}
source=source.$parent;}
if(!source){if('default'in inject[key]){var provideDefault=inject[key].default;result[key]=typeof provideDefault==='function'?provideDefault.call(vm):provideDefault;}else if(false){}}}
return result}}
function resolveSlots(children,context){if(!children||!children.length){return{}}
var slots={};for(var i=0,l=children.length;i<l;i++){var child=children[i];var data=child.data;if(data&&data.attrs&&data.attrs.slot){delete data.attrs.slot;}
if((child.context===context||child.fnContext===context)&&data&&data.slot!=null){var name=data.slot;var slot=(slots[name]||(slots[name]=[]));if(child.tag==='template'){slot.push.apply(slot,child.children||[]);}else{slot.push(child);}}else{(slots.default||(slots.default=[])).push(child);}}
for(var name$1 in slots){if(slots[name$1].every(isWhitespace)){delete slots[name$1];}}
return slots}
function isWhitespace(node){return(node.isComment&&!node.asyncFactory)||node.text===' '}
function normalizeScopedSlots(slots,normalSlots,prevSlots){var res;var hasNormalSlots=Object.keys(normalSlots).length>0;var isStable=slots?!!slots.$stable:!hasNormalSlots;var key=slots&&slots.$key;if(!slots){res={};}else if(slots._normalized){return slots._normalized}else if(isStable&&prevSlots&&prevSlots!==emptyObject&&key===prevSlots.$key&&!hasNormalSlots&&!prevSlots.$hasNormal){return prevSlots}else{res={};for(var key$1 in slots){if(slots[key$1]&&key$1[0]!=='$'){res[key$1]=normalizeScopedSlot(normalSlots,key$1,slots[key$1]);}}}
for(var key$2 in normalSlots){if(!(key$2 in res)){res[key$2]=proxyNormalSlot(normalSlots,key$2);}}
if(slots&&Object.isExtensible(slots)){(slots)._normalized=res;}
def(res,'$stable',isStable);def(res,'$key',key);def(res,'$hasNormal',hasNormalSlots);return res}
function normalizeScopedSlot(normalSlots,key,fn){var normalized=function(){var res=arguments.length?fn.apply(null,arguments):fn({});res=res&&typeof res==='object'&&!Array.isArray(res)?[res]:normalizeChildren(res);return res&&(res.length===0||(res.length===1&&res[0].isComment))?undefined:res};if(fn.proxy){Object.defineProperty(normalSlots,key,{get:normalized,enumerable:true,configurable:true});}
return normalized}
function proxyNormalSlot(slots,key){return function(){return slots[key];}}
function renderList(val,render){var ret,i,l,keys,key;if(Array.isArray(val)||typeof val==='string'){ret=new Array(val.length);for(i=0,l=val.length;i<l;i++){ret[i]=render(val[i],i);}}else if(typeof val==='number'){ret=new Array(val);for(i=0;i<val;i++){ret[i]=render(i+1,i);}}else if(isObject(val)){if(hasSymbol&&val[Symbol.iterator]){ret=[];var iterator=val[Symbol.iterator]();var result=iterator.next();while(!result.done){ret.push(render(result.value,ret.length));result=iterator.next();}}else{keys=Object.keys(val);ret=new Array(keys.length);for(i=0,l=keys.length;i<l;i++){key=keys[i];ret[i]=render(val[key],key,i);}}}
if(!isDef(ret)){ret=[];}
(ret)._isVList=true;return ret}
function renderSlot(name,fallback,props,bindObject){var scopedSlotFn=this.$scopedSlots[name];var nodes;if(scopedSlotFn){props=props||{};if(bindObject){if(false){}
props=extend(extend({},bindObject),props);}
nodes=scopedSlotFn(props)||fallback;}else{nodes=this.$slots[name]||fallback;}
var target=props&&props.slot;if(target){return this.$createElement('template',{slot:target},nodes)}else{return nodes}}
function resolveFilter(id){return resolveAsset(this.$options,'filters',id,true)||identity}
function isKeyNotMatch(expect,actual){if(Array.isArray(expect)){return expect.indexOf(actual)===-1}else{return expect!==actual}}
function checkKeyCodes(eventKeyCode,key,builtInKeyCode,eventKeyName,builtInKeyName){var mappedKeyCode=config.keyCodes[key]||builtInKeyCode;if(builtInKeyName&&eventKeyName&&!config.keyCodes[key]){return isKeyNotMatch(builtInKeyName,eventKeyName)}else if(mappedKeyCode){return isKeyNotMatch(mappedKeyCode,eventKeyCode)}else if(eventKeyName){return hyphenate(eventKeyName)!==key}}
function bindObjectProps(data,tag,value,asProp,isSync){if(value){if(!isObject(value)){false&&false;}else{if(Array.isArray(value)){value=toObject(value);}
var hash;var loop=function(key){if(key==='class'||key==='style'||isReservedAttribute(key)){hash=data;}else{var type=data.attrs&&data.attrs.type;hash=asProp||config.mustUseProp(tag,type,key)?data.domProps||(data.domProps={}):data.attrs||(data.attrs={});}
var camelizedKey=camelize(key);var hyphenatedKey=hyphenate(key);if(!(camelizedKey in hash)&&!(hyphenatedKey in hash)){hash[key]=value[key];if(isSync){var on=data.on||(data.on={});on[("update:"+key)]=function($event){value[key]=$event;};}}};for(var key in value)loop(key);}}
return data}
function renderStatic(index,isInFor){var cached=this._staticTrees||(this._staticTrees=[]);var tree=cached[index];if(tree&&!isInFor){return tree}
tree=cached[index]=this.$options.staticRenderFns[index].call(this._renderProxy,null,this);markStatic(tree,("__static__"+index),false);return tree}
function markOnce(tree,index,key){markStatic(tree,("__once__"+index+(key?("_"+key):"")),true);return tree}
function markStatic(tree,key,isOnce){if(Array.isArray(tree)){for(var i=0;i<tree.length;i++){if(tree[i]&&typeof tree[i]!=='string'){markStaticNode(tree[i],(key+"_"+i),isOnce);}}}else{markStaticNode(tree,key,isOnce);}}
function markStaticNode(node,key,isOnce){node.isStatic=true;node.key=key;node.isOnce=isOnce;}
function bindObjectListeners(data,value){if(value){if(!isPlainObject(value)){false&&false;}else{var on=data.on=data.on?extend({},data.on):{};for(var key in value){var existing=on[key];var ours=value[key];on[key]=existing?[].concat(existing,ours):ours;}}}
return data}
function resolveScopedSlots(fns,res,hasDynamicKeys,contentHashKey){res=res||{$stable:!hasDynamicKeys};for(var i=0;i<fns.length;i++){var slot=fns[i];if(Array.isArray(slot)){resolveScopedSlots(slot,res,hasDynamicKeys);}else if(slot){if(slot.proxy){slot.fn.proxy=true;}
res[slot.key]=slot.fn;}}
if(contentHashKey){(res).$key=contentHashKey;}
return res}
function bindDynamicKeys(baseObj,values){for(var i=0;i<values.length;i+=2){var key=values[i];if(typeof key==='string'&&key){baseObj[values[i]]=values[i+1];}else if(false){}}
return baseObj}
function prependModifier(value,symbol){return typeof value==='string'?symbol+value:value}
function installRenderHelpers(target){target._o=markOnce;target._n=toNumber;target._s=toString;target._l=renderList;target._t=renderSlot;target._q=looseEqual;target._i=looseIndexOf;target._m=renderStatic;target._f=resolveFilter;target._k=checkKeyCodes;target._b=bindObjectProps;target._v=createTextVNode;target._e=createEmptyVNode;target._u=resolveScopedSlots;target._g=bindObjectListeners;target._d=bindDynamicKeys;target._p=prependModifier;}
function FunctionalRenderContext(data,props,children,parent,Ctor){var this$1=this;var options=Ctor.options;var contextVm;if(hasOwn(parent,'_uid')){contextVm=Object.create(parent);contextVm._original=parent;}else{contextVm=parent;parent=parent._original;}
var isCompiled=isTrue(options._compiled);var needNormalization=!isCompiled;this.data=data;this.props=props;this.children=children;this.parent=parent;this.listeners=data.on||emptyObject;this.injections=resolveInject(options.inject,parent);this.slots=function(){if(!this$1.$slots){normalizeScopedSlots(data.scopedSlots,this$1.$slots=resolveSlots(children,parent));}
return this$1.$slots};Object.defineProperty(this,'scopedSlots',({enumerable:true,get:function get(){return normalizeScopedSlots(data.scopedSlots,this.slots())}}));if(isCompiled){this.$options=options;this.$slots=this.slots();this.$scopedSlots=normalizeScopedSlots(data.scopedSlots,this.$slots);}
if(options._scopeId){this._c=function(a,b,c,d){var vnode=createElement(contextVm,a,b,c,d,needNormalization);if(vnode&&!Array.isArray(vnode)){vnode.fnScopeId=options._scopeId;vnode.fnContext=parent;}
return vnode};}else{this._c=function(a,b,c,d){return createElement(contextVm,a,b,c,d,needNormalization);};}}
installRenderHelpers(FunctionalRenderContext.prototype);function createFunctionalComponent(Ctor,propsData,data,contextVm,children){var options=Ctor.options;var props={};var propOptions=options.props;if(isDef(propOptions)){for(var key in propOptions){props[key]=validateProp(key,propOptions,propsData||emptyObject);}}else{if(isDef(data.attrs)){mergeProps(props,data.attrs);}
if(isDef(data.props)){mergeProps(props,data.props);}}
var renderContext=new FunctionalRenderContext(data,props,children,contextVm,Ctor);var vnode=options.render.call(null,renderContext._c,renderContext);if(vnode instanceof VNode){return cloneAndMarkFunctionalResult(vnode,data,renderContext.parent,options,renderContext)}else if(Array.isArray(vnode)){var vnodes=normalizeChildren(vnode)||[];var res=new Array(vnodes.length);for(var i=0;i<vnodes.length;i++){res[i]=cloneAndMarkFunctionalResult(vnodes[i],data,renderContext.parent,options,renderContext);}
return res}}
function cloneAndMarkFunctionalResult(vnode,data,contextVm,options,renderContext){var clone=cloneVNode(vnode);clone.fnContext=contextVm;clone.fnOptions=options;if(false){}
if(data.slot){(clone.data||(clone.data={})).slot=data.slot;}
return clone}
function mergeProps(to,from){for(var key in from){to[camelize(key)]=from[key];}}
var componentVNodeHooks={init:function init(vnode,hydrating){if(vnode.componentInstance&&!vnode.componentInstance._isDestroyed&&vnode.data.keepAlive){var mountedNode=vnode;componentVNodeHooks.prepatch(mountedNode,mountedNode);}else{var child=vnode.componentInstance=createComponentInstanceForVnode(vnode,activeInstance);child.$mount(hydrating?vnode.elm:undefined,hydrating);}},prepatch:function prepatch(oldVnode,vnode){var options=vnode.componentOptions;var child=vnode.componentInstance=oldVnode.componentInstance;updateChildComponent(child,options.propsData,options.listeners,vnode,options.children);},insert:function insert(vnode){var context=vnode.context;var componentInstance=vnode.componentInstance;if(!componentInstance._isMounted){componentInstance._isMounted=true;callHook(componentInstance,'mounted');}
if(vnode.data.keepAlive){if(context._isMounted){queueActivatedComponent(componentInstance);}else{activateChildComponent(componentInstance,true);}}},destroy:function destroy(vnode){var componentInstance=vnode.componentInstance;if(!componentInstance._isDestroyed){if(!vnode.data.keepAlive){componentInstance.$destroy();}else{deactivateChildComponent(componentInstance,true);}}}};var hooksToMerge=Object.keys(componentVNodeHooks);function createComponent(Ctor,data,context,children,tag){if(isUndef(Ctor)){return}
var baseCtor=context.$options._base;if(isObject(Ctor)){Ctor=baseCtor.extend(Ctor);}
if(typeof Ctor!=='function'){if(false){}
return}
var asyncFactory;if(isUndef(Ctor.cid)){asyncFactory=Ctor;Ctor=resolveAsyncComponent(asyncFactory,baseCtor);if(Ctor===undefined){return createAsyncPlaceholder(asyncFactory,data,context,children,tag)}}
data=data||{};resolveConstructorOptions(Ctor);if(isDef(data.model)){transformModel(Ctor.options,data);}
var propsData=extractPropsFromVNodeData(data,Ctor,tag);if(isTrue(Ctor.options.functional)){return createFunctionalComponent(Ctor,propsData,data,context,children)}
var listeners=data.on;data.on=data.nativeOn;if(isTrue(Ctor.options.abstract)){var slot=data.slot;data={};if(slot){data.slot=slot;}}
installComponentHooks(data);var name=Ctor.options.name||tag;var vnode=new VNode(("vue-component-"+(Ctor.cid)+(name?("-"+name):'')),data,undefined,undefined,undefined,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children},asyncFactory);return vnode}
function createComponentInstanceForVnode(vnode,parent){var options={_isComponent:true,_parentVnode:vnode,parent:parent};var inlineTemplate=vnode.data.inlineTemplate;if(isDef(inlineTemplate)){options.render=inlineTemplate.render;options.staticRenderFns=inlineTemplate.staticRenderFns;}
return new vnode.componentOptions.Ctor(options)}
function installComponentHooks(data){var hooks=data.hook||(data.hook={});for(var i=0;i<hooksToMerge.length;i++){var key=hooksToMerge[i];var existing=hooks[key];var toMerge=componentVNodeHooks[key];if(existing!==toMerge&&!(existing&&existing._merged)){hooks[key]=existing?mergeHook$1(toMerge,existing):toMerge;}}}
function mergeHook$1(f1,f2){var merged=function(a,b){f1(a,b);f2(a,b);};merged._merged=true;return merged}
function transformModel(options,data){var prop=(options.model&&options.model.prop)||'value';var event=(options.model&&options.model.event)||'input';(data.attrs||(data.attrs={}))[prop]=data.model.value;var on=data.on||(data.on={});var existing=on[event];var callback=data.model.callback;if(isDef(existing)){if(Array.isArray(existing)?existing.indexOf(callback)===-1:existing!==callback){on[event]=[callback].concat(existing);}}else{on[event]=callback;}}
var SIMPLE_NORMALIZE=1;var ALWAYS_NORMALIZE=2;function createElement(context,tag,data,children,normalizationType,alwaysNormalize){if(Array.isArray(data)||isPrimitive(data)){normalizationType=children;children=data;data=undefined;}
if(isTrue(alwaysNormalize)){normalizationType=ALWAYS_NORMALIZE;}
return _createElement(context,tag,data,children,normalizationType)}
function _createElement(context,tag,data,children,normalizationType){if(isDef(data)&&isDef((data).__ob__)){false&&false;return createEmptyVNode()}
if(isDef(data)&&isDef(data.is)){tag=data.is;}
if(!tag){return createEmptyVNode()}
if(false){}
if(Array.isArray(children)&&typeof children[0]==='function'){data=data||{};data.scopedSlots={default:children[0]};children.length=0;}
if(normalizationType===ALWAYS_NORMALIZE){children=normalizeChildren(children);}else if(normalizationType===SIMPLE_NORMALIZE){children=simpleNormalizeChildren(children);}
var vnode,ns;if(typeof tag==='string'){var Ctor;ns=(context.$vnode&&context.$vnode.ns)||config.getTagNamespace(tag);if(config.isReservedTag(tag)){if(false){}
vnode=new VNode(config.parsePlatformTagName(tag),data,children,undefined,undefined,context);}else if((!data||!data.pre)&&isDef(Ctor=resolveAsset(context.$options,'components',tag))){vnode=createComponent(Ctor,data,context,children,tag);}else{vnode=new VNode(tag,data,children,undefined,undefined,context);}}else{vnode=createComponent(tag,data,context,children);}
if(Array.isArray(vnode)){return vnode}else if(isDef(vnode)){if(isDef(ns)){applyNS(vnode,ns);}
if(isDef(data)){registerDeepBindings(data);}
return vnode}else{return createEmptyVNode()}}
function applyNS(vnode,ns,force){vnode.ns=ns;if(vnode.tag==='foreignObject'){ns=undefined;force=true;}
if(isDef(vnode.children)){for(var i=0,l=vnode.children.length;i<l;i++){var child=vnode.children[i];if(isDef(child.tag)&&(isUndef(child.ns)||(isTrue(force)&&child.tag!=='svg'))){applyNS(child,ns,force);}}}}
function registerDeepBindings(data){if(isObject(data.style)){traverse(data.style);}
if(isObject(data.class)){traverse(data.class);}}
function initRender(vm){vm._vnode=null;vm._staticTrees=null;var options=vm.$options;var parentVnode=vm.$vnode=options._parentVnode;var renderContext=parentVnode&&parentVnode.context;vm.$slots=resolveSlots(options._renderChildren,renderContext);vm.$scopedSlots=emptyObject;vm._c=function(a,b,c,d){return createElement(vm,a,b,c,d,false);};vm.$createElement=function(a,b,c,d){return createElement(vm,a,b,c,d,true);};var parentData=parentVnode&&parentVnode.data;if(false){}else{defineReactive$$1(vm,'$attrs',parentData&&parentData.attrs||emptyObject,null,true);defineReactive$$1(vm,'$listeners',options._parentListeners||emptyObject,null,true);}}
var currentRenderingInstance=null;function renderMixin(Vue){installRenderHelpers(Vue.prototype);Vue.prototype.$nextTick=function(fn){return nextTick(fn,this)};Vue.prototype._render=function(){var vm=this;var ref=vm.$options;var render=ref.render;var _parentVnode=ref._parentVnode;if(_parentVnode){vm.$scopedSlots=normalizeScopedSlots(_parentVnode.data.scopedSlots,vm.$slots,vm.$scopedSlots);}
vm.$vnode=_parentVnode;var vnode;try{currentRenderingInstance=vm;vnode=render.call(vm._renderProxy,vm.$createElement);}catch(e){handleError(e,vm,"render");if(false){}else{vnode=vm._vnode;}}finally{currentRenderingInstance=null;}
if(Array.isArray(vnode)&&vnode.length===1){vnode=vnode[0];}
if(!(vnode instanceof VNode)){if(false){}
vnode=createEmptyVNode();}
vnode.parent=_parentVnode;return vnode};}
function ensureCtor(comp,base){if(comp.__esModule||(hasSymbol&&comp[Symbol.toStringTag]==='Module')){comp=comp.default;}
return isObject(comp)?base.extend(comp):comp}
function createAsyncPlaceholder(factory,data,context,children,tag){var node=createEmptyVNode();node.asyncFactory=factory;node.asyncMeta={data:data,context:context,children:children,tag:tag};return node}
function resolveAsyncComponent(factory,baseCtor){if(isTrue(factory.error)&&isDef(factory.errorComp)){return factory.errorComp}
if(isDef(factory.resolved)){return factory.resolved}
var owner=currentRenderingInstance;if(owner&&isDef(factory.owners)&&factory.owners.indexOf(owner)===-1){factory.owners.push(owner);}
if(isTrue(factory.loading)&&isDef(factory.loadingComp)){return factory.loadingComp}
if(owner&&!isDef(factory.owners)){var owners=factory.owners=[owner];var sync=true;var timerLoading=null;var timerTimeout=null;(owner).$on('hook:destroyed',function(){return remove(owners,owner);});var forceRender=function(renderCompleted){for(var i=0,l=owners.length;i<l;i++){(owners[i]).$forceUpdate();}
if(renderCompleted){owners.length=0;if(timerLoading!==null){clearTimeout(timerLoading);timerLoading=null;}
if(timerTimeout!==null){clearTimeout(timerTimeout);timerTimeout=null;}}};var resolve=once(function(res){factory.resolved=ensureCtor(res,baseCtor);if(!sync){forceRender(true);}else{owners.length=0;}});var reject=once(function(reason){false&&false;if(isDef(factory.errorComp)){factory.error=true;forceRender(true);}});var res=factory(resolve,reject);if(isObject(res)){if(isPromise(res)){if(isUndef(factory.resolved)){res.then(resolve,reject);}}else if(isPromise(res.component)){res.component.then(resolve,reject);if(isDef(res.error)){factory.errorComp=ensureCtor(res.error,baseCtor);}
if(isDef(res.loading)){factory.loadingComp=ensureCtor(res.loading,baseCtor);if(res.delay===0){factory.loading=true;}else{timerLoading=setTimeout(function(){timerLoading=null;if(isUndef(factory.resolved)&&isUndef(factory.error)){factory.loading=true;forceRender(false);}},res.delay||200);}}
if(isDef(res.timeout)){timerTimeout=setTimeout(function(){timerTimeout=null;if(isUndef(factory.resolved)){reject(false?(undefined):null);}},res.timeout);}}}
sync=false;return factory.loading?factory.loadingComp:factory.resolved}}
function isAsyncPlaceholder(node){return node.isComment&&node.asyncFactory}
function getFirstComponentChild(children){if(Array.isArray(children)){for(var i=0;i<children.length;i++){var c=children[i];if(isDef(c)&&(isDef(c.componentOptions)||isAsyncPlaceholder(c))){return c}}}}
function initEvents(vm){vm._events=Object.create(null);vm._hasHookEvent=false;var listeners=vm.$options._parentListeners;if(listeners){updateComponentListeners(vm,listeners);}}
var target;function add(event,fn){target.$on(event,fn);}
function remove$1(event,fn){target.$off(event,fn);}
function createOnceHandler(event,fn){var _target=target;return function onceHandler(){var res=fn.apply(null,arguments);if(res!==null){_target.$off(event,onceHandler);}}}
function updateComponentListeners(vm,listeners,oldListeners){target=vm;updateListeners(listeners,oldListeners||{},add,remove$1,createOnceHandler,vm);target=undefined;}
function eventsMixin(Vue){var hookRE=/^hook:/;Vue.prototype.$on=function(event,fn){var vm=this;if(Array.isArray(event)){for(var i=0,l=event.length;i<l;i++){vm.$on(event[i],fn);}}else{(vm._events[event]||(vm._events[event]=[])).push(fn);if(hookRE.test(event)){vm._hasHookEvent=true;}}
return vm};Vue.prototype.$once=function(event,fn){var vm=this;function on(){vm.$off(event,on);fn.apply(vm,arguments);}
on.fn=fn;vm.$on(event,on);return vm};Vue.prototype.$off=function(event,fn){var vm=this;if(!arguments.length){vm._events=Object.create(null);return vm}
if(Array.isArray(event)){for(var i$1=0,l=event.length;i$1<l;i$1++){vm.$off(event[i$1],fn);}
return vm}
var cbs=vm._events[event];if(!cbs){return vm}
if(!fn){vm._events[event]=null;return vm}
var cb;var i=cbs.length;while(i--){cb=cbs[i];if(cb===fn||cb.fn===fn){cbs.splice(i,1);break}}
return vm};Vue.prototype.$emit=function(event){var vm=this;if(false){var lowerCaseEvent;}
var cbs=vm._events[event];if(cbs){cbs=cbs.length>1?toArray(cbs):cbs;var args=toArray(arguments,1);var info="event handler for \""+event+"\"";for(var i=0,l=cbs.length;i<l;i++){invokeWithErrorHandling(cbs[i],vm,args,vm,info);}}
return vm};}
var activeInstance=null;var isUpdatingChildComponent=false;function setActiveInstance(vm){var prevActiveInstance=activeInstance;activeInstance=vm;return function(){activeInstance=prevActiveInstance;}}
function initLifecycle(vm){var options=vm.$options;var parent=options.parent;if(parent&&!options.abstract){while(parent.$options.abstract&&parent.$parent){parent=parent.$parent;}
parent.$children.push(vm);}
vm.$parent=parent;vm.$root=parent?parent.$root:vm;vm.$children=[];vm.$refs={};vm._watcher=null;vm._inactive=null;vm._directInactive=false;vm._isMounted=false;vm._isDestroyed=false;vm._isBeingDestroyed=false;}
function lifecycleMixin(Vue){Vue.prototype._update=function(vnode,hydrating){var vm=this;var prevEl=vm.$el;var prevVnode=vm._vnode;var restoreActiveInstance=setActiveInstance(vm);vm._vnode=vnode;if(!prevVnode){vm.$el=vm.__patch__(vm.$el,vnode,hydrating,false);}else{vm.$el=vm.__patch__(prevVnode,vnode);}
restoreActiveInstance();if(prevEl){prevEl.__vue__=null;}
if(vm.$el){vm.$el.__vue__=vm;}
if(vm.$vnode&&vm.$parent&&vm.$vnode===vm.$parent._vnode){vm.$parent.$el=vm.$el;}};Vue.prototype.$forceUpdate=function(){var vm=this;if(vm._watcher){vm._watcher.update();}};Vue.prototype.$destroy=function(){var vm=this;if(vm._isBeingDestroyed){return}
callHook(vm,'beforeDestroy');vm._isBeingDestroyed=true;var parent=vm.$parent;if(parent&&!parent._isBeingDestroyed&&!vm.$options.abstract){remove(parent.$children,vm);}
if(vm._watcher){vm._watcher.teardown();}
var i=vm._watchers.length;while(i--){vm._watchers[i].teardown();}
if(vm._data.__ob__){vm._data.__ob__.vmCount--;}
vm._isDestroyed=true;vm.__patch__(vm._vnode,null);callHook(vm,'destroyed');vm.$off();if(vm.$el){vm.$el.__vue__=null;}
if(vm.$vnode){vm.$vnode.parent=null;}};}
function mountComponent(vm,el,hydrating){vm.$el=el;if(!vm.$options.render){vm.$options.render=createEmptyVNode;if(false){}}
callHook(vm,'beforeMount');var updateComponent;if(false){}else{updateComponent=function(){vm._update(vm._render(),hydrating);};}
new Watcher(vm,updateComponent,noop,{before:function before(){if(vm._isMounted&&!vm._isDestroyed){callHook(vm,'beforeUpdate');}}},true);hydrating=false;if(vm.$vnode==null){vm._isMounted=true;callHook(vm,'mounted');}
return vm}
function updateChildComponent(vm,propsData,listeners,parentVnode,renderChildren){if(false){}
var newScopedSlots=parentVnode.data.scopedSlots;var oldScopedSlots=vm.$scopedSlots;var hasDynamicScopedSlot=!!((newScopedSlots&&!newScopedSlots.$stable)||(oldScopedSlots!==emptyObject&&!oldScopedSlots.$stable)||(newScopedSlots&&vm.$scopedSlots.$key!==newScopedSlots.$key));var needsForceUpdate=!!(renderChildren||vm.$options._renderChildren||hasDynamicScopedSlot);vm.$options._parentVnode=parentVnode;vm.$vnode=parentVnode;if(vm._vnode){vm._vnode.parent=parentVnode;}
vm.$options._renderChildren=renderChildren;vm.$attrs=parentVnode.data.attrs||emptyObject;vm.$listeners=listeners||emptyObject;if(propsData&&vm.$options.props){toggleObserving(false);var props=vm._props;var propKeys=vm.$options._propKeys||[];for(var i=0;i<propKeys.length;i++){var key=propKeys[i];var propOptions=vm.$options.props;props[key]=validateProp(key,propOptions,propsData,vm);}
toggleObserving(true);vm.$options.propsData=propsData;}
listeners=listeners||emptyObject;var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners=listeners;updateComponentListeners(vm,listeners,oldListeners);if(needsForceUpdate){vm.$slots=resolveSlots(renderChildren,parentVnode.context);vm.$forceUpdate();}
if(false){}}
function isInInactiveTree(vm){while(vm&&(vm=vm.$parent)){if(vm._inactive){return true}}
return false}
function activateChildComponent(vm,direct){if(direct){vm._directInactive=false;if(isInInactiveTree(vm)){return}}else if(vm._directInactive){return}
if(vm._inactive||vm._inactive===null){vm._inactive=false;for(var i=0;i<vm.$children.length;i++){activateChildComponent(vm.$children[i]);}
callHook(vm,'activated');}}
function deactivateChildComponent(vm,direct){if(direct){vm._directInactive=true;if(isInInactiveTree(vm)){return}}
if(!vm._inactive){vm._inactive=true;for(var i=0;i<vm.$children.length;i++){deactivateChildComponent(vm.$children[i]);}
callHook(vm,'deactivated');}}
function callHook(vm,hook){pushTarget();var handlers=vm.$options[hook];var info=hook+" hook";if(handlers){for(var i=0,j=handlers.length;i<j;i++){invokeWithErrorHandling(handlers[i],vm,null,vm,info);}}
if(vm._hasHookEvent){vm.$emit('hook:'+hook);}
popTarget();}
var MAX_UPDATE_COUNT=100;var queue=[];var activatedChildren=[];var has={};var circular={};var waiting=false;var flushing=false;var index=0;function resetSchedulerState(){index=queue.length=activatedChildren.length=0;has={};if(false){}
waiting=flushing=false;}
var currentFlushTimestamp=0;var getNow=Date.now;if(inBrowser&&!isIE){var performance=window.performance;if(performance&&typeof performance.now==='function'&&getNow()>document.createEvent('Event').timeStamp){getNow=function(){return performance.now();};}}
function flushSchedulerQueue(){currentFlushTimestamp=getNow();flushing=true;var watcher,id;queue.sort(function(a,b){return a.id-b.id;});for(index=0;index<queue.length;index++){watcher=queue[index];if(watcher.before){watcher.before();}
id=watcher.id;has[id]=null;watcher.run();if(false){}}
var activatedQueue=activatedChildren.slice();var updatedQueue=queue.slice();resetSchedulerState();callActivatedHooks(activatedQueue);callUpdatedHooks(updatedQueue);if(devtools&&config.devtools){devtools.emit('flush');}}
function callUpdatedHooks(queue){var i=queue.length;while(i--){var watcher=queue[i];var vm=watcher.vm;if(vm._watcher===watcher&&vm._isMounted&&!vm._isDestroyed){callHook(vm,'updated');}}}
function queueActivatedComponent(vm){vm._inactive=false;activatedChildren.push(vm);}
function callActivatedHooks(queue){for(var i=0;i<queue.length;i++){queue[i]._inactive=true;activateChildComponent(queue[i],true);}}
function queueWatcher(watcher){var id=watcher.id;if(has[id]==null){has[id]=true;if(!flushing){queue.push(watcher);}else{var i=queue.length-1;while(i>index&&queue[i].id>watcher.id){i--;}
queue.splice(i+1,0,watcher);}
if(!waiting){waiting=true;if(false){}
nextTick(flushSchedulerQueue);}}}
var uid$2=0;var Watcher=function Watcher(vm,expOrFn,cb,options,isRenderWatcher){this.vm=vm;if(isRenderWatcher){vm._watcher=this;}
vm._watchers.push(this);if(options){this.deep=!!options.deep;this.user=!!options.user;this.lazy=!!options.lazy;this.sync=!!options.sync;this.before=options.before;}else{this.deep=this.user=this.lazy=this.sync=false;}
this.cb=cb;this.id=++uid$2;this.active=true;this.dirty=this.lazy;this.deps=[];this.newDeps=[];this.depIds=new _Set();this.newDepIds=new _Set();this.expression=false?undefined:'';if(typeof expOrFn==='function'){this.getter=expOrFn;}else{this.getter=parsePath(expOrFn);if(!this.getter){this.getter=noop;false&&false;}}
this.value=this.lazy?undefined:this.get();};Watcher.prototype.get=function get(){pushTarget(this);var value;var vm=this.vm;try{value=this.getter.call(vm,vm);}catch(e){if(this.user){handleError(e,vm,("getter for watcher \""+(this.expression)+"\""));}else{throw e}}finally{if(this.deep){traverse(value);}
popTarget();this.cleanupDeps();}
return value};Watcher.prototype.addDep=function addDep(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}};Watcher.prototype.cleanupDeps=function cleanupDeps(){var i=this.deps.length;while(i--){var dep=this.deps[i];if(!this.newDepIds.has(dep.id)){dep.removeSub(this);}}
var tmp=this.depIds;this.depIds=this.newDepIds;this.newDepIds=tmp;this.newDepIds.clear();tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;this.newDeps.length=0;};Watcher.prototype.update=function update(){if(this.lazy){this.dirty=true;}else if(this.sync){this.run();}else{queueWatcher(this);}};Watcher.prototype.run=function run(){if(this.active){var value=this.get();if(value!==this.value||isObject(value)||this.deep){var oldValue=this.value;this.value=value;if(this.user){try{this.cb.call(this.vm,value,oldValue);}catch(e){handleError(e,this.vm,("callback for watcher \""+(this.expression)+"\""));}}else{this.cb.call(this.vm,value,oldValue);}}}};Watcher.prototype.evaluate=function evaluate(){this.value=this.get();this.dirty=false;};Watcher.prototype.depend=function depend(){var i=this.deps.length;while(i--){this.deps[i].depend();}};Watcher.prototype.teardown=function teardown(){if(this.active){if(!this.vm._isBeingDestroyed){remove(this.vm._watchers,this);}
var i=this.deps.length;while(i--){this.deps[i].removeSub(this);}
this.active=false;}};var sharedPropertyDefinition={enumerable:true,configurable:true,get:noop,set:noop};function proxy(target,sourceKey,key){sharedPropertyDefinition.get=function proxyGetter(){return this[sourceKey][key]};sharedPropertyDefinition.set=function proxySetter(val){this[sourceKey][key]=val;};Object.defineProperty(target,key,sharedPropertyDefinition);}
function initState(vm){vm._watchers=[];var opts=vm.$options;if(opts.props){initProps(vm,opts.props);}
if(opts.methods){initMethods(vm,opts.methods);}
if(opts.data){initData(vm);}else{observe(vm._data={},true);}
if(opts.computed){initComputed(vm,opts.computed);}
if(opts.watch&&opts.watch!==nativeWatch){initWatch(vm,opts.watch);}}
function initProps(vm,propsOptions){var propsData=vm.$options.propsData||{};var props=vm._props={};var keys=vm.$options._propKeys=[];var isRoot=!vm.$parent;if(!isRoot){toggleObserving(false);}
var loop=function(key){keys.push(key);var value=validateProp(key,propsOptions,propsData,vm);if(false){var hyphenatedKey;}else{defineReactive$$1(props,key,value);}
if(!(key in vm)){proxy(vm,"_props",key);}};for(var key in propsOptions)loop(key);toggleObserving(true);}
function initData(vm){var data=vm.$options.data;data=vm._data=typeof data==='function'?getData(data,vm):data||{};if(!isPlainObject(data)){data={};false&&false;}
var keys=Object.keys(data);var props=vm.$options.props;var methods=vm.$options.methods;var i=keys.length;while(i--){var key=keys[i];if(false){}
if(props&&hasOwn(props,key)){false&&false;}else if(!isReserved(key)){proxy(vm,"_data",key);}}
observe(data,true);}
function getData(data,vm){pushTarget();try{return data.call(vm,vm)}catch(e){handleError(e,vm,"data()");return{}}finally{popTarget();}}
var computedWatcherOptions={lazy:true};function initComputed(vm,computed){var watchers=vm._computedWatchers=Object.create(null);var isSSR=isServerRendering();for(var key in computed){var userDef=computed[key];var getter=typeof userDef==='function'?userDef:userDef.get;if(false){}
if(!isSSR){watchers[key]=new Watcher(vm,getter||noop,noop,computedWatcherOptions);}
if(!(key in vm)){defineComputed(vm,key,userDef);}else if(false){}}}
function defineComputed(target,key,userDef){var shouldCache=!isServerRendering();if(typeof userDef==='function'){sharedPropertyDefinition.get=shouldCache?createComputedGetter(key):createGetterInvoker(userDef);sharedPropertyDefinition.set=noop;}else{sharedPropertyDefinition.get=userDef.get?shouldCache&&userDef.cache!==false?createComputedGetter(key):createGetterInvoker(userDef.get):noop;sharedPropertyDefinition.set=userDef.set||noop;}
if(false){}
Object.defineProperty(target,key,sharedPropertyDefinition);}
function createComputedGetter(key){return function computedGetter(){var watcher=this._computedWatchers&&this._computedWatchers[key];if(watcher){if(watcher.dirty){watcher.evaluate();}
if(Dep.target){watcher.depend();}
return watcher.value}}}
function createGetterInvoker(fn){return function computedGetter(){return fn.call(this,this)}}
function initMethods(vm,methods){var props=vm.$options.props;for(var key in methods){if(false){}
vm[key]=typeof methods[key]!=='function'?noop:bind(methods[key],vm);}}
function initWatch(vm,watch){for(var key in watch){var handler=watch[key];if(Array.isArray(handler)){for(var i=0;i<handler.length;i++){createWatcher(vm,key,handler[i]);}}else{createWatcher(vm,key,handler);}}}
function createWatcher(vm,expOrFn,handler,options){if(isPlainObject(handler)){options=handler;handler=handler.handler;}
if(typeof handler==='string'){handler=vm[handler];}
return vm.$watch(expOrFn,handler,options)}
function stateMixin(Vue){var dataDef={};dataDef.get=function(){return this._data};var propsDef={};propsDef.get=function(){return this._props};if(false){}
Object.defineProperty(Vue.prototype,'$data',dataDef);Object.defineProperty(Vue.prototype,'$props',propsDef);Vue.prototype.$set=set;Vue.prototype.$delete=del;Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;if(isPlainObject(cb)){return createWatcher(vm,expOrFn,cb,options)}
options=options||{};options.user=true;var watcher=new Watcher(vm,expOrFn,cb,options);if(options.immediate){try{cb.call(vm,watcher.value);}catch(error){handleError(error,vm,("callback for immediate watcher \""+(watcher.expression)+"\""));}}
return function unwatchFn(){watcher.teardown();}};}
var uid$3=0;function initMixin(Vue){Vue.prototype._init=function(options){var vm=this;vm._uid=uid$3++;var startTag,endTag;if(false){}
vm._isVue=true;if(options&&options._isComponent){initInternalComponent(vm,options);}else{vm.$options=mergeOptions(resolveConstructorOptions(vm.constructor),options||{},vm);}
if(false){}else{vm._renderProxy=vm;}
vm._self=vm;initLifecycle(vm);initEvents(vm);initRender(vm);callHook(vm,'beforeCreate');initInjections(vm);initState(vm);initProvide(vm);callHook(vm,'created');if(false){}
if(vm.$options.el){vm.$mount(vm.$options.el);}};}
function initInternalComponent(vm,options){var opts=vm.$options=Object.create(vm.constructor.options);var parentVnode=options._parentVnode;opts.parent=options.parent;opts._parentVnode=parentVnode;var vnodeComponentOptions=parentVnode.componentOptions;opts.propsData=vnodeComponentOptions.propsData;opts._parentListeners=vnodeComponentOptions.listeners;opts._renderChildren=vnodeComponentOptions.children;opts._componentTag=vnodeComponentOptions.tag;if(options.render){opts.render=options.render;opts.staticRenderFns=options.staticRenderFns;}}
function resolveConstructorOptions(Ctor){var options=Ctor.options;if(Ctor.super){var superOptions=resolveConstructorOptions(Ctor.super);var cachedSuperOptions=Ctor.superOptions;if(superOptions!==cachedSuperOptions){Ctor.superOptions=superOptions;var modifiedOptions=resolveModifiedOptions(Ctor);if(modifiedOptions){extend(Ctor.extendOptions,modifiedOptions);}
options=Ctor.options=mergeOptions(superOptions,Ctor.extendOptions);if(options.name){options.components[options.name]=Ctor;}}}
return options}
function resolveModifiedOptions(Ctor){var modified;var latest=Ctor.options;var sealed=Ctor.sealedOptions;for(var key in latest){if(latest[key]!==sealed[key]){if(!modified){modified={};}
modified[key]=latest[key];}}
return modified}
function Vue(options){if(false){}
this._init(options);}
initMixin(Vue);stateMixin(Vue);eventsMixin(Vue);lifecycleMixin(Vue);renderMixin(Vue);function initUse(Vue){Vue.use=function(plugin){var installedPlugins=(this._installedPlugins||(this._installedPlugins=[]));if(installedPlugins.indexOf(plugin)>-1){return this}
var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else if(typeof plugin==='function'){plugin.apply(null,args);}
installedPlugins.push(plugin);return this};}
function initMixin$1(Vue){Vue.mixin=function(mixin){this.options=mergeOptions(this.options,mixin);return this};}
function initExtend(Vue){Vue.cid=0;var cid=1;Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var SuperId=Super.cid;var cachedCtors=extendOptions._Ctor||(extendOptions._Ctor={});if(cachedCtors[SuperId]){return cachedCtors[SuperId]}
var name=extendOptions.name||Super.options.name;if(false){}
var Sub=function VueComponent(options){this._init(options);};Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=mergeOptions(Super.options,extendOptions);Sub['super']=Super;if(Sub.options.props){initProps$1(Sub);}
if(Sub.options.computed){initComputed$1(Sub);}
Sub.extend=Super.extend;Sub.mixin=Super.mixin;Sub.use=Super.use;ASSET_TYPES.forEach(function(type){Sub[type]=Super[type];});if(name){Sub.options.components[name]=Sub;}
Sub.superOptions=Super.options;Sub.extendOptions=extendOptions;Sub.sealedOptions=extend({},Sub.options);cachedCtors[SuperId]=Sub;return Sub};}
function initProps$1(Comp){var props=Comp.options.props;for(var key in props){proxy(Comp.prototype,"_props",key);}}
function initComputed$1(Comp){var computed=Comp.options.computed;for(var key in computed){defineComputed(Comp.prototype,key,computed[key]);}}
function initAssetRegisters(Vue){ASSET_TYPES.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id]}else{if(false){}
if(type==='component'&&isPlainObject(definition)){definition.name=definition.name||id;definition=this.options._base.extend(definition);}
if(type==='directive'&&typeof definition==='function'){definition={bind:definition,update:definition};}
this.options[type+'s'][id]=definition;return definition}};});}
function getComponentName(opts){return opts&&(opts.Ctor.options.name||opts.tag)}
function matches(pattern,name){if(Array.isArray(pattern)){return pattern.indexOf(name)>-1}else if(typeof pattern==='string'){return pattern.split(',').indexOf(name)>-1}else if(isRegExp(pattern)){return pattern.test(name)}
return false}
function pruneCache(keepAliveInstance,filter){var cache=keepAliveInstance.cache;var keys=keepAliveInstance.keys;var _vnode=keepAliveInstance._vnode;for(var key in cache){var cachedNode=cache[key];if(cachedNode){var name=getComponentName(cachedNode.componentOptions);if(name&&!filter(name)){pruneCacheEntry(cache,key,keys,_vnode);}}}}
function pruneCacheEntry(cache,key,keys,current){var cached$$1=cache[key];if(cached$$1&&(!current||cached$$1.tag!==current.tag)){cached$$1.componentInstance.$destroy();}
cache[key]=null;remove(keys,key);}
var patternTypes=[String,RegExp,Array];var KeepAlive={name:'keep-alive',abstract:true,props:{include:patternTypes,exclude:patternTypes,max:[String,Number]},created:function created(){this.cache=Object.create(null);this.keys=[];},destroyed:function destroyed(){for(var key in this.cache){pruneCacheEntry(this.cache,key,this.keys);}},mounted:function mounted(){var this$1=this;this.$watch('include',function(val){pruneCache(this$1,function(name){return matches(val,name);});});this.$watch('exclude',function(val){pruneCache(this$1,function(name){return!matches(val,name);});});},render:function render(){var slot=this.$slots.default;var vnode=getFirstComponentChild(slot);var componentOptions=vnode&&vnode.componentOptions;if(componentOptions){var name=getComponentName(componentOptions);var ref=this;var include=ref.include;var exclude=ref.exclude;if((include&&(!name||!matches(include,name)))||(exclude&&name&&matches(exclude,name))){return vnode}
var ref$1=this;var cache=ref$1.cache;var keys=ref$1.keys;var key=vnode.key==null?componentOptions.Ctor.cid+(componentOptions.tag?("::"+(componentOptions.tag)):''):vnode.key;if(cache[key]){vnode.componentInstance=cache[key].componentInstance;remove(keys,key);keys.push(key);}else{cache[key]=vnode;keys.push(key);if(this.max&&keys.length>parseInt(this.max)){pruneCacheEntry(cache,keys[0],keys,this._vnode);}}
vnode.data.keepAlive=true;}
return vnode||(slot&&slot[0])}};var builtInComponents={KeepAlive:KeepAlive};function initGlobalAPI(Vue){var configDef={};configDef.get=function(){return config;};if(false){}
Object.defineProperty(Vue,'config',configDef);Vue.util={warn:warn,extend:extend,mergeOptions:mergeOptions,defineReactive:defineReactive$$1};Vue.set=set;Vue.delete=del;Vue.nextTick=nextTick;Vue.observable=function(obj){observe(obj);return obj};Vue.options=Object.create(null);ASSET_TYPES.forEach(function(type){Vue.options[type+'s']=Object.create(null);});Vue.options._base=Vue;extend(Vue.options.components,builtInComponents);initUse(Vue);initMixin$1(Vue);initExtend(Vue);initAssetRegisters(Vue);}
initGlobalAPI(Vue);Object.defineProperty(Vue.prototype,'$isServer',{get:isServerRendering});Object.defineProperty(Vue.prototype,'$ssrContext',{get:function get(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(Vue,'FunctionalRenderContext',{value:FunctionalRenderContext});Vue.version='2.6.12';var isReservedAttr=makeMap('style,class');var acceptValue=makeMap('input,textarea,option,select,progress');var mustUseProp=function(tag,type,attr){return((attr==='value'&&acceptValue(tag))&&type!=='button'||(attr==='selected'&&tag==='option')||(attr==='checked'&&tag==='input')||(attr==='muted'&&tag==='video'))};var isEnumeratedAttr=makeMap('contenteditable,draggable,spellcheck');var isValidContentEditableValue=makeMap('events,caret,typing,plaintext-only');var convertEnumeratedValue=function(key,value){return isFalsyAttrValue(value)||value==='false'?'false':key==='contenteditable'&&isValidContentEditableValue(value)?value:'true'};var isBooleanAttr=makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,'+'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,'+'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,'+'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,'+'required,reversed,scoped,seamless,selected,sortable,translate,'+'truespeed,typemustmatch,visible');var xlinkNS='http://www.w3.org/1999/xlink';var isXlink=function(name){return name.charAt(5)===':'&&name.slice(0,5)==='xlink'};var getXlinkProp=function(name){return isXlink(name)?name.slice(6,name.length):''};var isFalsyAttrValue=function(val){return val==null||val===false};function genClassForVnode(vnode){var data=vnode.data;var parentNode=vnode;var childNode=vnode;while(isDef(childNode.componentInstance)){childNode=childNode.componentInstance._vnode;if(childNode&&childNode.data){data=mergeClassData(childNode.data,data);}}
while(isDef(parentNode=parentNode.parent)){if(parentNode&&parentNode.data){data=mergeClassData(data,parentNode.data);}}
return renderClass(data.staticClass,data.class)}
function mergeClassData(child,parent){return{staticClass:concat(child.staticClass,parent.staticClass),class:isDef(child.class)?[child.class,parent.class]:parent.class}}
function renderClass(staticClass,dynamicClass){if(isDef(staticClass)||isDef(dynamicClass)){return concat(staticClass,stringifyClass(dynamicClass))}
return''}
function concat(a,b){return a?b?(a+' '+b):a:(b||'')}
function stringifyClass(value){if(Array.isArray(value)){return stringifyArray(value)}
if(isObject(value)){return stringifyObject(value)}
if(typeof value==='string'){return value}
return''}
function stringifyArray(value){var res='';var stringified;for(var i=0,l=value.length;i<l;i++){if(isDef(stringified=stringifyClass(value[i]))&&stringified!==''){if(res){res+=' ';}
res+=stringified;}}
return res}
function stringifyObject(value){var res='';for(var key in value){if(value[key]){if(res){res+=' ';}
res+=key;}}
return res}
var namespaceMap={svg:'http://www.w3.org/2000/svg',math:'http://www.w3.org/1998/Math/MathML'};var isHTMLTag=makeMap('html,body,base,head,link,meta,style,title,'+'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,'+'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,'+'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,'+'s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,'+'embed,object,param,source,canvas,script,noscript,del,ins,'+'caption,col,colgroup,table,thead,tbody,td,th,tr,'+'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,'+'output,progress,select,textarea,'+'details,dialog,menu,menuitem,summary,'+'content,element,shadow,template,blockquote,iframe,tfoot');var isSVG=makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,'+'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,'+'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',true);var isReservedTag=function(tag){return isHTMLTag(tag)||isSVG(tag)};function getTagNamespace(tag){if(isSVG(tag)){return'svg'}
if(tag==='math'){return'math'}}
var unknownElementCache=Object.create(null);function isUnknownElement(tag){if(!inBrowser){return true}
if(isReservedTag(tag)){return false}
tag=tag.toLowerCase();if(unknownElementCache[tag]!=null){return unknownElementCache[tag]}
var el=document.createElement(tag);if(tag.indexOf('-')>-1){return(unknownElementCache[tag]=(el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement))}else{return(unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString()))}}
var isTextInputType=makeMap('text,number,password,search,email,tel,url');function query(el){if(typeof el==='string'){var selected=document.querySelector(el);if(!selected){false&&false;return document.createElement('div')}
return selected}else{return el}}
function createElement$1(tagName,vnode){var elm=document.createElement(tagName);if(tagName!=='select'){return elm}
if(vnode.data&&vnode.data.attrs&&vnode.data.attrs.multiple!==undefined){elm.setAttribute('multiple','multiple');}
return elm}
function createElementNS(namespace,tagName){return document.createElementNS(namespaceMap[namespace],tagName)}
function createTextNode(text){return document.createTextNode(text)}
function createComment(text){return document.createComment(text)}
function insertBefore(parentNode,newNode,referenceNode){parentNode.insertBefore(newNode,referenceNode);}
function removeChild(node,child){node.removeChild(child);}
function appendChild(node,child){node.appendChild(child);}
function parentNode(node){return node.parentNode}
function nextSibling(node){return node.nextSibling}
function tagName(node){return node.tagName}
function setTextContent(node,text){node.textContent=text;}
function setStyleScope(node,scopeId){node.setAttribute(scopeId,'');}
var nodeOps=Object.freeze({createElement:createElement$1,createElementNS:createElementNS,createTextNode:createTextNode,createComment:createComment,insertBefore:insertBefore,removeChild:removeChild,appendChild:appendChild,parentNode:parentNode,nextSibling:nextSibling,tagName:tagName,setTextContent:setTextContent,setStyleScope:setStyleScope});var ref={create:function create(_,vnode){registerRef(vnode);},update:function update(oldVnode,vnode){if(oldVnode.data.ref!==vnode.data.ref){registerRef(oldVnode,true);registerRef(vnode);}},destroy:function destroy(vnode){registerRef(vnode,true);}};function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(!isDef(key)){return}
var vm=vnode.context;var ref=vnode.componentInstance||vnode.elm;var refs=vm.$refs;if(isRemoval){if(Array.isArray(refs[key])){remove(refs[key],ref);}else if(refs[key]===ref){refs[key]=undefined;}}else{if(vnode.data.refInFor){if(!Array.isArray(refs[key])){refs[key]=[ref];}else if(refs[key].indexOf(ref)<0){refs[key].push(ref);}}else{refs[key]=ref;}}}
var emptyNode=new VNode('',{},[]);var hooks=['create','activate','update','remove','destroy'];function sameVnode(a,b){return(a.key===b.key&&((a.tag===b.tag&&a.isComment===b.isComment&&isDef(a.data)===isDef(b.data)&&sameInputType(a,b))||(isTrue(a.isAsyncPlaceholder)&&a.asyncFactory===b.asyncFactory&&isUndef(b.asyncFactory.error))))}
function sameInputType(a,b){if(a.tag!=='input'){return true}
var i;var typeA=isDef(i=a.data)&&isDef(i=i.attrs)&&i.type;var typeB=isDef(i=b.data)&&isDef(i=i.attrs)&&i.type;return typeA===typeB||isTextInputType(typeA)&&isTextInputType(typeB)}
function createKeyToOldIdx(children,beginIdx,endIdx){var i,key;var map={};for(i=beginIdx;i<=endIdx;++i){key=children[i].key;if(isDef(key)){map[key]=i;}}
return map}
function createPatchFunction(backend){var i,j;var cbs={};var modules=backend.modules;var nodeOps=backend.nodeOps;for(i=0;i<hooks.length;++i){cbs[hooks[i]]=[];for(j=0;j<modules.length;++j){if(isDef(modules[j][hooks[i]])){cbs[hooks[i]].push(modules[j][hooks[i]]);}}}
function emptyNodeAt(elm){return new VNode(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm)}
function createRmCb(childElm,listeners){function remove$$1(){if(--remove$$1.listeners===0){removeNode(childElm);}}
remove$$1.listeners=listeners;return remove$$1}
function removeNode(el){var parent=nodeOps.parentNode(el);if(isDef(parent)){nodeOps.removeChild(parent,el);}}
function isUnknownElement$$1(vnode,inVPre){return(!inVPre&&!vnode.ns&&!(config.ignoredElements.length&&config.ignoredElements.some(function(ignore){return isRegExp(ignore)?ignore.test(vnode.tag):ignore===vnode.tag}))&&config.isUnknownElement(vnode.tag))}
var creatingElmInVPre=0;function createElm(vnode,insertedVnodeQueue,parentElm,refElm,nested,ownerArray,index){if(isDef(vnode.elm)&&isDef(ownerArray)){vnode=ownerArray[index]=cloneVNode(vnode);}
vnode.isRootInsert=!nested;if(createComponent(vnode,insertedVnodeQueue,parentElm,refElm)){return}
var data=vnode.data;var children=vnode.children;var tag=vnode.tag;if(isDef(tag)){if(false){}
vnode.elm=vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag,vnode);setScope(vnode);{createChildren(vnode,children,insertedVnodeQueue);if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}
insert(parentElm,vnode.elm,refElm);}
if(false){}}else if(isTrue(vnode.isComment)){vnode.elm=nodeOps.createComment(vnode.text);insert(parentElm,vnode.elm,refElm);}else{vnode.elm=nodeOps.createTextNode(vnode.text);insert(parentElm,vnode.elm,refElm);}}
function createComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i=vnode.data;if(isDef(i)){var isReactivated=isDef(vnode.componentInstance)&&i.keepAlive;if(isDef(i=i.hook)&&isDef(i=i.init)){i(vnode,false);}
if(isDef(vnode.componentInstance)){initComponent(vnode,insertedVnodeQueue);insert(parentElm,vnode.elm,refElm);if(isTrue(isReactivated)){reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm);}
return true}}}
function initComponent(vnode,insertedVnodeQueue){if(isDef(vnode.data.pendingInsert)){insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert);vnode.data.pendingInsert=null;}
vnode.elm=vnode.componentInstance.$el;if(isPatchable(vnode)){invokeCreateHooks(vnode,insertedVnodeQueue);setScope(vnode);}else{registerRef(vnode);insertedVnodeQueue.push(vnode);}}
function reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i;var innerNode=vnode;while(innerNode.componentInstance){innerNode=innerNode.componentInstance._vnode;if(isDef(i=innerNode.data)&&isDef(i=i.transition)){for(i=0;i<cbs.activate.length;++i){cbs.activate[i](emptyNode,innerNode);}
insertedVnodeQueue.push(innerNode);break}}
insert(parentElm,vnode.elm,refElm);}
function insert(parent,elm,ref$$1){if(isDef(parent)){if(isDef(ref$$1)){if(nodeOps.parentNode(ref$$1)===parent){nodeOps.insertBefore(parent,elm,ref$$1);}}else{nodeOps.appendChild(parent,elm);}}}
function createChildren(vnode,children,insertedVnodeQueue){if(Array.isArray(children)){if(false){}
for(var i=0;i<children.length;++i){createElm(children[i],insertedVnodeQueue,vnode.elm,null,true,children,i);}}else if(isPrimitive(vnode.text)){nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(String(vnode.text)));}}
function isPatchable(vnode){while(vnode.componentInstance){vnode=vnode.componentInstance._vnode;}
return isDef(vnode.tag)}
function invokeCreateHooks(vnode,insertedVnodeQueue){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,vnode);}
i=vnode.data.hook;if(isDef(i)){if(isDef(i.create)){i.create(emptyNode,vnode);}
if(isDef(i.insert)){insertedVnodeQueue.push(vnode);}}}
function setScope(vnode){var i;if(isDef(i=vnode.fnScopeId)){nodeOps.setStyleScope(vnode.elm,i);}else{var ancestor=vnode;while(ancestor){if(isDef(i=ancestor.context)&&isDef(i=i.$options._scopeId)){nodeOps.setStyleScope(vnode.elm,i);}
ancestor=ancestor.parent;}}
if(isDef(i=activeInstance)&&i!==vnode.context&&i!==vnode.fnContext&&isDef(i=i.$options._scopeId)){nodeOps.setStyleScope(vnode.elm,i);}}
function addVnodes(parentElm,refElm,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx<=endIdx;++startIdx){createElm(vnodes[startIdx],insertedVnodeQueue,parentElm,refElm,false,vnodes,startIdx);}}
function invokeDestroyHook(vnode){var i,j;var data=vnode.data;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.destroy)){i(vnode);}
for(i=0;i<cbs.destroy.length;++i){cbs.destroy[i](vnode);}}
if(isDef(i=vnode.children)){for(j=0;j<vnode.children.length;++j){invokeDestroyHook(vnode.children[j]);}}}
function removeVnodes(vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){var ch=vnodes[startIdx];if(isDef(ch)){if(isDef(ch.tag)){removeAndInvokeRemoveHook(ch);invokeDestroyHook(ch);}else{removeNode(ch.elm);}}}}
function removeAndInvokeRemoveHook(vnode,rm){if(isDef(rm)||isDef(vnode.data)){var i;var listeners=cbs.remove.length+1;if(isDef(rm)){rm.listeners+=listeners;}else{rm=createRmCb(vnode.elm,listeners);}
if(isDef(i=vnode.componentInstance)&&isDef(i=i._vnode)&&isDef(i.data)){removeAndInvokeRemoveHook(i,rm);}
for(i=0;i<cbs.remove.length;++i){cbs.remove[i](vnode,rm);}
if(isDef(i=vnode.data.hook)&&isDef(i=i.remove)){i(vnode,rm);}else{rm();}}else{removeNode(vnode.elm);}}
function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){var oldStartIdx=0;var newStartIdx=0;var oldEndIdx=oldCh.length-1;var oldStartVnode=oldCh[0];var oldEndVnode=oldCh[oldEndIdx];var newEndIdx=newCh.length-1;var newStartVnode=newCh[0];var newEndVnode=newCh[newEndIdx];var oldKeyToIdx,idxInOld,vnodeToMove,refElm;var canMove=!removeOnly;if(false){}
while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){if(isUndef(oldStartVnode)){oldStartVnode=oldCh[++oldStartIdx];}else if(isUndef(oldEndVnode)){oldEndVnode=oldCh[--oldEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);oldStartVnode=oldCh[++oldStartIdx];newStartVnode=newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue,newCh,newEndIdx);oldEndVnode=oldCh[--oldEndIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue,newCh,newEndIdx);canMove&&nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));oldStartVnode=oldCh[++oldStartIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);canMove&&nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);oldEndVnode=oldCh[--oldEndIdx];newStartVnode=newCh[++newStartIdx];}else{if(isUndef(oldKeyToIdx)){oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}
idxInOld=isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:findIdxInOld(newStartVnode,oldCh,oldStartIdx,oldEndIdx);if(isUndef(idxInOld)){createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm,false,newCh,newStartIdx);}else{vnodeToMove=oldCh[idxInOld];if(sameVnode(vnodeToMove,newStartVnode)){patchVnode(vnodeToMove,newStartVnode,insertedVnodeQueue,newCh,newStartIdx);oldCh[idxInOld]=undefined;canMove&&nodeOps.insertBefore(parentElm,vnodeToMove.elm,oldStartVnode.elm);}else{createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm,false,newCh,newStartIdx);}}
newStartVnode=newCh[++newStartIdx];}}
if(oldStartIdx>oldEndIdx){refElm=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm;addVnodes(parentElm,refElm,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);}else if(newStartIdx>newEndIdx){removeVnodes(oldCh,oldStartIdx,oldEndIdx);}}
function checkDuplicateKeys(children){var seenKeys={};for(var i=0;i<children.length;i++){var vnode=children[i];var key=vnode.key;if(isDef(key)){if(seenKeys[key]){warn(("Duplicate keys detected: '"+key+"'. This may cause an update error."),vnode.context);}else{seenKeys[key]=true;}}}}
function findIdxInOld(node,oldCh,start,end){for(var i=start;i<end;i++){var c=oldCh[i];if(isDef(c)&&sameVnode(node,c)){return i}}}
function patchVnode(oldVnode,vnode,insertedVnodeQueue,ownerArray,index,removeOnly){if(oldVnode===vnode){return}
if(isDef(vnode.elm)&&isDef(ownerArray)){vnode=ownerArray[index]=cloneVNode(vnode);}
var elm=vnode.elm=oldVnode.elm;if(isTrue(oldVnode.isAsyncPlaceholder)){if(isDef(vnode.asyncFactory.resolved)){hydrate(oldVnode.elm,vnode,insertedVnodeQueue);}else{vnode.isAsyncPlaceholder=true;}
return}
if(isTrue(vnode.isStatic)&&isTrue(oldVnode.isStatic)&&vnode.key===oldVnode.key&&(isTrue(vnode.isCloned)||isTrue(vnode.isOnce))){vnode.componentInstance=oldVnode.componentInstance;return}
var i;var data=vnode.data;if(isDef(data)&&isDef(i=data.hook)&&isDef(i=i.prepatch)){i(oldVnode,vnode);}
var oldCh=oldVnode.children;var ch=vnode.children;if(isDef(data)&&isPatchable(vnode)){for(i=0;i<cbs.update.length;++i){cbs.update[i](oldVnode,vnode);}
if(isDef(i=data.hook)&&isDef(i=i.update)){i(oldVnode,vnode);}}
if(isUndef(vnode.text)){if(isDef(oldCh)&&isDef(ch)){if(oldCh!==ch){updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly);}}else if(isDef(ch)){if(false){}
if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}
addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue);}else if(isDef(oldCh)){removeVnodes(oldCh,0,oldCh.length-1);}else if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}}else if(oldVnode.text!==vnode.text){nodeOps.setTextContent(elm,vnode.text);}
if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.postpatch)){i(oldVnode,vnode);}}}
function invokeInsertHook(vnode,queue,initial){if(isTrue(initial)&&isDef(vnode.parent)){vnode.parent.data.pendingInsert=queue;}else{for(var i=0;i<queue.length;++i){queue[i].data.hook.insert(queue[i]);}}}
var hydrationBailed=false;var isRenderedModule=makeMap('attrs,class,staticClass,staticStyle,key');function hydrate(elm,vnode,insertedVnodeQueue,inVPre){var i;var tag=vnode.tag;var data=vnode.data;var children=vnode.children;inVPre=inVPre||(data&&data.pre);vnode.elm=elm;if(isTrue(vnode.isComment)&&isDef(vnode.asyncFactory)){vnode.isAsyncPlaceholder=true;return true}
if(false){}
if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode,true);}
if(isDef(i=vnode.componentInstance)){initComponent(vnode,insertedVnodeQueue);return true}}
if(isDef(tag)){if(isDef(children)){if(!elm.hasChildNodes()){createChildren(vnode,children,insertedVnodeQueue);}else{if(isDef(i=data)&&isDef(i=i.domProps)&&isDef(i=i.innerHTML)){if(i!==elm.innerHTML){if(false){}
return false}}else{var childrenMatch=true;var childNode=elm.firstChild;for(var i$1=0;i$1<children.length;i$1++){if(!childNode||!hydrate(childNode,children[i$1],insertedVnodeQueue,inVPre)){childrenMatch=false;break}
childNode=childNode.nextSibling;}
if(!childrenMatch||childNode){if(false){}
return false}}}}
if(isDef(data)){var fullInvoke=false;for(var key in data){if(!isRenderedModule(key)){fullInvoke=true;invokeCreateHooks(vnode,insertedVnodeQueue);break}}
if(!fullInvoke&&data['class']){traverse(data['class']);}}}else if(elm.data!==vnode.text){elm.data=vnode.text;}
return true}
function assertNodeMatch(node,vnode,inVPre){if(isDef(vnode.tag)){return vnode.tag.indexOf('vue-component')===0||(!isUnknownElement$$1(vnode,inVPre)&&vnode.tag.toLowerCase()===(node.tagName&&node.tagName.toLowerCase()))}else{return node.nodeType===(vnode.isComment?8:3)}}
return function patch(oldVnode,vnode,hydrating,removeOnly){if(isUndef(vnode)){if(isDef(oldVnode)){invokeDestroyHook(oldVnode);}
return}
var isInitialPatch=false;var insertedVnodeQueue=[];if(isUndef(oldVnode)){isInitialPatch=true;createElm(vnode,insertedVnodeQueue);}else{var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement&&sameVnode(oldVnode,vnode)){patchVnode(oldVnode,vnode,insertedVnodeQueue,null,null,removeOnly);}else{if(isRealElement){if(oldVnode.nodeType===1&&oldVnode.hasAttribute(SSR_ATTR)){oldVnode.removeAttribute(SSR_ATTR);hydrating=true;}
if(isTrue(hydrating)){if(hydrate(oldVnode,vnode,insertedVnodeQueue)){invokeInsertHook(vnode,insertedVnodeQueue,true);return oldVnode}else if(false){}}
oldVnode=emptyNodeAt(oldVnode);}
var oldElm=oldVnode.elm;var parentElm=nodeOps.parentNode(oldElm);createElm(vnode,insertedVnodeQueue,oldElm._leaveCb?null:parentElm,nodeOps.nextSibling(oldElm));if(isDef(vnode.parent)){var ancestor=vnode.parent;var patchable=isPatchable(vnode);while(ancestor){for(var i=0;i<cbs.destroy.length;++i){cbs.destroy[i](ancestor);}
ancestor.elm=vnode.elm;if(patchable){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,ancestor);}
var insert=ancestor.data.hook.insert;if(insert.merged){for(var i$2=1;i$2<insert.fns.length;i$2++){insert.fns[i$2]();}}}else{registerRef(ancestor);}
ancestor=ancestor.parent;}}
if(isDef(parentElm)){removeVnodes([oldVnode],0,0);}else if(isDef(oldVnode.tag)){invokeDestroyHook(oldVnode);}}}
invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch);return vnode.elm}}
var directives={create:updateDirectives,update:updateDirectives,destroy:function unbindDirectives(vnode){updateDirectives(vnode,emptyNode);}};function updateDirectives(oldVnode,vnode){if(oldVnode.data.directives||vnode.data.directives){_update(oldVnode,vnode);}}
function _update(oldVnode,vnode){var isCreate=oldVnode===emptyNode;var isDestroy=vnode===emptyNode;var oldDirs=normalizeDirectives$1(oldVnode.data.directives,oldVnode.context);var newDirs=normalizeDirectives$1(vnode.data.directives,vnode.context);var dirsWithInsert=[];var dirsWithPostpatch=[];var key,oldDir,dir;for(key in newDirs){oldDir=oldDirs[key];dir=newDirs[key];if(!oldDir){callHook$1(dir,'bind',vnode,oldVnode);if(dir.def&&dir.def.inserted){dirsWithInsert.push(dir);}}else{dir.oldValue=oldDir.value;dir.oldArg=oldDir.arg;callHook$1(dir,'update',vnode,oldVnode);if(dir.def&&dir.def.componentUpdated){dirsWithPostpatch.push(dir);}}}
if(dirsWithInsert.length){var callInsert=function(){for(var i=0;i<dirsWithInsert.length;i++){callHook$1(dirsWithInsert[i],'inserted',vnode,oldVnode);}};if(isCreate){mergeVNodeHook(vnode,'insert',callInsert);}else{callInsert();}}
if(dirsWithPostpatch.length){mergeVNodeHook(vnode,'postpatch',function(){for(var i=0;i<dirsWithPostpatch.length;i++){callHook$1(dirsWithPostpatch[i],'componentUpdated',vnode,oldVnode);}});}
if(!isCreate){for(key in oldDirs){if(!newDirs[key]){callHook$1(oldDirs[key],'unbind',oldVnode,oldVnode,isDestroy);}}}}
var emptyModifiers=Object.create(null);function normalizeDirectives$1(dirs,vm){var res=Object.create(null);if(!dirs){return res}
var i,dir;for(i=0;i<dirs.length;i++){dir=dirs[i];if(!dir.modifiers){dir.modifiers=emptyModifiers;}
res[getRawDirName(dir)]=dir;dir.def=resolveAsset(vm.$options,'directives',dir.name,true);}
return res}
function getRawDirName(dir){return dir.rawName||((dir.name)+"."+(Object.keys(dir.modifiers||{}).join('.')))}
function callHook$1(dir,hook,vnode,oldVnode,isDestroy){var fn=dir.def&&dir.def[hook];if(fn){try{fn(vnode.elm,dir,vnode,oldVnode,isDestroy);}catch(e){handleError(e,vnode.context,("directive "+(dir.name)+" "+hook+" hook"));}}}
var baseModules=[ref,directives];function updateAttrs(oldVnode,vnode){var opts=vnode.componentOptions;if(isDef(opts)&&opts.Ctor.options.inheritAttrs===false){return}
if(isUndef(oldVnode.data.attrs)&&isUndef(vnode.data.attrs)){return}
var key,cur,old;var elm=vnode.elm;var oldAttrs=oldVnode.data.attrs||{};var attrs=vnode.data.attrs||{};if(isDef(attrs.__ob__)){attrs=vnode.data.attrs=extend({},attrs);}
for(key in attrs){cur=attrs[key];old=oldAttrs[key];if(old!==cur){setAttr(elm,key,cur);}}
if((isIE||isEdge)&&attrs.value!==oldAttrs.value){setAttr(elm,'value',attrs.value);}
for(key in oldAttrs){if(isUndef(attrs[key])){if(isXlink(key)){elm.removeAttributeNS(xlinkNS,getXlinkProp(key));}else if(!isEnumeratedAttr(key)){elm.removeAttribute(key);}}}}
function setAttr(el,key,value){if(el.tagName.indexOf('-')>-1){baseSetAttr(el,key,value);}else if(isBooleanAttr(key)){if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{value=key==='allowfullscreen'&&el.tagName==='EMBED'?'true':key;el.setAttribute(key,value);}}else if(isEnumeratedAttr(key)){el.setAttribute(key,convertEnumeratedValue(key,value));}else if(isXlink(key)){if(isFalsyAttrValue(value)){el.removeAttributeNS(xlinkNS,getXlinkProp(key));}else{el.setAttributeNS(xlinkNS,key,value);}}else{baseSetAttr(el,key,value);}}
function baseSetAttr(el,key,value){if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{if(isIE&&!isIE9&&el.tagName==='TEXTAREA'&&key==='placeholder'&&value!==''&&!el.__ieph){var blocker=function(e){e.stopImmediatePropagation();el.removeEventListener('input',blocker);};el.addEventListener('input',blocker);el.__ieph=true;}
el.setAttribute(key,value);}}
var attrs={create:updateAttrs,update:updateAttrs};function updateClass(oldVnode,vnode){var el=vnode.elm;var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticClass)&&isUndef(data.class)&&(isUndef(oldData)||(isUndef(oldData.staticClass)&&isUndef(oldData.class)))){return}
var cls=genClassForVnode(vnode);var transitionClass=el._transitionClasses;if(isDef(transitionClass)){cls=concat(cls,stringifyClass(transitionClass));}
if(cls!==el._prevClass){el.setAttribute('class',cls);el._prevClass=cls;}}
var klass={create:updateClass,update:updateClass};var RANGE_TOKEN='__r';var CHECKBOX_RADIO_TOKEN='__c';function normalizeEvents(on){if(isDef(on[RANGE_TOKEN])){var event=isIE?'change':'input';on[event]=[].concat(on[RANGE_TOKEN],on[event]||[]);delete on[RANGE_TOKEN];}
if(isDef(on[CHECKBOX_RADIO_TOKEN])){on.change=[].concat(on[CHECKBOX_RADIO_TOKEN],on.change||[]);delete on[CHECKBOX_RADIO_TOKEN];}}
var target$1;function createOnceHandler$1(event,handler,capture){var _target=target$1;return function onceHandler(){var res=handler.apply(null,arguments);if(res!==null){remove$2(event,onceHandler,capture,_target);}}}
var useMicrotaskFix=isUsingMicroTask&&!(isFF&&Number(isFF[1])<=53);function add$1(name,handler,capture,passive){if(useMicrotaskFix){var attachedTimestamp=currentFlushTimestamp;var original=handler;handler=original._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=attachedTimestamp||e.timeStamp<=0||e.target.ownerDocument!==document){return original.apply(this,arguments)}};}
target$1.addEventListener(name,handler,supportsPassive?{capture:capture,passive:passive}:capture);}
function remove$2(name,handler,capture,_target){(_target||target$1).removeEventListener(name,handler._wrapper||handler,capture);}
function updateDOMListeners(oldVnode,vnode){if(isUndef(oldVnode.data.on)&&isUndef(vnode.data.on)){return}
var on=vnode.data.on||{};var oldOn=oldVnode.data.on||{};target$1=vnode.elm;normalizeEvents(on);updateListeners(on,oldOn,add$1,remove$2,createOnceHandler$1,vnode.context);target$1=undefined;}
var events={create:updateDOMListeners,update:updateDOMListeners};var svgContainer;function updateDOMProps(oldVnode,vnode){if(isUndef(oldVnode.data.domProps)&&isUndef(vnode.data.domProps)){return}
var key,cur;var elm=vnode.elm;var oldProps=oldVnode.data.domProps||{};var props=vnode.data.domProps||{};if(isDef(props.__ob__)){props=vnode.data.domProps=extend({},props);}
for(key in oldProps){if(!(key in props)){elm[key]='';}}
for(key in props){cur=props[key];if(key==='textContent'||key==='innerHTML'){if(vnode.children){vnode.children.length=0;}
if(cur===oldProps[key]){continue}
if(elm.childNodes.length===1){elm.removeChild(elm.childNodes[0]);}}
if(key==='value'&&elm.tagName!=='PROGRESS'){elm._value=cur;var strCur=isUndef(cur)?'':String(cur);if(shouldUpdateValue(elm,strCur)){elm.value=strCur;}}else if(key==='innerHTML'&&isSVG(elm.tagName)&&isUndef(elm.innerHTML)){svgContainer=svgContainer||document.createElement('div');svgContainer.innerHTML="<svg>"+cur+"</svg>";var svg=svgContainer.firstChild;while(elm.firstChild){elm.removeChild(elm.firstChild);}
while(svg.firstChild){elm.appendChild(svg.firstChild);}}else if(cur!==oldProps[key]){try{elm[key]=cur;}catch(e){}}}}
function shouldUpdateValue(elm,checkVal){return(!elm.composing&&(elm.tagName==='OPTION'||isNotInFocusAndDirty(elm,checkVal)||isDirtyWithModifiers(elm,checkVal)))}
function isNotInFocusAndDirty(elm,checkVal){var notInFocus=true;try{notInFocus=document.activeElement!==elm;}catch(e){}
return notInFocus&&elm.value!==checkVal}
function isDirtyWithModifiers(elm,newVal){var value=elm.value;var modifiers=elm._vModifiers;if(isDef(modifiers)){if(modifiers.number){return toNumber(value)!==toNumber(newVal)}
if(modifiers.trim){return value.trim()!==newVal.trim()}}
return value!==newVal}
var domProps={create:updateDOMProps,update:updateDOMProps};var parseStyleText=cached(function(cssText){var res={};var listDelimiter=/;(?![^(]*\))/g;var propertyDelimiter=/:(.+)/;cssText.split(listDelimiter).forEach(function(item){if(item){var tmp=item.split(propertyDelimiter);tmp.length>1&&(res[tmp[0].trim()]=tmp[1].trim());}});return res});function normalizeStyleData(data){var style=normalizeStyleBinding(data.style);return data.staticStyle?extend(data.staticStyle,style):style}
function normalizeStyleBinding(bindingStyle){if(Array.isArray(bindingStyle)){return toObject(bindingStyle)}
if(typeof bindingStyle==='string'){return parseStyleText(bindingStyle)}
return bindingStyle}
function getStyle(vnode,checkChild){var res={};var styleData;if(checkChild){var childNode=vnode;while(childNode.componentInstance){childNode=childNode.componentInstance._vnode;if(childNode&&childNode.data&&(styleData=normalizeStyleData(childNode.data))){extend(res,styleData);}}}
if((styleData=normalizeStyleData(vnode.data))){extend(res,styleData);}
var parentNode=vnode;while((parentNode=parentNode.parent)){if(parentNode.data&&(styleData=normalizeStyleData(parentNode.data))){extend(res,styleData);}}
return res}
var cssVarRE=/^--/;var importantRE=/\s*!important$/;var setProp=function(el,name,val){if(cssVarRE.test(name)){el.style.setProperty(name,val);}else if(importantRE.test(val)){el.style.setProperty(hyphenate(name),val.replace(importantRE,''),'important');}else{var normalizedName=normalize(name);if(Array.isArray(val)){for(var i=0,len=val.length;i<len;i++){el.style[normalizedName]=val[i];}}else{el.style[normalizedName]=val;}}};var vendorNames=['Webkit','Moz','ms'];var emptyStyle;var normalize=cached(function(prop){emptyStyle=emptyStyle||document.createElement('div').style;prop=camelize(prop);if(prop!=='filter'&&(prop in emptyStyle)){return prop}
var capName=prop.charAt(0).toUpperCase()+prop.slice(1);for(var i=0;i<vendorNames.length;i++){var name=vendorNames[i]+capName;if(name in emptyStyle){return name}}});function updateStyle(oldVnode,vnode){var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticStyle)&&isUndef(data.style)&&isUndef(oldData.staticStyle)&&isUndef(oldData.style)){return}
var cur,name;var el=vnode.elm;var oldStaticStyle=oldData.staticStyle;var oldStyleBinding=oldData.normalizedStyle||oldData.style||{};var oldStyle=oldStaticStyle||oldStyleBinding;var style=normalizeStyleBinding(vnode.data.style)||{};vnode.data.normalizedStyle=isDef(style.__ob__)?extend({},style):style;var newStyle=getStyle(vnode,true);for(name in oldStyle){if(isUndef(newStyle[name])){setProp(el,name,'');}}
for(name in newStyle){cur=newStyle[name];if(cur!==oldStyle[name]){setProp(el,name,cur==null?'':cur);}}}
var style={create:updateStyle,update:updateStyle};var whitespaceRE=/\s+/;function addClass(el,cls){if(!cls||!(cls=cls.trim())){return}
if(el.classList){if(cls.indexOf(' ')>-1){cls.split(whitespaceRE).forEach(function(c){return el.classList.add(c);});}else{el.classList.add(cls);}}else{var cur=" "+(el.getAttribute('class')||'')+" ";if(cur.indexOf(' '+cls+' ')<0){el.setAttribute('class',(cur+cls).trim());}}}
function removeClass(el,cls){if(!cls||!(cls=cls.trim())){return}
if(el.classList){if(cls.indexOf(' ')>-1){cls.split(whitespaceRE).forEach(function(c){return el.classList.remove(c);});}else{el.classList.remove(cls);}
if(!el.classList.length){el.removeAttribute('class');}}else{var cur=" "+(el.getAttribute('class')||'')+" ";var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}
cur=cur.trim();if(cur){el.setAttribute('class',cur);}else{el.removeAttribute('class');}}}
function resolveTransition(def$$1){if(!def$$1){return}
if(typeof def$$1==='object'){var res={};if(def$$1.css!==false){extend(res,autoCssTransition(def$$1.name||'v'));}
extend(res,def$$1);return res}else if(typeof def$$1==='string'){return autoCssTransition(def$$1)}}
var autoCssTransition=cached(function(name){return{enterClass:(name+"-enter"),enterToClass:(name+"-enter-to"),enterActiveClass:(name+"-enter-active"),leaveClass:(name+"-leave"),leaveToClass:(name+"-leave-to"),leaveActiveClass:(name+"-leave-active")}});var hasTransition=inBrowser&&!isIE9;var TRANSITION='transition';var ANIMATION='animation';var transitionProp='transition';var transitionEndEvent='transitionend';var animationProp='animation';var animationEndEvent='animationend';if(hasTransition){if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){transitionProp='WebkitTransition';transitionEndEvent='webkitTransitionEnd';}
if(window.onanimationend===undefined&&window.onwebkitanimationend!==undefined){animationProp='WebkitAnimation';animationEndEvent='webkitAnimationEnd';}}
var raf=inBrowser?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(fn){return fn();};function nextFrame(fn){raf(function(){raf(fn);});}
function addTransitionClass(el,cls){var transitionClasses=el._transitionClasses||(el._transitionClasses=[]);if(transitionClasses.indexOf(cls)<0){transitionClasses.push(cls);addClass(el,cls);}}
function removeTransitionClass(el,cls){if(el._transitionClasses){remove(el._transitionClasses,cls);}
removeClass(el,cls);}
function whenTransitionEnds(el,expectedType,cb){var ref=getTransitionInfo(el,expectedType);var type=ref.type;var timeout=ref.timeout;var propCount=ref.propCount;if(!type){return cb()}
var event=type===TRANSITION?transitionEndEvent:animationEndEvent;var ended=0;var end=function(){el.removeEventListener(event,onEnd);cb();};var onEnd=function(e){if(e.target===el){if(++ended>=propCount){end();}}};setTimeout(function(){if(ended<propCount){end();}},timeout+1);el.addEventListener(event,onEnd);}
var transformRE=/\b(transform|all)(,|$)/;function getTransitionInfo(el,expectedType){var styles=window.getComputedStyle(el);var transitionDelays=(styles[transitionProp+'Delay']||'').split(', ');var transitionDurations=(styles[transitionProp+'Duration']||'').split(', ');var transitionTimeout=getTimeout(transitionDelays,transitionDurations);var animationDelays=(styles[animationProp+'Delay']||'').split(', ');var animationDurations=(styles[animationProp+'Duration']||'').split(', ');var animationTimeout=getTimeout(animationDelays,animationDurations);var type;var timeout=0;var propCount=0;if(expectedType===TRANSITION){if(transitionTimeout>0){type=TRANSITION;timeout=transitionTimeout;propCount=transitionDurations.length;}}else if(expectedType===ANIMATION){if(animationTimeout>0){type=ANIMATION;timeout=animationTimeout;propCount=animationDurations.length;}}else{timeout=Math.max(transitionTimeout,animationTimeout);type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null;propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0;}
var hasTransform=type===TRANSITION&&transformRE.test(styles[transitionProp+'Property']);return{type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform}}
function getTimeout(delays,durations){while(delays.length<durations.length){delays=delays.concat(delays);}
return Math.max.apply(null,durations.map(function(d,i){return toMs(d)+toMs(delays[i])}))}
function toMs(s){return Number(s.slice(0,-1).replace(',','.'))*1000}
function enter(vnode,toggleDisplay){var el=vnode.elm;if(isDef(el._leaveCb)){el._leaveCb.cancelled=true;el._leaveCb();}
var data=resolveTransition(vnode.data.transition);if(isUndef(data)){return}
if(isDef(el._enterCb)||el.nodeType!==1){return}
var css=data.css;var type=data.type;var enterClass=data.enterClass;var enterToClass=data.enterToClass;var enterActiveClass=data.enterActiveClass;var appearClass=data.appearClass;var appearToClass=data.appearToClass;var appearActiveClass=data.appearActiveClass;var beforeEnter=data.beforeEnter;var enter=data.enter;var afterEnter=data.afterEnter;var enterCancelled=data.enterCancelled;var beforeAppear=data.beforeAppear;var appear=data.appear;var afterAppear=data.afterAppear;var appearCancelled=data.appearCancelled;var duration=data.duration;var context=activeInstance;var transitionNode=activeInstance.$vnode;while(transitionNode&&transitionNode.parent){context=transitionNode.context;transitionNode=transitionNode.parent;}
var isAppear=!context._isMounted||!vnode.isRootInsert;if(isAppear&&!appear&&appear!==''){return}
var startClass=isAppear&&appearClass?appearClass:enterClass;var activeClass=isAppear&&appearActiveClass?appearActiveClass:enterActiveClass;var toClass=isAppear&&appearToClass?appearToClass:enterToClass;var beforeEnterHook=isAppear?(beforeAppear||beforeEnter):beforeEnter;var enterHook=isAppear?(typeof appear==='function'?appear:enter):enter;var afterEnterHook=isAppear?(afterAppear||afterEnter):afterEnter;var enterCancelledHook=isAppear?(appearCancelled||enterCancelled):enterCancelled;var explicitEnterDuration=toNumber(isObject(duration)?duration.enter:duration);if(false){}
var expectsCSS=css!==false&&!isIE9;var userWantsControl=getHookArgumentsLength(enterHook);var cb=el._enterCb=once(function(){if(expectsCSS){removeTransitionClass(el,toClass);removeTransitionClass(el,activeClass);}
if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,startClass);}
enterCancelledHook&&enterCancelledHook(el);}else{afterEnterHook&&afterEnterHook(el);}
el._enterCb=null;});if(!vnode.data.show){mergeVNodeHook(vnode,'insert',function(){var parent=el.parentNode;var pendingNode=parent&&parent._pending&&parent._pending[vnode.key];if(pendingNode&&pendingNode.tag===vnode.tag&&pendingNode.elm._leaveCb){pendingNode.elm._leaveCb();}
enterHook&&enterHook(el,cb);});}
beforeEnterHook&&beforeEnterHook(el);if(expectsCSS){addTransitionClass(el,startClass);addTransitionClass(el,activeClass);nextFrame(function(){removeTransitionClass(el,startClass);if(!cb.cancelled){addTransitionClass(el,toClass);if(!userWantsControl){if(isValidDuration(explicitEnterDuration)){setTimeout(cb,explicitEnterDuration);}else{whenTransitionEnds(el,type,cb);}}}});}
if(vnode.data.show){toggleDisplay&&toggleDisplay();enterHook&&enterHook(el,cb);}
if(!expectsCSS&&!userWantsControl){cb();}}
function leave(vnode,rm){var el=vnode.elm;if(isDef(el._enterCb)){el._enterCb.cancelled=true;el._enterCb();}
var data=resolveTransition(vnode.data.transition);if(isUndef(data)||el.nodeType!==1){return rm()}
if(isDef(el._leaveCb)){return}
var css=data.css;var type=data.type;var leaveClass=data.leaveClass;var leaveToClass=data.leaveToClass;var leaveActiveClass=data.leaveActiveClass;var beforeLeave=data.beforeLeave;var leave=data.leave;var afterLeave=data.afterLeave;var leaveCancelled=data.leaveCancelled;var delayLeave=data.delayLeave;var duration=data.duration;var expectsCSS=css!==false&&!isIE9;var userWantsControl=getHookArgumentsLength(leave);var explicitLeaveDuration=toNumber(isObject(duration)?duration.leave:duration);if(false){}
var cb=el._leaveCb=once(function(){if(el.parentNode&&el.parentNode._pending){el.parentNode._pending[vnode.key]=null;}
if(expectsCSS){removeTransitionClass(el,leaveToClass);removeTransitionClass(el,leaveActiveClass);}
if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,leaveClass);}
leaveCancelled&&leaveCancelled(el);}else{rm();afterLeave&&afterLeave(el);}
el._leaveCb=null;});if(delayLeave){delayLeave(performLeave);}else{performLeave();}
function performLeave(){if(cb.cancelled){return}
if(!vnode.data.show&&el.parentNode){(el.parentNode._pending||(el.parentNode._pending={}))[(vnode.key)]=vnode;}
beforeLeave&&beforeLeave(el);if(expectsCSS){addTransitionClass(el,leaveClass);addTransitionClass(el,leaveActiveClass);nextFrame(function(){removeTransitionClass(el,leaveClass);if(!cb.cancelled){addTransitionClass(el,leaveToClass);if(!userWantsControl){if(isValidDuration(explicitLeaveDuration)){setTimeout(cb,explicitLeaveDuration);}else{whenTransitionEnds(el,type,cb);}}}});}
leave&&leave(el,cb);if(!expectsCSS&&!userWantsControl){cb();}}}
function checkDuration(val,name,vnode){if(typeof val!=='number'){warn("<transition> explicit "+name+" duration is not a valid number - "+"got "+(JSON.stringify(val))+".",vnode.context);}else if(isNaN(val)){warn("<transition> explicit "+name+" duration is NaN - "+'the duration expression might be incorrect.',vnode.context);}}
function isValidDuration(val){return typeof val==='number'&&!isNaN(val)}
function getHookArgumentsLength(fn){if(isUndef(fn)){return false}
var invokerFns=fn.fns;if(isDef(invokerFns)){return getHookArgumentsLength(Array.isArray(invokerFns)?invokerFns[0]:invokerFns)}else{return(fn._length||fn.length)>1}}
function _enter(_,vnode){if(vnode.data.show!==true){enter(vnode);}}
var transition=inBrowser?{create:_enter,activate:_enter,remove:function remove$$1(vnode,rm){if(vnode.data.show!==true){leave(vnode,rm);}else{rm();}}}:{};var platformModules=[attrs,klass,events,domProps,style,transition];var modules=platformModules.concat(baseModules);var patch=createPatchFunction({nodeOps:nodeOps,modules:modules});if(isIE9){document.addEventListener('selectionchange',function(){var el=document.activeElement;if(el&&el.vmodel){trigger(el,'input');}});}
var directive={inserted:function inserted(el,binding,vnode,oldVnode){if(vnode.tag==='select'){if(oldVnode.elm&&!oldVnode.elm._vOptions){mergeVNodeHook(vnode,'postpatch',function(){directive.componentUpdated(el,binding,vnode);});}else{setSelected(el,binding,vnode.context);}
el._vOptions=[].map.call(el.options,getValue);}else if(vnode.tag==='textarea'||isTextInputType(el.type)){el._vModifiers=binding.modifiers;if(!binding.modifiers.lazy){el.addEventListener('compositionstart',onCompositionStart);el.addEventListener('compositionend',onCompositionEnd);el.addEventListener('change',onCompositionEnd);if(isIE9){el.vmodel=true;}}}},componentUpdated:function componentUpdated(el,binding,vnode){if(vnode.tag==='select'){setSelected(el,binding,vnode.context);var prevOptions=el._vOptions;var curOptions=el._vOptions=[].map.call(el.options,getValue);if(curOptions.some(function(o,i){return!looseEqual(o,prevOptions[i]);})){var needReset=el.multiple?binding.value.some(function(v){return hasNoMatchingOption(v,curOptions);}):binding.value!==binding.oldValue&&hasNoMatchingOption(binding.value,curOptions);if(needReset){trigger(el,'change');}}}}};function setSelected(el,binding,vm){actuallySetSelected(el,binding,vm);if(isIE||isEdge){setTimeout(function(){actuallySetSelected(el,binding,vm);},0);}}
function actuallySetSelected(el,binding,vm){var value=binding.value;var isMultiple=el.multiple;if(isMultiple&&!Array.isArray(value)){false&&false;return}
var selected,option;for(var i=0,l=el.options.length;i<l;i++){option=el.options[i];if(isMultiple){selected=looseIndexOf(value,getValue(option))>-1;if(option.selected!==selected){option.selected=selected;}}else{if(looseEqual(getValue(option),value)){if(el.selectedIndex!==i){el.selectedIndex=i;}
return}}}
if(!isMultiple){el.selectedIndex=-1;}}
function hasNoMatchingOption(value,options){return options.every(function(o){return!looseEqual(o,value);})}
function getValue(option){return'_value'in option?option._value:option.value}
function onCompositionStart(e){e.target.composing=true;}
function onCompositionEnd(e){if(!e.target.composing){return}
e.target.composing=false;trigger(e.target,'input');}
function trigger(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}
function locateNode(vnode){return vnode.componentInstance&&(!vnode.data||!vnode.data.transition)?locateNode(vnode.componentInstance._vnode):vnode}
var show={bind:function bind(el,ref,vnode){var value=ref.value;vnode=locateNode(vnode);var transition$$1=vnode.data&&vnode.data.transition;var originalDisplay=el.__vOriginalDisplay=el.style.display==='none'?'':el.style.display;if(value&&transition$$1){vnode.data.show=true;enter(vnode,function(){el.style.display=originalDisplay;});}else{el.style.display=value?originalDisplay:'none';}},update:function update(el,ref,vnode){var value=ref.value;var oldValue=ref.oldValue;if(!value===!oldValue){return}
vnode=locateNode(vnode);var transition$$1=vnode.data&&vnode.data.transition;if(transition$$1){vnode.data.show=true;if(value){enter(vnode,function(){el.style.display=el.__vOriginalDisplay;});}else{leave(vnode,function(){el.style.display='none';});}}else{el.style.display=value?el.__vOriginalDisplay:'none';}},unbind:function unbind(el,binding,vnode,oldVnode,isDestroy){if(!isDestroy){el.style.display=el.__vOriginalDisplay;}}};var platformDirectives={model:directive,show:show};var transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function getRealChild(vnode){var compOptions=vnode&&vnode.componentOptions;if(compOptions&&compOptions.Ctor.options.abstract){return getRealChild(getFirstComponentChild(compOptions.children))}else{return vnode}}
function extractTransitionData(comp){var data={};var options=comp.$options;for(var key in options.propsData){data[key]=comp[key];}
var listeners=options._parentListeners;for(var key$1 in listeners){data[camelize(key$1)]=listeners[key$1];}
return data}
function placeholder(h,rawChild){if(/\d-keep-alive$/.test(rawChild.tag)){return h('keep-alive',{props:rawChild.componentOptions.propsData})}}
function hasParentTransition(vnode){while((vnode=vnode.parent)){if(vnode.data.transition){return true}}}
function isSameChild(child,oldChild){return oldChild.key===child.key&&oldChild.tag===child.tag}
var isNotTextNode=function(c){return c.tag||isAsyncPlaceholder(c);};var isVShowDirective=function(d){return d.name==='show';};var Transition={name:'transition',props:transitionProps,abstract:true,render:function render(h){var this$1=this;var children=this.$slots.default;if(!children){return}
children=children.filter(isNotTextNode);if(!children.length){return}
if(false){}
var mode=this.mode;if(false){}
var rawChild=children[0];if(hasParentTransition(this.$vnode)){return rawChild}
var child=getRealChild(rawChild);if(!child){return rawChild}
if(this._leaving){return placeholder(h,rawChild)}
var id="__transition-"+(this._uid)+"-";child.key=child.key==null?child.isComment?id+'comment':id+child.tag:isPrimitive(child.key)?(String(child.key).indexOf(id)===0?child.key:id+child.key):child.key;var data=(child.data||(child.data={})).transition=extractTransitionData(this);var oldRawChild=this._vnode;var oldChild=getRealChild(oldRawChild);if(child.data.directives&&child.data.directives.some(isVShowDirective)){child.data.show=true;}
if(oldChild&&oldChild.data&&!isSameChild(child,oldChild)&&!isAsyncPlaceholder(oldChild)&&!(oldChild.componentInstance&&oldChild.componentInstance._vnode.isComment)){var oldData=oldChild.data.transition=extend({},data);if(mode==='out-in'){this._leaving=true;mergeVNodeHook(oldData,'afterLeave',function(){this$1._leaving=false;this$1.$forceUpdate();});return placeholder(h,rawChild)}else if(mode==='in-out'){if(isAsyncPlaceholder(child)){return oldRawChild}
var delayedLeave;var performLeave=function(){delayedLeave();};mergeVNodeHook(data,'afterEnter',performLeave);mergeVNodeHook(data,'enterCancelled',performLeave);mergeVNodeHook(oldData,'delayLeave',function(leave){delayedLeave=leave;});}}
return rawChild}};var props=extend({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props:props,beforeMount:function beforeMount(){var this$1=this;var update=this._update;this._update=function(vnode,hydrating){var restoreActiveInstance=setActiveInstance(this$1);this$1.__patch__(this$1._vnode,this$1.kept,false,true);this$1._vnode=this$1.kept;restoreActiveInstance();update.call(this$1,vnode,hydrating);};},render:function render(h){var tag=this.tag||this.$vnode.data.tag||'span';var map=Object.create(null);var prevChildren=this.prevChildren=this.children;var rawChildren=this.$slots.default||[];var children=this.children=[];var transitionData=extractTransitionData(this);for(var i=0;i<rawChildren.length;i++){var c=rawChildren[i];if(c.tag){if(c.key!=null&&String(c.key).indexOf('__vlist')!==0){children.push(c);map[c.key]=c;(c.data||(c.data={})).transition=transitionData;}else if(false){var name,opts;}}}
if(prevChildren){var kept=[];var removed=[];for(var i$1=0;i$1<prevChildren.length;i$1++){var c$1=prevChildren[i$1];c$1.data.transition=transitionData;c$1.data.pos=c$1.elm.getBoundingClientRect();if(map[c$1.key]){kept.push(c$1);}else{removed.push(c$1);}}
this.kept=h(tag,null,kept);this.removed=removed;}
return h(tag,null,children)},updated:function updated(){var children=this.prevChildren;var moveClass=this.moveClass||((this.name||'v')+'-move');if(!children.length||!this.hasMove(children[0].elm,moveClass)){return}
children.forEach(callPendingCbs);children.forEach(recordPosition);children.forEach(applyTranslation);this._reflow=document.body.offsetHeight;children.forEach(function(c){if(c.data.moved){var el=c.elm;var s=el.style;addTransitionClass(el,moveClass);s.transform=s.WebkitTransform=s.transitionDuration='';el.addEventListener(transitionEndEvent,el._moveCb=function cb(e){if(e&&e.target!==el){return}
if(!e||/transform$/.test(e.propertyName)){el.removeEventListener(transitionEndEvent,cb);el._moveCb=null;removeTransitionClass(el,moveClass);}});}});},methods:{hasMove:function hasMove(el,moveClass){if(!hasTransition){return false}
if(this._hasMove){return this._hasMove}
var clone=el.cloneNode();if(el._transitionClasses){el._transitionClasses.forEach(function(cls){removeClass(clone,cls);});}
addClass(clone,moveClass);clone.style.display='none';this.$el.appendChild(clone);var info=getTransitionInfo(clone);this.$el.removeChild(clone);return(this._hasMove=info.hasTransform)}}};function callPendingCbs(c){if(c.elm._moveCb){c.elm._moveCb();}
if(c.elm._enterCb){c.elm._enterCb();}}
function recordPosition(c){c.data.newPos=c.elm.getBoundingClientRect();}
function applyTranslation(c){var oldPos=c.data.pos;var newPos=c.data.newPos;var dx=oldPos.left-newPos.left;var dy=oldPos.top-newPos.top;if(dx||dy){c.data.moved=true;var s=c.elm.style;s.transform=s.WebkitTransform="translate("+dx+"px,"+dy+"px)";s.transitionDuration='0s';}}
var platformComponents={Transition:Transition,TransitionGroup:TransitionGroup};Vue.config.mustUseProp=mustUseProp;Vue.config.isReservedTag=isReservedTag;Vue.config.isReservedAttr=isReservedAttr;Vue.config.getTagNamespace=getTagNamespace;Vue.config.isUnknownElement=isUnknownElement;extend(Vue.options.directives,platformDirectives);extend(Vue.options.components,platformComponents);Vue.prototype.__patch__=inBrowser?patch:noop;Vue.prototype.$mount=function(el,hydrating){el=el&&inBrowser?query(el):undefined;return mountComponent(this,el,hydrating)};if(inBrowser){setTimeout(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue);}else if(false){}}
if(false){}},0);}
__webpack_exports__["a"]=(Vue);}.call(this,__webpack_require__("c8ba")))}),"35d6":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"default",function(){return addStylesToShadowDOM;});function listToStyles(parentId,list){var styles=[]
var newStyles={}
for(var i=0;i<list.length;i++){var item=list[i]
var id=item[0]
var css=item[1]
var media=item[2]
var sourceMap=item[3]
var part={id:parentId+':'+i,css:css,media:media,sourceMap:sourceMap}
if(!newStyles[id]){styles.push(newStyles[id]={id:id,parts:[part]})}else{newStyles[id].parts.push(part)}}
return styles}
function addStylesToShadowDOM(parentId,list,shadowRoot){var styles=listToStyles(parentId,list)
addStyles(styles,shadowRoot)}
function addStyles(styles,shadowRoot){const injectedStyles=shadowRoot._injectedStyles||(shadowRoot._injectedStyles={})
for(var i=0;i<styles.length;i++){var item=styles[i]
var style=injectedStyles[item.id]
if(!style){for(var j=0;j<item.parts.length;j++){addStyle(item.parts[j],shadowRoot)}
injectedStyles[item.id]=true}}}
function createStyleElement(shadowRoot){var styleElement=document.createElement('style')
styleElement.type='text/css'
shadowRoot.appendChild(styleElement)
return styleElement}
function addStyle(obj,shadowRoot){var styleElement=createStyleElement(shadowRoot)
var css=obj.css
var media=obj.media
var sourceMap=obj.sourceMap
if(media){styleElement.setAttribute('media',media)}
if(sourceMap){css+='\n/*# sourceURL='+sourceMap.sources[0]+' */'
css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */'}
if(styleElement.styleSheet){styleElement.styleSheet.cssText=css}else{while(styleElement.firstChild){styleElement.removeChild(styleElement.firstChild)}
styleElement.appendChild(document.createTextNode(css))}}}),"5a74":(function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);if(typeof window!=='undefined'){var currentScript=window.document.currentScript
if(Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL){var getCurrentScript=__webpack_require__("8875")
currentScript=getCurrentScript()
if(!('currentScript'in document)){Object.defineProperty(document,'currentScript',{get:getCurrentScript})}}
var src=currentScript&&currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
if(src){__webpack_require__.p=src[1]}}
var setPublicPath=(null);var vue_runtime_esm=__webpack_require__("2b0e");const camelizeRE=/-(\w)/g;const camelize=str=>{return str.replace(camelizeRE,(_,c)=>c?c.toUpperCase():'')};const hyphenateRE=/\B([A-Z])/g;const hyphenate=str=>{return str.replace(hyphenateRE,'-$1').toLowerCase()};function getInitialProps(propsList){const res={};propsList.forEach(key=>{res[key]=undefined;});return res}
function injectHook(options,key,hook){options[key]=[].concat(options[key]||[]);options[key].unshift(hook);}
function callHooks(vm,hook){if(vm){const hooks=vm.$options[hook]||[];hooks.forEach(hook=>{hook.call(vm);});}}
function createCustomEvent(name,args){return new CustomEvent(name,{bubbles:false,cancelable:false,detail:args})}
const isBoolean=val=>/function Boolean/.test(String(val));const isNumber=val=>/function Number/.test(String(val));function convertAttributeValue(value,name,{type}={}){if(isBoolean(type)){if(value==='true'||value==='false'){return value==='true'}
if(value===''||value===name){return true}
return value!=null}else if(isNumber(type)){const parsed=parseFloat(value,10);return isNaN(parsed)?value:parsed}else{return value}}
function toVNodes(h,children){const res=[];for(let i=0,l=children.length;i<l;i++){res.push(toVNode(h,children[i]));}
return res}
function toVNode(h,node){if(node.nodeType===3){return node.data.trim()?node.data:null}else if(node.nodeType===1){const data={attrs:getAttributes(node),domProps:{innerHTML:node.innerHTML}};if(data.attrs.slot){data.slot=data.attrs.slot;delete data.attrs.slot;}
return h(node.tagName,data)}else{return null}}
function getAttributes(node){const res={};for(let i=0,l=node.attributes.length;i<l;i++){const attr=node.attributes[i];res[attr.nodeName]=attr.nodeValue;}
return res}
function wrap(Vue,Component){const isAsync=typeof Component==='function'&&!Component.cid;let isInitialized=false;let hyphenatedPropsList;let camelizedPropsList;let camelizedPropsMap;function initialize(Component){if(isInitialized)return
const options=typeof Component==='function'?Component.options:Component;const propsList=Array.isArray(options.props)?options.props:Object.keys(options.props||{});hyphenatedPropsList=propsList.map(hyphenate);camelizedPropsList=propsList.map(camelize);const originalPropsAsObject=Array.isArray(options.props)?{}:options.props||{};camelizedPropsMap=camelizedPropsList.reduce((map,key,i)=>{map[key]=originalPropsAsObject[propsList[i]];return map},{});injectHook(options,'beforeCreate',function(){const emit=this.$emit;this.$emit=(name,...args)=>{this.$root.$options.customElement.dispatchEvent(createCustomEvent(name,args));return emit.call(this,name,...args)};});injectHook(options,'created',function(){camelizedPropsList.forEach(key=>{this.$root.props[key]=this[key];});});camelizedPropsList.forEach(key=>{Object.defineProperty(CustomElement.prototype,key,{get(){return this._wrapper.props[key]},set(newVal){this._wrapper.props[key]=newVal;},enumerable:false,configurable:true});});isInitialized=true;}
function syncAttribute(el,key){const camelized=camelize(key);const value=el.hasAttribute(key)?el.getAttribute(key):undefined;el._wrapper.props[camelized]=convertAttributeValue(value,key,camelizedPropsMap[camelized]);}
class CustomElement extends HTMLElement{constructor(){super();this.attachShadow({mode:'open'});const wrapper=this._wrapper=new Vue({name:'shadow-root',customElement:this,shadowRoot:this.shadowRoot,data(){return{props:{},slotChildren:[]}},render(h){return h(Component,{ref:'inner',props:this.props},this.slotChildren)}});const observer=new MutationObserver(mutations=>{let hasChildrenChange=false;for(let i=0;i<mutations.length;i++){const m=mutations[i];if(isInitialized&&m.type==='attributes'&&m.target===this){syncAttribute(this,m.attributeName);}else{hasChildrenChange=true;}}
if(hasChildrenChange){wrapper.slotChildren=Object.freeze(toVNodes(wrapper.$createElement,this.childNodes));}});observer.observe(this,{childList:true,subtree:true,characterData:true,attributes:true});}
get vueComponent(){return this._wrapper.$refs.inner}
connectedCallback(){const wrapper=this._wrapper;if(!wrapper._isMounted){const syncInitialAttributes=()=>{wrapper.props=getInitialProps(camelizedPropsList);hyphenatedPropsList.forEach(key=>{syncAttribute(this,key);});};if(isInitialized){syncInitialAttributes();}else{Component().then(resolved=>{if(resolved.__esModule||resolved[Symbol.toStringTag]==='Module'){resolved=resolved.default;}
initialize(resolved);syncInitialAttributes();});}
wrapper.slotChildren=Object.freeze(toVNodes(wrapper.$createElement,this.childNodes));wrapper.$mount();this.shadowRoot.appendChild(wrapper.$el);}else{callHooks(this.vueComponent,'activated');}}
disconnectedCallback(){callHooks(this.vueComponent,'deactivated');}}
if(!isAsync){initialize(Component);}
return CustomElement}
var vue_wc_wrapper=(wrap);var api=__webpack_require__("24fb");var addStylesShadow=__webpack_require__("35d6");function normalizeComponent(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var options=typeof scriptExports==='function'?scriptExports.options:scriptExports
if(render){options.render=render
options.staticRenderFns=staticRenderFns
options._compiled=true}
if(functionalTemplate){options.functional=true}
if(scopeId){options._scopeId='data-v-'+scopeId}
var hook
if(moduleIdentifier){hook=function(context){context=context||(this.$vnode&&this.$vnode.ssrContext)||(this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)
if(!context&&typeof __VUE_SSR_CONTEXT__!=='undefined'){context=__VUE_SSR_CONTEXT__}
if(injectStyles){injectStyles.call(this,context)}
if(context&&context._registeredComponents){context._registeredComponents.add(moduleIdentifier)}}
options._ssrRegister=hook}else if(injectStyles){hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles}
if(hook){if(options.functional){options._injectStyles=hook
var originalRender=options.render
options.render=function renderWithStyleInjection(h,context){hook.call(context)
return originalRender(h,context)}}else{var existing=options.beforeCreate
options.beforeCreate=existing?[].concat(existing,hook):[hook]}}
return{exports:scriptExports,options:options}}
var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"twig-profile",class:'twig-profile--'+_vm.qm_dark_mode},[_c('h3',[_vm._v(_vm._s(_vm.i18n.viewing_profile)+" "+_vm._s(_vm.profileName))]),_c('Profile',{attrs:{"profile":_vm.currentProfile,"parentProfile":_vm.currentProfile,"rootProfile":_vm.currentProfile}}),_c('h3',[_vm._v(_vm._s(_vm.i18n.controls))]),_c('div',{staticClass:"twig-profile__form-part"},[_c('label',{attrs:{"for":"qm-twig-profile-name"}},[_vm._v(_vm._s(_vm.i18n.profile_name))]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.profileName),expression:"profileName"}],staticClass:"profileName",attrs:{"id":"qm-twig-profile-name","type":"text"},domProps:{"value":(_vm.profileName)},on:{"input":function($event){if($event.target.composing){return;}_vm.profileName=$event.target.value}}}),(_vm.baseProfile.saved)?_c('button',{attrs:{"disabled":""}},[_vm._v(_vm._s(_vm.i18n.saved))]):_c('button',{on:{"click":_vm.saveProfile}},[_vm._v(_vm._s(_vm.i18n.save_current))])]),_c('div',{staticClass:"twig-profile__form-part"},[_c('label',{attrs:{"for":"qm-twig-profile-selector"}},[_vm._v(_vm._s(_vm.i18n.select_profile))]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedProfile),expression:"selectedProfile"}],attrs:{"id":"qm-twig-profile-selector"},on:{"change":function($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val="_value"in o?o._value:o.value;return val});_vm.selectedProfile=$event.target.multiple?$$selectedVal:$$selectedVal[0]}}},[_c('option',{attrs:{"value":"-1"}},[_vm._v(_vm._s(_vm.i18n.current_request))]),_vm._l((_vm.savedProfiles),function(savedProfile,index){return _c('option',{key:index,domProps:{"value":index}},[_vm._v(" "+_vm._s(savedProfile.profileName)+" ")])})],2),_c('button',{on:{"click":_vm.viewProfile}},[_vm._v(_vm._s(_vm.i18n.view))]),_c('button',{attrs:{"disabled":_vm.selectedProfile==='-1'},on:{"click":_vm.removeProfile}},[_vm._v(_vm._s(_vm.i18n.remove))])]),_c('div',{staticClass:"twig-profile__form-part"},[_c('button',{on:{"click":_vm.clearProfiles}},[_vm._v(_vm._s(_vm.i18n.clear_all))])])],1)}
var staticRenderFns=[]
var Profilevue_type_template_id_84e8fb04_render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return(_vm.profile)?_c('div',{staticClass:"profile",class:'profile--'+_vm.profile.type},[_c('span',{staticClass:"profile__name",domProps:{"innerHTML":_vm._s(_vm.profile.file)}}),(_vm.profile.type=='block')?_c('abbr',{attrs:{"title":"block"}},[_vm._v("::"+_vm._s(_vm.profile.name))]):_vm._e(),_c('span',{staticClass:"profile__duration"},[_vm._v("- "+_vm._s((_vm.profile.duration*1000).toFixed(1))+"ms -")]),_c('span',{staticClass:"profile__duration",class:{'profile__duration--high':_vm.getDurationPercentageParent()>33,'profile__duration--medium':_vm.getDurationPercentageParent()>20,'profile__duration--low':_vm.getDurationPercentageParent()<10}},[_vm._v(_vm._s(_vm.getDurationPercentageParent())+"% of parent")]),_c('span',{staticClass:"profile__duration",class:{'profile__duration--high':_vm.getDurationPercentageRoot()>33,'profile__duration--medium':_vm.getDurationPercentageRoot()>20,'profile__duration--low':_vm.getDurationPercentageRoot()<10}},[_vm._v("("+_vm._s(_vm.getDurationPercentageRoot())+"% of total)")]),_vm._l((_vm.profile.profiles),function(childProfile,index){return _c('div',{key:index,staticClass:"profile__children"},[_c('Profile',{attrs:{"profile":childProfile,"parentProfile":_vm.profile,"rootProfile":_vm.rootProfile}})],1)})],2):_vm._e()}
var Profilevue_type_template_id_84e8fb04_staticRenderFns=[]
var Profilevue_type_script_lang_js_=({name:'Profile',props:['profile','parentProfile','rootProfile'],methods:{getDurationPercentageParent(){return(this.profile.duration/this.parentProfile.duration*100).toFixed(1);},getDurationPercentageRoot(){return(this.profile.duration/this.rootProfile.duration*100).toFixed(1);}}});var components_Profilevue_type_script_lang_js_=(Profilevue_type_script_lang_js_);function injectStyles(context){var style0=__webpack_require__("1be2")
if(style0.__inject__)style0.__inject__(context)}
var component=normalizeComponent(components_Profilevue_type_script_lang_js_,Profilevue_type_template_id_84e8fb04_render,Profilevue_type_template_id_84e8fb04_staticRenderFns,false,injectStyles,null,null,true)
var Profile=(component.exports);var Appvue_type_script_lang_js_shadow=({name:'App',props:['profile','qm_dark_mode'],data:()=>{return{i18n:window.qm_twig_profile_l10n.strings,currentProfile:null,savedProfiles:[],profileName:window.qm_twig_profile_l10n.strings.current_request,selectedProfile:'-1'};},methods:{saveProfile(){this.baseProfile.saved=true;this.currentProfile=this.baseProfile;this.currentProfile.profileName=this.profileName;this.savedProfiles.unshift(this.currentProfile);window.localStorage.setItem('qm-twig-profiles',JSON.stringify(this.savedProfiles));},removeProfile(){if(this.selectedProfile==='-1'){return;}
this.savedProfiles.splice(this.selectedProfile,1);window.localStorage.setItem('qm-twig-profiles',JSON.stringify(this.savedProfiles));this.resetProfile();},clearProfiles(){this.savedProfiles=[];window.localStorage.removeItem('qm-twig-profiles');this.resetProfile();},viewProfile(){if(this.selectedProfile==='-1'){this.resetProfile();return;}
this.currentProfile=this.savedProfiles[this.selectedProfile];this.profileName=this.currentProfile.profileName;},resetProfile(){this.currentProfile=this.baseProfile;this.profileName=window.qm_twig_profile_l10n.strings.current_request;this.selectedProfile='-1';}},components:{Profile:Profile},created(){this.baseProfile=JSON.parse(this.profile);this.currentProfile=this.baseProfile;this.savedProfiles=JSON.parse(window.localStorage.getItem('qm-twig-profiles'));if(!this.savedProfiles){this.savedProfiles=[];}}});var src_Appvue_type_script_lang_js_shadow=(Appvue_type_script_lang_js_shadow);function Appshadow_injectStyles(context){var style0=__webpack_require__("2083")
if(style0.__inject__)style0.__inject__(context)}
var Appshadow_component=normalizeComponent(src_Appvue_type_script_lang_js_shadow,render,staticRenderFns,false,Appshadow_injectStyles,null,null,true)
var Appshadow=(Appshadow_component.exports);window.customElements.define('twig-profile',vue_wc_wrapper(vue_runtime_esm["a"],Appshadow))}),"5dee":(function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__("24fb");exports=___CSS_LOADER_API_IMPORT___(false);exports.push([module.i,".twig-profile{font-size:16px;line-height:25px}.twig-profile input,.twig-profile label,.twig-profile select{display:block}.twig-profile__form-part{padding:10px 0}h3+.twig-profile__form-part{padding:0 0 10px}.twig-profile--light{--text-color:#000;--link-color:#00f;--alert-color:#a00;--warning-color:#b33000;--muted-color:#666}.twig-profile--dark{--text-color:#fff;--link-color:#0ff;--alert-color:#f88;--warning-color:#ff4;--muted-color:#bbb}",""]);module.exports=exports;}),"8875":(function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(root,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_FACTORY__=(factory),__WEBPACK_AMD_DEFINE_RESULT__=(typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__)):__WEBPACK_AMD_DEFINE_FACTORY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}}(typeof self!=='undefined'?self:this,function(){function getCurrentScript(){var descriptor=Object.getOwnPropertyDescriptor(document,'currentScript')
if(!descriptor&&'currentScript'in document&&document.currentScript){return document.currentScript}
if(descriptor&&descriptor.get!==getCurrentScript&&document.currentScript){return document.currentScript}
try{throw new Error();}
catch(err){var ieStackRegExp=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,ffStackRegExp=/@([^@]*):(\d+):(\d+)\s*$/ig,stackDetails=ieStackRegExp.exec(err.stack)||ffStackRegExp.exec(err.stack),scriptLocation=(stackDetails&&stackDetails[1])||false,line=(stackDetails&&stackDetails[2])||false,currentLocation=document.location.href.replace(document.location.hash,''),pageSource,inlineScriptSourceRegExp,inlineScriptSource,scripts=document.getElementsByTagName('script');if(scriptLocation===currentLocation){pageSource=document.documentElement.outerHTML;inlineScriptSourceRegExp=new RegExp('(?:[^\\n]+?\\n){0,'+(line-2)+'}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*','i');inlineScriptSource=pageSource.replace(inlineScriptSourceRegExp,'$1').trim();}
for(var i=0;i<scripts.length;i++){if(scripts[i].readyState==='interactive'){return scripts[i];}
if(scripts[i].src===scriptLocation){return scripts[i];}
if(scriptLocation===currentLocation&&scripts[i].innerHTML&&scripts[i].innerHTML.trim()===inlineScriptSource){return scripts[i];}}
return null;}};return getCurrentScript}));}),"9017":(function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__("24fb");exports=___CSS_LOADER_API_IMPORT___(false);exports.push([module.i,".profile{color:var(--text-color)}.profile__name a{color:var(--link-color)}.profile__duration{margin-left:.2em}.profile__duration--medium{color:var(--warning-color);font-style:italic}.profile__duration--high{color:var(--alert-color);font-weight:700}.profile__duration--low{color:var(--muted-color)}.profile__children{margin-left:1em;border-left:1px solid var(--text-color);padding-left:1em;position:relative}.profile__children:before{position:absolute;content:\"\";left:0;height:1px;background-color:var(--text-color);width:.8em;display:block;top:.8rem}",""]);module.exports=exports;}),"c8ba":(function(module,exports){var g;g=(function(){return this;})();try{g=g||new Function("return this")();}catch(e){if(typeof window==="object")g=window;}
module.exports=g;}),"c8dc":(function(module,exports,__webpack_require__){var content=__webpack_require__("9017");if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;var add=__webpack_require__("35d6").default
module.exports.__inject__=function(shadowRoot){add("26d0ed18",content,shadowRoot)};}),"f457":(function(module,exports,__webpack_require__){var content=__webpack_require__("5dee");if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;var add=__webpack_require__("35d6").default
module.exports.__inject__=function(shadowRoot){add("fc0952da",content,shadowRoot)};})});
const searchResults=[];var current_url=window.location.origin;var static_url=document.querySelector("meta[name='ssp-url']").getAttribute("content");if(static_url.includes(current_url)){var baseurl=document.querySelector("meta[name='ssp-config-url']").getAttribute("content");var host_name=window.location.hostname;let index_url=baseurl+host_name.split('.').join('-')+'-index.json';let index;function loadIndex(callback){var xobj=new XMLHttpRequest();xobj.overrideMimeType("application/json");xobj.open('GET',index_url,false);xobj.onreadystatechange=function(){if(xobj.readyState==4&&xobj.status=="200"){callback(xobj.responseText);}};xobj.send(null);}
loadIndex(function(response){var json=JSON.parse(response);const index=Object.values(json);for(const value of index){var result={url:value.url,title:value.title,excerpt:value.excerpt,content:value.content,};searchResults.push(result);}});const searchFormNode=document.querySelector('.search-form');const searchInputNode=document.querySelector('.search-input');const autoCompleteNode=document.querySelector('.search-auto-complete');const resultNode=document.querySelector('.result');let input='';let results=[];let selected=-1;let showAutoComplete=false;const fuse=new Fuse(searchResults,{keys:['title','content'],shouldSort:true,threshold:0.5,maxPatternLength:50});function renderAutoComplete(){if(!showAutoComplete||input.length<3||results.length===0){autoCompleteNode.classList.remove('show');return'';}else{autoCompleteNode.classList.add('show');}
return`
    <ul>
      ${results.map((result, index) => `<a href="${result.item.url}"style="text-decoration:none;color:#000000"><li class='auto-complete-item${index === selected ? 'selected' : ''}'><p><b>${result.item.title}</b></br><small>${result.item.excerpt}</small></p></li></a>`).join('')}
    </ul>
  `;}
function handleSearchInput(event){input=event.target.value;results=[];if(input.length>=3){results=fuse.search(input).slice(0,7);}
showAutoComplete=true;autoCompleteNode.innerHTML=renderAutoComplete();}
function updateSearchInput(){if(selected===-1){searchInputNode.value=input;}else{searchInputNode.value=results[selected].title;}
autoCompleteNode.innerHTML=renderAutoComplete();}
function handleSearchKeyDown(event){switch(event.which){case 38:selected=Math.max(--selected,-1);updateSearchInput();break;case 40:selected=Math.min(++selected,results.length-1);showAutoComplete=true;updateSearchInput();break;case 9:showAutoComplete=false;updateSearchInput();break;case 27:selected=-1;showAutoComplete=false;updateSearchInput();break;}}
function handleWindowClick(event){showAutoComplete=false;autoCompleteNode.innerHTML=renderAutoComplete();}
if(document.getElementsByClassName('search-input-container').length>0){document.querySelector('.search-input-container').addEventListener('keydown',handleSearchKeyDown);searchInputNode.addEventListener('input',handleSearchInput);window.addEventListener('click',handleWindowClick);}};
/*!
  * Understrap v1.1.0 (https://understrap.com)
  * Copyright 2013-2022 The Understrap Authors (https://github.com/understrap/understrap/graphs/contributors)
  * Licensed under GPL (http://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
  */
(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory(exports):typeof define==='function'&&define.amd?define(['exports'],factory):(global=typeof globalThis!=='undefined'?globalThis:global||self,factory(global.understrap={}));})(this,(function(exports){'use strict';var commonjsGlobal=typeof globalThis!=='undefined'?globalThis:typeof window!=='undefined'?window:typeof global!=='undefined'?global:typeof self!=='undefined'?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,'default')?x['default']:x;}
function getAugmentedNamespace(n){if(n.__esModule)return n;var a=Object.defineProperty({},'__esModule',{value:true});Object.keys(n).forEach(function(k){var d=Object.getOwnPropertyDescriptor(n,k);Object.defineProperty(a,k,d.get?d:{enumerable:true,get:function(){return n[k];}});});return a;}
var alert$1={exports:{}};var eventHandler={exports:{}};
/*!
   * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory();})(commonjsGlobal,(function(){const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const namespaceRegex=/[^.]*(?=\..*)\.|.*/;const stripNameRegex=/\..*/;const stripUidRegex=/::\d+$/;const eventRegistry={};let uidEvent=1;const customEvents={mouseenter:'mouseover',mouseleave:'mouseout'};const customEventsRegex=/^(mouseenter|mouseleave)/i;const nativeEvents=new Set(['click','dblclick','mouseup','mousedown','contextmenu','mousewheel','DOMMouseScroll','mouseover','mouseout','mousemove','selectstart','selectend','keydown','keypress','keyup','orientationchange','touchstart','touchmove','touchend','touchcancel','pointerdown','pointermove','pointerup','pointerleave','pointercancel','gesturestart','gesturechange','gestureend','focus','blur','change','reset','select','submit','focusin','focusout','load','unload','beforeunload','resize','move','DOMContentLoaded','readystatechange','error','abort','scroll']);function getUidEvent(element,uid){return uid&&`${uid}::${uidEvent++}`||element.uidEvent||uidEvent++;}
function getEvent(element){const uid=getUidEvent(element);element.uidEvent=uid;eventRegistry[uid]=eventRegistry[uid]||{};return eventRegistry[uid];}
function bootstrapHandler(element,fn){return function handler(event){event.delegateTarget=element;if(handler.oneOff){EventHandler.off(element,event.type,fn);}
return fn.apply(element,[event]);};}
function bootstrapDelegationHandler(element,selector,fn){return function handler(event){const domElements=element.querySelectorAll(selector);for(let{target}=event;target&&target!==this;target=target.parentNode){for(let i=domElements.length;i--;){if(domElements[i]===target){event.delegateTarget=target;if(handler.oneOff){EventHandler.off(element,event.type,selector,fn);}
return fn.apply(target,[event]);}}}
return null;};}
function findHandler(events,handler,delegationSelector=null){const uidEventList=Object.keys(events);for(let i=0,len=uidEventList.length;i<len;i++){const event=events[uidEventList[i]];if(event.originalHandler===handler&&event.delegationSelector===delegationSelector){return event;}}
return null;}
function normalizeParams(originalTypeEvent,handler,delegationFn){const delegation=typeof handler==='string';const originalHandler=delegation?delegationFn:handler;let typeEvent=getTypeEvent(originalTypeEvent);const isNative=nativeEvents.has(typeEvent);if(!isNative){typeEvent=originalTypeEvent;}
return[delegation,originalHandler,typeEvent];}
function addHandler(element,originalTypeEvent,handler,delegationFn,oneOff){if(typeof originalTypeEvent!=='string'||!element){return;}
if(!handler){handler=delegationFn;delegationFn=null;}
if(customEventsRegex.test(originalTypeEvent)){const wrapFn=fn=>{return function(event){if(!event.relatedTarget||event.relatedTarget!==event.delegateTarget&&!event.delegateTarget.contains(event.relatedTarget)){return fn.call(this,event);}};};if(delegationFn){delegationFn=wrapFn(delegationFn);}else{handler=wrapFn(handler);}}
const[delegation,originalHandler,typeEvent]=normalizeParams(originalTypeEvent,handler,delegationFn);const events=getEvent(element);const handlers=events[typeEvent]||(events[typeEvent]={});const previousFn=findHandler(handlers,originalHandler,delegation?handler:null);if(previousFn){previousFn.oneOff=previousFn.oneOff&&oneOff;return;}
const uid=getUidEvent(originalHandler,originalTypeEvent.replace(namespaceRegex,''));const fn=delegation?bootstrapDelegationHandler(element,handler,delegationFn):bootstrapHandler(element,handler);fn.delegationSelector=delegation?handler:null;fn.originalHandler=originalHandler;fn.oneOff=oneOff;fn.uidEvent=uid;handlers[uid]=fn;element.addEventListener(typeEvent,fn,delegation);}
function removeHandler(element,events,typeEvent,handler,delegationSelector){const fn=findHandler(events[typeEvent],handler,delegationSelector);if(!fn){return;}
element.removeEventListener(typeEvent,fn,Boolean(delegationSelector));delete events[typeEvent][fn.uidEvent];}
function removeNamespacedHandlers(element,events,typeEvent,namespace){const storeElementEvent=events[typeEvent]||{};Object.keys(storeElementEvent).forEach(handlerKey=>{if(handlerKey.includes(namespace)){const event=storeElementEvent[handlerKey];removeHandler(element,events,typeEvent,event.originalHandler,event.delegationSelector);}});}
function getTypeEvent(event){event=event.replace(stripNameRegex,'');return customEvents[event]||event;}
const EventHandler={on(element,event,handler,delegationFn){addHandler(element,event,handler,delegationFn,false);},one(element,event,handler,delegationFn){addHandler(element,event,handler,delegationFn,true);},off(element,originalTypeEvent,handler,delegationFn){if(typeof originalTypeEvent!=='string'||!element){return;}
const[delegation,originalHandler,typeEvent]=normalizeParams(originalTypeEvent,handler,delegationFn);const inNamespace=typeEvent!==originalTypeEvent;const events=getEvent(element);const isNamespace=originalTypeEvent.startsWith('.');if(typeof originalHandler!=='undefined'){if(!events||!events[typeEvent]){return;}
removeHandler(element,events,typeEvent,originalHandler,delegation?handler:null);return;}
if(isNamespace){Object.keys(events).forEach(elementEvent=>{removeNamespacedHandlers(element,events,elementEvent,originalTypeEvent.slice(1));});}
const storeElementEvent=events[typeEvent]||{};Object.keys(storeElementEvent).forEach(keyHandlers=>{const handlerKey=keyHandlers.replace(stripUidRegex,'');if(!inNamespace||originalTypeEvent.includes(handlerKey)){const event=storeElementEvent[keyHandlers];removeHandler(element,events,typeEvent,event.originalHandler,event.delegationSelector);}});},trigger(element,event,args){if(typeof event!=='string'||!element){return null;}
const $=getjQuery();const typeEvent=getTypeEvent(event);const inNamespace=event!==typeEvent;const isNative=nativeEvents.has(typeEvent);let jQueryEvent;let bubbles=true;let nativeDispatch=true;let defaultPrevented=false;let evt=null;if(inNamespace&&$){jQueryEvent=$.Event(event,args);$(element).trigger(jQueryEvent);bubbles=!jQueryEvent.isPropagationStopped();nativeDispatch=!jQueryEvent.isImmediatePropagationStopped();defaultPrevented=jQueryEvent.isDefaultPrevented();}
if(isNative){evt=document.createEvent('HTMLEvents');evt.initEvent(typeEvent,bubbles,true);}else{evt=new CustomEvent(event,{bubbles,cancelable:true});}
if(typeof args!=='undefined'){Object.keys(args).forEach(key=>{Object.defineProperty(evt,key,{get(){return args[key];}});});}
if(defaultPrevented){evt.preventDefault();}
if(nativeDispatch){element.dispatchEvent(evt);}
if(evt.defaultPrevented&&typeof jQueryEvent!=='undefined'){jQueryEvent.preventDefault();}
return evt;}};return EventHandler;}));}(eventHandler));var baseComponent={exports:{}};var data={exports:{}};
/*!
   * Bootstrap data.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory();})(commonjsGlobal,(function(){const elementMap=new Map();const data={set(element,key,instance){if(!elementMap.has(element)){elementMap.set(element,new Map());}
const instanceMap=elementMap.get(element);if(!instanceMap.has(key)&&instanceMap.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);return;}
instanceMap.set(key,instance);},get(element,key){if(elementMap.has(element)){return elementMap.get(element).get(key)||null;}
return null;},remove(element,key){if(!elementMap.has(element)){return;}
const instanceMap=elementMap.get(element);instanceMap.delete(key);if(instanceMap.size===0){elementMap.delete(element);}}};return data;}));}(data));
/*!
   * Bootstrap base-component.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(data.exports,eventHandler.exports);})(commonjsGlobal,(function(Data,EventHandler){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};const Data__default=_interopDefaultLegacy(Data);const EventHandler__default=_interopDefaultLegacy(EventHandler);const MILLISECONDS_MULTIPLIER=1000;const TRANSITION_END='transitionend';const getTransitionDurationFromElement=element=>{if(!element){return 0;}
let{transitionDuration,transitionDelay}=window.getComputedStyle(element);const floatTransitionDuration=Number.parseFloat(transitionDuration);const floatTransitionDelay=Number.parseFloat(transitionDelay);if(!floatTransitionDuration&&!floatTransitionDelay){return 0;}
transitionDuration=transitionDuration.split(',')[0];transitionDelay=transitionDelay.split(',')[0];return(Number.parseFloat(transitionDuration)+Number.parseFloat(transitionDelay))*MILLISECONDS_MULTIPLIER;};const triggerTransitionEnd=element=>{element.dispatchEvent(new Event(TRANSITION_END));};const isElement=obj=>{if(!obj||typeof obj!=='object'){return false;}
if(typeof obj.jquery!=='undefined'){obj=obj[0];}
return typeof obj.nodeType!=='undefined';};const getElement=obj=>{if(isElement(obj)){return obj.jquery?obj[0]:obj;}
if(typeof obj==='string'&&obj.length>0){return document.querySelector(obj);}
return null;};const execute=callback=>{if(typeof callback==='function'){callback();}};const executeAfterTransition=(callback,transitionElement,waitForTransition=true)=>{if(!waitForTransition){execute(callback);return;}
const durationPadding=5;const emulatedDuration=getTransitionDurationFromElement(transitionElement)+durationPadding;let called=false;const handler=({target})=>{if(target!==transitionElement){return;}
called=true;transitionElement.removeEventListener(TRANSITION_END,handler);execute(callback);};transitionElement.addEventListener(TRANSITION_END,handler);setTimeout(()=>{if(!called){triggerTransitionEnd(transitionElement);}},emulatedDuration);};const VERSION='5.1.3';class BaseComponent{constructor(element){element=getElement(element);if(!element){return;}
this._element=element;Data__default.default.set(this._element,this.constructor.DATA_KEY,this);}
dispose(){Data__default.default.remove(this._element,this.constructor.DATA_KEY);EventHandler__default.default.off(this._element,this.constructor.EVENT_KEY);Object.getOwnPropertyNames(this).forEach(propertyName=>{this[propertyName]=null;});}
_queueCallback(callback,element,isAnimated=true){executeAfterTransition(callback,element,isAnimated);}
static getInstance(element){return Data__default.default.get(getElement(element),this.DATA_KEY);}
static getOrCreateInstance(element,config={}){return this.getInstance(element)||new this(element,typeof config==='object'?config:null);}
static get VERSION(){return VERSION;}
static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!');}
static get DATA_KEY(){return`bs.${this.NAME}`;}
static get EVENT_KEY(){return`.${this.DATA_KEY}`;}}
return BaseComponent;}));}(baseComponent));
/*!
   * Bootstrap alert.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(eventHandler.exports,baseComponent.exports);})(commonjsGlobal,(function(EventHandler,BaseComponent){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};const EventHandler__default=_interopDefaultLegacy(EventHandler);const BaseComponent__default=_interopDefaultLegacy(BaseComponent);const getSelector=element=>{let selector=element.getAttribute('data-bs-target');if(!selector||selector==='#'){let hrefAttr=element.getAttribute('href');if(!hrefAttr||!hrefAttr.includes('#')&&!hrefAttr.startsWith('.')){return null;}
if(hrefAttr.includes('#')&&!hrefAttr.startsWith('#')){hrefAttr=`#${hrefAttr.split('#')[1]}`;}
selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():null;}
return selector;};const getElementFromSelector=element=>{const selector=getSelector(element);return selector?document.querySelector(selector):null;};const isDisabled=element=>{if(!element||element.nodeType!==Node.ELEMENT_NODE){return true;}
if(element.classList.contains('disabled')){return true;}
if(typeof element.disabled!=='undefined'){return element.disabled;}
return element.hasAttribute('disabled')&&element.getAttribute('disabled')!=='false';};const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const enableDismissTrigger=(component,method='hide')=>{const clickEvent=`click.dismiss${component.EVENT_KEY}`;const name=component.NAME;EventHandler__default.default.on(document,clickEvent,`[data-bs-dismiss="${name}"]`,function(event){if(['A','AREA'].includes(this.tagName)){event.preventDefault();}
if(isDisabled(this)){return;}
const target=getElementFromSelector(this)||this.closest(`.${name}`);const instance=component.getOrCreateInstance(target);instance[method]();});};const NAME='alert';const DATA_KEY='bs.alert';const EVENT_KEY=`.${DATA_KEY}`;const EVENT_CLOSE=`close${EVENT_KEY}`;const EVENT_CLOSED=`closed${EVENT_KEY}`;const CLASS_NAME_FADE='fade';const CLASS_NAME_SHOW='show';class Alert extends BaseComponent__default.default{static get NAME(){return NAME;}
close(){const closeEvent=EventHandler__default.default.trigger(this._element,EVENT_CLOSE);if(closeEvent.defaultPrevented){return;}
this._element.classList.remove(CLASS_NAME_SHOW);const isAnimated=this._element.classList.contains(CLASS_NAME_FADE);this._queueCallback(()=>this._destroyElement(),this._element,isAnimated);}
_destroyElement(){this._element.remove();EventHandler__default.default.trigger(this._element,EVENT_CLOSED);this.dispose();}
static jQueryInterface(config){return this.each(function(){const data=Alert.getOrCreateInstance(this);if(typeof config!=='string'){return;}
if(data[config]===undefined||config.startsWith('_')||config==='constructor'){throw new TypeError(`No method named "${config}"`);}
data[config](this);});}}
enableDismissTrigger(Alert,'close');defineJQueryPlugin(Alert);return Alert;}));}(alert$1));var alert=alert$1.exports;var button$1={exports:{}};
/*!
   * Bootstrap button.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(eventHandler.exports,baseComponent.exports);})(commonjsGlobal,(function(EventHandler,BaseComponent){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};const EventHandler__default=_interopDefaultLegacy(EventHandler);const BaseComponent__default=_interopDefaultLegacy(BaseComponent);const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const NAME='button';const DATA_KEY='bs.button';const EVENT_KEY=`.${DATA_KEY}`;const DATA_API_KEY='.data-api';const CLASS_NAME_ACTIVE='active';const SELECTOR_DATA_TOGGLE='[data-bs-toggle="button"]';const EVENT_CLICK_DATA_API=`click${EVENT_KEY}${DATA_API_KEY}`;class Button extends BaseComponent__default.default{static get NAME(){return NAME;}
toggle(){this._element.setAttribute('aria-pressed',this._element.classList.toggle(CLASS_NAME_ACTIVE));}
static jQueryInterface(config){return this.each(function(){const data=Button.getOrCreateInstance(this);if(config==='toggle'){data[config]();}});}}
EventHandler__default.default.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,event=>{event.preventDefault();const button=event.target.closest(SELECTOR_DATA_TOGGLE);const data=Button.getOrCreateInstance(button);data.toggle();});defineJQueryPlugin(Button);return Button;}));}(button$1));var button=button$1.exports;var carousel$1={exports:{}};var manipulator={exports:{}};
/*!
   * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory();})(commonjsGlobal,(function(){function normalizeData(val){if(val==='true'){return true;}
if(val==='false'){return false;}
if(val===Number(val).toString()){return Number(val);}
if(val===''||val==='null'){return null;}
return val;}
function normalizeDataKey(key){return key.replace(/[A-Z]/g,chr=>`-${chr.toLowerCase()}`);}
const Manipulator={setDataAttribute(element,key,value){element.setAttribute(`data-bs-${normalizeDataKey(key)}`,value);},removeDataAttribute(element,key){element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);},getDataAttributes(element){if(!element){return{};}
const attributes={};Object.keys(element.dataset).filter(key=>key.startsWith('bs')).forEach(key=>{let pureKey=key.replace(/^bs/,'');pureKey=pureKey.charAt(0).toLowerCase()+pureKey.slice(1,pureKey.length);attributes[pureKey]=normalizeData(element.dataset[key]);});return attributes;},getDataAttribute(element,key){return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));},offset(element){const rect=element.getBoundingClientRect();return{top:rect.top+window.pageYOffset,left:rect.left+window.pageXOffset};},position(element){return{top:element.offsetTop,left:element.offsetLeft};}};return Manipulator;}));}(manipulator));var selectorEngine={exports:{}};
/*!
   * Bootstrap selector-engine.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory();})(commonjsGlobal,(function(){const isElement=obj=>{if(!obj||typeof obj!=='object'){return false;}
if(typeof obj.jquery!=='undefined'){obj=obj[0];}
return typeof obj.nodeType!=='undefined';};const isVisible=element=>{if(!isElement(element)||element.getClientRects().length===0){return false;}
return getComputedStyle(element).getPropertyValue('visibility')==='visible';};const isDisabled=element=>{if(!element||element.nodeType!==Node.ELEMENT_NODE){return true;}
if(element.classList.contains('disabled')){return true;}
if(typeof element.disabled!=='undefined'){return element.disabled;}
return element.hasAttribute('disabled')&&element.getAttribute('disabled')!=='false';};const NODE_TEXT=3;const SelectorEngine={find(selector,element=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(element,selector));},findOne(selector,element=document.documentElement){return Element.prototype.querySelector.call(element,selector);},children(element,selector){return[].concat(...element.children).filter(child=>child.matches(selector));},parents(element,selector){const parents=[];let ancestor=element.parentNode;while(ancestor&&ancestor.nodeType===Node.ELEMENT_NODE&&ancestor.nodeType!==NODE_TEXT){if(ancestor.matches(selector)){parents.push(ancestor);}
ancestor=ancestor.parentNode;}
return parents;},prev(element,selector){let previous=element.previousElementSibling;while(previous){if(previous.matches(selector)){return[previous];}
previous=previous.previousElementSibling;}
return[];},next(element,selector){let next=element.nextElementSibling;while(next){if(next.matches(selector)){return[next];}
next=next.nextElementSibling;}
return[];},focusableChildren(element){const focusables=['a','button','input','textarea','select','details','[tabindex]','[contenteditable="true"]'].map(selector=>`${selector}:not([tabindex^="-"])`).join(', ');return this.find(focusables,element).filter(el=>!isDisabled(el)&&isVisible(el));}};return SelectorEngine;}));}(selectorEngine));
/*!
   * Bootstrap carousel.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(eventHandler.exports,manipulator.exports,selectorEngine.exports,baseComponent.exports);})(commonjsGlobal,(function(EventHandler,Manipulator,SelectorEngine,BaseComponent){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};const EventHandler__default=_interopDefaultLegacy(EventHandler);const Manipulator__default=_interopDefaultLegacy(Manipulator);const SelectorEngine__default=_interopDefaultLegacy(SelectorEngine);const BaseComponent__default=_interopDefaultLegacy(BaseComponent);const TRANSITION_END='transitionend';const toType=obj=>{if(obj===null||obj===undefined){return`${obj}`;}
return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();};const getSelector=element=>{let selector=element.getAttribute('data-bs-target');if(!selector||selector==='#'){let hrefAttr=element.getAttribute('href');if(!hrefAttr||!hrefAttr.includes('#')&&!hrefAttr.startsWith('.')){return null;}
if(hrefAttr.includes('#')&&!hrefAttr.startsWith('#')){hrefAttr=`#${hrefAttr.split('#')[1]}`;}
selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():null;}
return selector;};const getElementFromSelector=element=>{const selector=getSelector(element);return selector?document.querySelector(selector):null;};const triggerTransitionEnd=element=>{element.dispatchEvent(new Event(TRANSITION_END));};const isElement=obj=>{if(!obj||typeof obj!=='object'){return false;}
if(typeof obj.jquery!=='undefined'){obj=obj[0];}
return typeof obj.nodeType!=='undefined';};const typeCheckConfig=(componentName,config,configTypes)=>{Object.keys(configTypes).forEach(property=>{const expectedTypes=configTypes[property];const value=config[property];const valueType=value&&isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);}});};const isVisible=element=>{if(!isElement(element)||element.getClientRects().length===0){return false;}
return getComputedStyle(element).getPropertyValue('visibility')==='visible';};const reflow=element=>{element.offsetHeight;};const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const isRTL=()=>document.documentElement.dir==='rtl';const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const getNextActiveElement=(list,activeElement,shouldGetNext,isCycleAllowed)=>{let index=list.indexOf(activeElement);if(index===-1){return list[!shouldGetNext&&isCycleAllowed?list.length-1:0];}
const listLength=list.length;index+=shouldGetNext?1:-1;if(isCycleAllowed){index=(index+listLength)%listLength;}
return list[Math.max(0,Math.min(index,listLength-1))];};const NAME='carousel';const DATA_KEY='bs.carousel';const EVENT_KEY=`.${DATA_KEY}`;const DATA_API_KEY='.data-api';const ARROW_LEFT_KEY='ArrowLeft';const ARROW_RIGHT_KEY='ArrowRight';const TOUCHEVENT_COMPAT_WAIT=500;const SWIPE_THRESHOLD=40;const Default={interval:5000,keyboard:true,slide:false,pause:'hover',wrap:true,touch:true};const DefaultType={interval:'(number|boolean)',keyboard:'boolean',slide:'(boolean|string)',pause:'(string|boolean)',wrap:'boolean',touch:'boolean'};const ORDER_NEXT='next';const ORDER_PREV='prev';const DIRECTION_LEFT='left';const DIRECTION_RIGHT='right';const KEY_TO_DIRECTION={[ARROW_LEFT_KEY]:DIRECTION_RIGHT,[ARROW_RIGHT_KEY]:DIRECTION_LEFT};const EVENT_SLIDE=`slide${EVENT_KEY}`;const EVENT_SLID=`slid${EVENT_KEY}`;const EVENT_KEYDOWN=`keydown${EVENT_KEY}`;const EVENT_MOUSEENTER=`mouseenter${EVENT_KEY}`;const EVENT_MOUSELEAVE=`mouseleave${EVENT_KEY}`;const EVENT_TOUCHSTART=`touchstart${EVENT_KEY}`;const EVENT_TOUCHMOVE=`touchmove${EVENT_KEY}`;const EVENT_TOUCHEND=`touchend${EVENT_KEY}`;const EVENT_POINTERDOWN=`pointerdown${EVENT_KEY}`;const EVENT_POINTERUP=`pointerup${EVENT_KEY}`;const EVENT_DRAG_START=`dragstart${EVENT_KEY}`;const EVENT_LOAD_DATA_API=`load${EVENT_KEY}${DATA_API_KEY}`;const EVENT_CLICK_DATA_API=`click${EVENT_KEY}${DATA_API_KEY}`;const CLASS_NAME_CAROUSEL='carousel';const CLASS_NAME_ACTIVE='active';const CLASS_NAME_SLIDE='slide';const CLASS_NAME_END='carousel-item-end';const CLASS_NAME_START='carousel-item-start';const CLASS_NAME_NEXT='carousel-item-next';const CLASS_NAME_PREV='carousel-item-prev';const CLASS_NAME_POINTER_EVENT='pointer-event';const SELECTOR_ACTIVE='.active';const SELECTOR_ACTIVE_ITEM='.active.carousel-item';const SELECTOR_ITEM='.carousel-item';const SELECTOR_ITEM_IMG='.carousel-item img';const SELECTOR_NEXT_PREV='.carousel-item-next, .carousel-item-prev';const SELECTOR_INDICATORS='.carousel-indicators';const SELECTOR_INDICATOR='[data-bs-target]';const SELECTOR_DATA_SLIDE='[data-bs-slide], [data-bs-slide-to]';const SELECTOR_DATA_RIDE='[data-bs-ride="carousel"]';const POINTER_TYPE_TOUCH='touch';const POINTER_TYPE_PEN='pen';class Carousel extends BaseComponent__default.default{constructor(element,config){super(element);this._items=null;this._interval=null;this._activeElement=null;this._isPaused=false;this._isSliding=false;this.touchTimeout=null;this.touchStartX=0;this.touchDeltaX=0;this._config=this._getConfig(config);this._indicatorsElement=SelectorEngine__default.default.findOne(SELECTOR_INDICATORS,this._element);this._touchSupported='ontouchstart'in document.documentElement||navigator.maxTouchPoints>0;this._pointerEvent=Boolean(window.PointerEvent);this._addEventListeners();}
static get Default(){return Default;}
static get NAME(){return NAME;}
next(){this._slide(ORDER_NEXT);}
nextWhenVisible(){if(!document.hidden&&isVisible(this._element)){this.next();}}
prev(){this._slide(ORDER_PREV);}
pause(event){if(!event){this._isPaused=true;}
if(SelectorEngine__default.default.findOne(SELECTOR_NEXT_PREV,this._element)){triggerTransitionEnd(this._element);this.cycle(true);}
clearInterval(this._interval);this._interval=null;}
cycle(event){if(!event){this._isPaused=false;}
if(this._interval){clearInterval(this._interval);this._interval=null;}
if(this._config&&this._config.interval&&!this._isPaused){this._updateInterval();this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval);}}
to(index){this._activeElement=SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM,this._element);const activeIndex=this._getItemIndex(this._activeElement);if(index>this._items.length-1||index<0){return;}
if(this._isSliding){EventHandler__default.default.one(this._element,EVENT_SLID,()=>this.to(index));return;}
if(activeIndex===index){this.pause();this.cycle();return;}
const order=index>activeIndex?ORDER_NEXT:ORDER_PREV;this._slide(order,this._items[index]);}
_getConfig(config){config={...Default,...Manipulator__default.default.getDataAttributes(this._element),...(typeof config==='object'?config:{})};typeCheckConfig(NAME,config,DefaultType);return config;}
_handleSwipe(){const absDeltax=Math.abs(this.touchDeltaX);if(absDeltax<=SWIPE_THRESHOLD){return;}
const direction=absDeltax/this.touchDeltaX;this.touchDeltaX=0;if(!direction){return;}
this._slide(direction>0?DIRECTION_RIGHT:DIRECTION_LEFT);}
_addEventListeners(){if(this._config.keyboard){EventHandler__default.default.on(this._element,EVENT_KEYDOWN,event=>this._keydown(event));}
if(this._config.pause==='hover'){EventHandler__default.default.on(this._element,EVENT_MOUSEENTER,event=>this.pause(event));EventHandler__default.default.on(this._element,EVENT_MOUSELEAVE,event=>this.cycle(event));}
if(this._config.touch&&this._touchSupported){this._addTouchEventListeners();}}
_addTouchEventListeners(){const hasPointerPenTouch=event=>{return this._pointerEvent&&(event.pointerType===POINTER_TYPE_PEN||event.pointerType===POINTER_TYPE_TOUCH);};const start=event=>{if(hasPointerPenTouch(event)){this.touchStartX=event.clientX;}else if(!this._pointerEvent){this.touchStartX=event.touches[0].clientX;}};const move=event=>{this.touchDeltaX=event.touches&&event.touches.length>1?0:event.touches[0].clientX-this.touchStartX;};const end=event=>{if(hasPointerPenTouch(event)){this.touchDeltaX=event.clientX-this.touchStartX;}
this._handleSwipe();if(this._config.pause==='hover'){this.pause();if(this.touchTimeout){clearTimeout(this.touchTimeout);}
this.touchTimeout=setTimeout(event=>this.cycle(event),TOUCHEVENT_COMPAT_WAIT+this._config.interval);}};SelectorEngine__default.default.find(SELECTOR_ITEM_IMG,this._element).forEach(itemImg=>{EventHandler__default.default.on(itemImg,EVENT_DRAG_START,event=>event.preventDefault());});if(this._pointerEvent){EventHandler__default.default.on(this._element,EVENT_POINTERDOWN,event=>start(event));EventHandler__default.default.on(this._element,EVENT_POINTERUP,event=>end(event));this._element.classList.add(CLASS_NAME_POINTER_EVENT);}else{EventHandler__default.default.on(this._element,EVENT_TOUCHSTART,event=>start(event));EventHandler__default.default.on(this._element,EVENT_TOUCHMOVE,event=>move(event));EventHandler__default.default.on(this._element,EVENT_TOUCHEND,event=>end(event));}}
_keydown(event){if(/input|textarea/i.test(event.target.tagName)){return;}
const direction=KEY_TO_DIRECTION[event.key];if(direction){event.preventDefault();this._slide(direction);}}
_getItemIndex(element){this._items=element&&element.parentNode?SelectorEngine__default.default.find(SELECTOR_ITEM,element.parentNode):[];return this._items.indexOf(element);}
_getItemByOrder(order,activeElement){const isNext=order===ORDER_NEXT;return getNextActiveElement(this._items,activeElement,isNext,this._config.wrap);}
_triggerSlideEvent(relatedTarget,eventDirectionName){const targetIndex=this._getItemIndex(relatedTarget);const fromIndex=this._getItemIndex(SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM,this._element));return EventHandler__default.default.trigger(this._element,EVENT_SLIDE,{relatedTarget,direction:eventDirectionName,from:fromIndex,to:targetIndex});}
_setActiveIndicatorElement(element){if(this._indicatorsElement){const activeIndicator=SelectorEngine__default.default.findOne(SELECTOR_ACTIVE,this._indicatorsElement);activeIndicator.classList.remove(CLASS_NAME_ACTIVE);activeIndicator.removeAttribute('aria-current');const indicators=SelectorEngine__default.default.find(SELECTOR_INDICATOR,this._indicatorsElement);for(let i=0;i<indicators.length;i++){if(Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'),10)===this._getItemIndex(element)){indicators[i].classList.add(CLASS_NAME_ACTIVE);indicators[i].setAttribute('aria-current','true');break;}}}}
_updateInterval(){const element=this._activeElement||SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM,this._element);if(!element){return;}
const elementInterval=Number.parseInt(element.getAttribute('data-bs-interval'),10);if(elementInterval){this._config.defaultInterval=this._config.defaultInterval||this._config.interval;this._config.interval=elementInterval;}else{this._config.interval=this._config.defaultInterval||this._config.interval;}}
_slide(directionOrOrder,element){const order=this._directionToOrder(directionOrOrder);const activeElement=SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM,this._element);const activeElementIndex=this._getItemIndex(activeElement);const nextElement=element||this._getItemByOrder(order,activeElement);const nextElementIndex=this._getItemIndex(nextElement);const isCycling=Boolean(this._interval);const isNext=order===ORDER_NEXT;const directionalClassName=isNext?CLASS_NAME_START:CLASS_NAME_END;const orderClassName=isNext?CLASS_NAME_NEXT:CLASS_NAME_PREV;const eventDirectionName=this._orderToDirection(order);if(nextElement&&nextElement.classList.contains(CLASS_NAME_ACTIVE)){this._isSliding=false;return;}
if(this._isSliding){return;}
const slideEvent=this._triggerSlideEvent(nextElement,eventDirectionName);if(slideEvent.defaultPrevented){return;}
if(!activeElement||!nextElement){return;}
this._isSliding=true;if(isCycling){this.pause();}
this._setActiveIndicatorElement(nextElement);this._activeElement=nextElement;const triggerSlidEvent=()=>{EventHandler__default.default.trigger(this._element,EVENT_SLID,{relatedTarget:nextElement,direction:eventDirectionName,from:activeElementIndex,to:nextElementIndex});};if(this._element.classList.contains(CLASS_NAME_SLIDE)){nextElement.classList.add(orderClassName);reflow(nextElement);activeElement.classList.add(directionalClassName);nextElement.classList.add(directionalClassName);const completeCallBack=()=>{nextElement.classList.remove(directionalClassName,orderClassName);nextElement.classList.add(CLASS_NAME_ACTIVE);activeElement.classList.remove(CLASS_NAME_ACTIVE,orderClassName,directionalClassName);this._isSliding=false;setTimeout(triggerSlidEvent,0);};this._queueCallback(completeCallBack,activeElement,true);}else{activeElement.classList.remove(CLASS_NAME_ACTIVE);nextElement.classList.add(CLASS_NAME_ACTIVE);this._isSliding=false;triggerSlidEvent();}
if(isCycling){this.cycle();}}
_directionToOrder(direction){if(![DIRECTION_RIGHT,DIRECTION_LEFT].includes(direction)){return direction;}
if(isRTL()){return direction===DIRECTION_LEFT?ORDER_PREV:ORDER_NEXT;}
return direction===DIRECTION_LEFT?ORDER_NEXT:ORDER_PREV;}
_orderToDirection(order){if(![ORDER_NEXT,ORDER_PREV].includes(order)){return order;}
if(isRTL()){return order===ORDER_PREV?DIRECTION_LEFT:DIRECTION_RIGHT;}
return order===ORDER_PREV?DIRECTION_RIGHT:DIRECTION_LEFT;}
static carouselInterface(element,config){const data=Carousel.getOrCreateInstance(element,config);let{_config}=data;if(typeof config==='object'){_config={..._config,...config};}
const action=typeof config==='string'?config:_config.slide;if(typeof config==='number'){data.to(config);}else if(typeof action==='string'){if(typeof data[action]==='undefined'){throw new TypeError(`No method named "${action}"`);}
data[action]();}else if(_config.interval&&_config.ride){data.pause();data.cycle();}}
static jQueryInterface(config){return this.each(function(){Carousel.carouselInterface(this,config);});}
static dataApiClickHandler(event){const target=getElementFromSelector(this);if(!target||!target.classList.contains(CLASS_NAME_CAROUSEL)){return;}
const config={...Manipulator__default.default.getDataAttributes(target),...Manipulator__default.default.getDataAttributes(this)};const slideIndex=this.getAttribute('data-bs-slide-to');if(slideIndex){config.interval=false;}
Carousel.carouselInterface(target,config);if(slideIndex){Carousel.getInstance(target).to(slideIndex);}
event.preventDefault();}}
EventHandler__default.default.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_SLIDE,Carousel.dataApiClickHandler);EventHandler__default.default.on(window,EVENT_LOAD_DATA_API,()=>{const carousels=SelectorEngine__default.default.find(SELECTOR_DATA_RIDE);for(let i=0,len=carousels.length;i<len;i++){Carousel.carouselInterface(carousels[i],Carousel.getInstance(carousels[i]));}});defineJQueryPlugin(Carousel);return Carousel;}));}(carousel$1));var carousel=carousel$1.exports;var collapse$1={exports:{}};
/*!
   * Bootstrap collapse.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(data.exports,eventHandler.exports,manipulator.exports,selectorEngine.exports,baseComponent.exports);})(commonjsGlobal,(function(Data,EventHandler,Manipulator,SelectorEngine,BaseComponent){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};const Data__default=_interopDefaultLegacy(Data);const EventHandler__default=_interopDefaultLegacy(EventHandler);const Manipulator__default=_interopDefaultLegacy(Manipulator);const SelectorEngine__default=_interopDefaultLegacy(SelectorEngine);const BaseComponent__default=_interopDefaultLegacy(BaseComponent);const toType=obj=>{if(obj===null||obj===undefined){return`${obj}`;}
return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();};const getSelector=element=>{let selector=element.getAttribute('data-bs-target');if(!selector||selector==='#'){let hrefAttr=element.getAttribute('href');if(!hrefAttr||!hrefAttr.includes('#')&&!hrefAttr.startsWith('.')){return null;}
if(hrefAttr.includes('#')&&!hrefAttr.startsWith('#')){hrefAttr=`#${hrefAttr.split('#')[1]}`;}
selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():null;}
return selector;};const getSelectorFromElement=element=>{const selector=getSelector(element);if(selector){return document.querySelector(selector)?selector:null;}
return null;};const getElementFromSelector=element=>{const selector=getSelector(element);return selector?document.querySelector(selector):null;};const isElement=obj=>{if(!obj||typeof obj!=='object'){return false;}
if(typeof obj.jquery!=='undefined'){obj=obj[0];}
return typeof obj.nodeType!=='undefined';};const getElement=obj=>{if(isElement(obj)){return obj.jquery?obj[0]:obj;}
if(typeof obj==='string'&&obj.length>0){return document.querySelector(obj);}
return null;};const typeCheckConfig=(componentName,config,configTypes)=>{Object.keys(configTypes).forEach(property=>{const expectedTypes=configTypes[property];const value=config[property];const valueType=value&&isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);}});};const reflow=element=>{element.offsetHeight;};const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const NAME='collapse';const DATA_KEY='bs.collapse';const EVENT_KEY=`.${DATA_KEY}`;const DATA_API_KEY='.data-api';const Default={toggle:true,parent:null};const DefaultType={toggle:'boolean',parent:'(null|element)'};const EVENT_SHOW=`show${EVENT_KEY}`;const EVENT_SHOWN=`shown${EVENT_KEY}`;const EVENT_HIDE=`hide${EVENT_KEY}`;const EVENT_HIDDEN=`hidden${EVENT_KEY}`;const EVENT_CLICK_DATA_API=`click${EVENT_KEY}${DATA_API_KEY}`;const CLASS_NAME_SHOW='show';const CLASS_NAME_COLLAPSE='collapse';const CLASS_NAME_COLLAPSING='collapsing';const CLASS_NAME_COLLAPSED='collapsed';const CLASS_NAME_DEEPER_CHILDREN=`:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;const CLASS_NAME_HORIZONTAL='collapse-horizontal';const WIDTH='width';const HEIGHT='height';const SELECTOR_ACTIVES='.collapse.show, .collapse.collapsing';const SELECTOR_DATA_TOGGLE='[data-bs-toggle="collapse"]';class Collapse extends BaseComponent__default.default{constructor(element,config){super(element);this._isTransitioning=false;this._config=this._getConfig(config);this._triggerArray=[];const toggleList=SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE);for(let i=0,len=toggleList.length;i<len;i++){const elem=toggleList[i];const selector=getSelectorFromElement(elem);const filterElement=SelectorEngine__default.default.find(selector).filter(foundElem=>foundElem===this._element);if(selector!==null&&filterElement.length){this._selector=selector;this._triggerArray.push(elem);}}
this._initializeChildren();if(!this._config.parent){this._addAriaAndCollapsedClass(this._triggerArray,this._isShown());}
if(this._config.toggle){this.toggle();}}
static get Default(){return Default;}
static get NAME(){return NAME;}
toggle(){if(this._isShown()){this.hide();}else{this.show();}}
show(){if(this._isTransitioning||this._isShown()){return;}
let actives=[];let activesData;if(this._config.parent){const children=SelectorEngine__default.default.find(CLASS_NAME_DEEPER_CHILDREN,this._config.parent);actives=SelectorEngine__default.default.find(SELECTOR_ACTIVES,this._config.parent).filter(elem=>!children.includes(elem));}
const container=SelectorEngine__default.default.findOne(this._selector);if(actives.length){const tempActiveData=actives.find(elem=>container!==elem);activesData=tempActiveData?Collapse.getInstance(tempActiveData):null;if(activesData&&activesData._isTransitioning){return;}}
const startEvent=EventHandler__default.default.trigger(this._element,EVENT_SHOW);if(startEvent.defaultPrevented){return;}
actives.forEach(elemActive=>{if(container!==elemActive){Collapse.getOrCreateInstance(elemActive,{toggle:false}).hide();}
if(!activesData){Data__default.default.set(elemActive,DATA_KEY,null);}});const dimension=this._getDimension();this._element.classList.remove(CLASS_NAME_COLLAPSE);this._element.classList.add(CLASS_NAME_COLLAPSING);this._element.style[dimension]=0;this._addAriaAndCollapsedClass(this._triggerArray,true);this._isTransitioning=true;const complete=()=>{this._isTransitioning=false;this._element.classList.remove(CLASS_NAME_COLLAPSING);this._element.classList.add(CLASS_NAME_COLLAPSE,CLASS_NAME_SHOW);this._element.style[dimension]='';EventHandler__default.default.trigger(this._element,EVENT_SHOWN);};const capitalizedDimension=dimension[0].toUpperCase()+dimension.slice(1);const scrollSize=`scroll${capitalizedDimension}`;this._queueCallback(complete,this._element,true);this._element.style[dimension]=`${this._element[scrollSize]}px`;}
hide(){if(this._isTransitioning||!this._isShown()){return;}
const startEvent=EventHandler__default.default.trigger(this._element,EVENT_HIDE);if(startEvent.defaultPrevented){return;}
const dimension=this._getDimension();this._element.style[dimension]=`${this._element.getBoundingClientRect()[dimension]}px`;reflow(this._element);this._element.classList.add(CLASS_NAME_COLLAPSING);this._element.classList.remove(CLASS_NAME_COLLAPSE,CLASS_NAME_SHOW);const triggerArrayLength=this._triggerArray.length;for(let i=0;i<triggerArrayLength;i++){const trigger=this._triggerArray[i];const elem=getElementFromSelector(trigger);if(elem&&!this._isShown(elem)){this._addAriaAndCollapsedClass([trigger],false);}}
this._isTransitioning=true;const complete=()=>{this._isTransitioning=false;this._element.classList.remove(CLASS_NAME_COLLAPSING);this._element.classList.add(CLASS_NAME_COLLAPSE);EventHandler__default.default.trigger(this._element,EVENT_HIDDEN);};this._element.style[dimension]='';this._queueCallback(complete,this._element,true);}
_isShown(element=this._element){return element.classList.contains(CLASS_NAME_SHOW);}
_getConfig(config){config={...Default,...Manipulator__default.default.getDataAttributes(this._element),...config};config.toggle=Boolean(config.toggle);config.parent=getElement(config.parent);typeCheckConfig(NAME,config,DefaultType);return config;}
_getDimension(){return this._element.classList.contains(CLASS_NAME_HORIZONTAL)?WIDTH:HEIGHT;}
_initializeChildren(){if(!this._config.parent){return;}
const children=SelectorEngine__default.default.find(CLASS_NAME_DEEPER_CHILDREN,this._config.parent);SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE,this._config.parent).filter(elem=>!children.includes(elem)).forEach(element=>{const selected=getElementFromSelector(element);if(selected){this._addAriaAndCollapsedClass([element],this._isShown(selected));}});}
_addAriaAndCollapsedClass(triggerArray,isOpen){if(!triggerArray.length){return;}
triggerArray.forEach(elem=>{if(isOpen){elem.classList.remove(CLASS_NAME_COLLAPSED);}else{elem.classList.add(CLASS_NAME_COLLAPSED);}
elem.setAttribute('aria-expanded',isOpen);});}
static jQueryInterface(config){return this.each(function(){const _config={};if(typeof config==='string'&&/show|hide/.test(config)){_config.toggle=false;}
const data=Collapse.getOrCreateInstance(this,_config);if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError(`No method named "${config}"`);}
data[config]();}});}}
EventHandler__default.default.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,function(event){if(event.target.tagName==='A'||event.delegateTarget&&event.delegateTarget.tagName==='A'){event.preventDefault();}
const selector=getSelectorFromElement(this);const selectorElements=SelectorEngine__default.default.find(selector);selectorElements.forEach(element=>{Collapse.getOrCreateInstance(element,{toggle:false}).toggle();});});defineJQueryPlugin(Collapse);return Collapse;}));}(collapse$1));var collapse=collapse$1.exports;var dropdown$1={exports:{}};var top='top';var bottom='bottom';var right='right';var left='left';var auto='auto';var basePlacements=[top,bottom,right,left];var start='start';var end='end';var clippingParents='clippingParents';var viewport='viewport';var popper='popper';var reference='reference';var variationPlacements=basePlacements.reduce(function(acc,placement){return acc.concat([placement+"-"+start,placement+"-"+end]);},[]);var placements=[].concat(basePlacements,[auto]).reduce(function(acc,placement){return acc.concat([placement,placement+"-"+start,placement+"-"+end]);},[]);var beforeRead='beforeRead';var read='read';var afterRead='afterRead';var beforeMain='beforeMain';var main='main';var afterMain='afterMain';var beforeWrite='beforeWrite';var write='write';var afterWrite='afterWrite';var modifierPhases=[beforeRead,read,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];function getNodeName(element){return element?(element.nodeName||'').toLowerCase():null;}
function getWindow(node){if(node==null){return window;}
if(node.toString()!=='[object Window]'){var ownerDocument=node.ownerDocument;return ownerDocument?ownerDocument.defaultView||window:window;}
return node;}
function isElement(node){var OwnElement=getWindow(node).Element;return node instanceof OwnElement||node instanceof Element;}
function isHTMLElement(node){var OwnElement=getWindow(node).HTMLElement;return node instanceof OwnElement||node instanceof HTMLElement;}
function isShadowRoot(node){if(typeof ShadowRoot==='undefined'){return false;}
var OwnElement=getWindow(node).ShadowRoot;return node instanceof OwnElement||node instanceof ShadowRoot;}
function applyStyles(_ref){var state=_ref.state;Object.keys(state.elements).forEach(function(name){var style=state.styles[name]||{};var attributes=state.attributes[name]||{};var element=state.elements[name];if(!isHTMLElement(element)||!getNodeName(element)){return;}
Object.assign(element.style,style);Object.keys(attributes).forEach(function(name){var value=attributes[name];if(value===false){element.removeAttribute(name);}else{element.setAttribute(name,value===true?'':value);}});});}
function effect$2(_ref2){var state=_ref2.state;var initialStyles={popper:{position:state.options.strategy,left:'0',top:'0',margin:'0'},arrow:{position:'absolute'},reference:{}};Object.assign(state.elements.popper.style,initialStyles.popper);state.styles=initialStyles;if(state.elements.arrow){Object.assign(state.elements.arrow.style,initialStyles.arrow);}
return function(){Object.keys(state.elements).forEach(function(name){var element=state.elements[name];var attributes=state.attributes[name]||{};var styleProperties=Object.keys(state.styles.hasOwnProperty(name)?state.styles[name]:initialStyles[name]);var style=styleProperties.reduce(function(style,property){style[property]='';return style;},{});if(!isHTMLElement(element)||!getNodeName(element)){return;}
Object.assign(element.style,style);Object.keys(attributes).forEach(function(attribute){element.removeAttribute(attribute);});});};}
var applyStyles$1={name:'applyStyles',enabled:true,phase:'write',fn:applyStyles,effect:effect$2,requires:['computeStyles']};function getBasePlacement(placement){return placement.split('-')[0];}
var max=Math.max;var min=Math.min;var round=Math.round;function getBoundingClientRect(element,includeScale){if(includeScale===void 0){includeScale=false;}
var rect=element.getBoundingClientRect();var scaleX=1;var scaleY=1;if(isHTMLElement(element)&&includeScale){var offsetHeight=element.offsetHeight;var offsetWidth=element.offsetWidth;if(offsetWidth>0){scaleX=round(rect.width)/offsetWidth||1;}
if(offsetHeight>0){scaleY=round(rect.height)/offsetHeight||1;}}
return{width:rect.width/scaleX,height:rect.height/scaleY,top:rect.top/scaleY,right:rect.right/scaleX,bottom:rect.bottom/scaleY,left:rect.left/scaleX,x:rect.left/scaleX,y:rect.top/scaleY};}
function getLayoutRect(element){var clientRect=getBoundingClientRect(element);var width=element.offsetWidth;var height=element.offsetHeight;if(Math.abs(clientRect.width-width)<=1){width=clientRect.width;}
if(Math.abs(clientRect.height-height)<=1){height=clientRect.height;}
return{x:element.offsetLeft,y:element.offsetTop,width:width,height:height};}
function contains(parent,child){var rootNode=child.getRootNode&&child.getRootNode();if(parent.contains(child)){return true;}
else if(rootNode&&isShadowRoot(rootNode)){var next=child;do{if(next&&parent.isSameNode(next)){return true;}
next=next.parentNode||next.host;}while(next);}
return false;}
function getComputedStyle$1(element){return getWindow(element).getComputedStyle(element);}
function isTableElement(element){return['table','td','th'].indexOf(getNodeName(element))>=0;}
function getDocumentElement(element){return((isElement(element)?element.ownerDocument:element.document)||window.document).documentElement;}
function getParentNode(element){if(getNodeName(element)==='html'){return element;}
return(element.assignedSlot||element.parentNode||(isShadowRoot(element)?element.host:null)||getDocumentElement(element));}
function getTrueOffsetParent(element){if(!isHTMLElement(element)||getComputedStyle$1(element).position==='fixed'){return null;}
return element.offsetParent;}
function getContainingBlock(element){var isFirefox=navigator.userAgent.toLowerCase().indexOf('firefox')!==-1;var isIE=navigator.userAgent.indexOf('Trident')!==-1;if(isIE&&isHTMLElement(element)){var elementCss=getComputedStyle$1(element);if(elementCss.position==='fixed'){return null;}}
var currentNode=getParentNode(element);while(isHTMLElement(currentNode)&&['html','body'].indexOf(getNodeName(currentNode))<0){var css=getComputedStyle$1(currentNode);if(css.transform!=='none'||css.perspective!=='none'||css.contain==='paint'||['transform','perspective'].indexOf(css.willChange)!==-1||isFirefox&&css.willChange==='filter'||isFirefox&&css.filter&&css.filter!=='none'){return currentNode;}else{currentNode=currentNode.parentNode;}}
return null;}
function getOffsetParent(element){var window=getWindow(element);var offsetParent=getTrueOffsetParent(element);while(offsetParent&&isTableElement(offsetParent)&&getComputedStyle$1(offsetParent).position==='static'){offsetParent=getTrueOffsetParent(offsetParent);}
if(offsetParent&&(getNodeName(offsetParent)==='html'||getNodeName(offsetParent)==='body'&&getComputedStyle$1(offsetParent).position==='static')){return window;}
return offsetParent||getContainingBlock(element)||window;}
function getMainAxisFromPlacement(placement){return['top','bottom'].indexOf(placement)>=0?'x':'y';}
function within(min$1,value,max$1){return max(min$1,min(value,max$1));}
function withinMaxClamp(min,value,max){var v=within(min,value,max);return v>max?max:v;}
function getFreshSideObject(){return{top:0,right:0,bottom:0,left:0};}
function mergePaddingObject(paddingObject){return Object.assign({},getFreshSideObject(),paddingObject);}
function expandToHashMap(value,keys){return keys.reduce(function(hashMap,key){hashMap[key]=value;return hashMap;},{});}
var toPaddingObject=function toPaddingObject(padding,state){padding=typeof padding==='function'?padding(Object.assign({},state.rects,{placement:state.placement})):padding;return mergePaddingObject(typeof padding!=='number'?padding:expandToHashMap(padding,basePlacements));};function arrow(_ref){var _state$modifiersData$;var state=_ref.state,name=_ref.name,options=_ref.options;var arrowElement=state.elements.arrow;var popperOffsets=state.modifiersData.popperOffsets;var basePlacement=getBasePlacement(state.placement);var axis=getMainAxisFromPlacement(basePlacement);var isVertical=[left,right].indexOf(basePlacement)>=0;var len=isVertical?'height':'width';if(!arrowElement||!popperOffsets){return;}
var paddingObject=toPaddingObject(options.padding,state);var arrowRect=getLayoutRect(arrowElement);var minProp=axis==='y'?top:left;var maxProp=axis==='y'?bottom:right;var endDiff=state.rects.reference[len]+state.rects.reference[axis]-popperOffsets[axis]-state.rects.popper[len];var startDiff=popperOffsets[axis]-state.rects.reference[axis];var arrowOffsetParent=getOffsetParent(arrowElement);var clientSize=arrowOffsetParent?axis==='y'?arrowOffsetParent.clientHeight||0:arrowOffsetParent.clientWidth||0:0;var centerToReference=endDiff/2-startDiff/2;var min=paddingObject[minProp];var max=clientSize-arrowRect[len]-paddingObject[maxProp];var center=clientSize/2-arrowRect[len]/2+centerToReference;var offset=within(min,center,max);var axisProp=axis;state.modifiersData[name]=(_state$modifiersData$={},_state$modifiersData$[axisProp]=offset,_state$modifiersData$.centerOffset=offset-center,_state$modifiersData$);}
function effect$1(_ref2){var state=_ref2.state,options=_ref2.options;var _options$element=options.element,arrowElement=_options$element===void 0?'[data-popper-arrow]':_options$element;if(arrowElement==null){return;}
if(typeof arrowElement==='string'){arrowElement=state.elements.popper.querySelector(arrowElement);if(!arrowElement){return;}}
if(!contains(state.elements.popper,arrowElement)){return;}
state.elements.arrow=arrowElement;}
var arrow$1={name:'arrow',enabled:true,phase:'main',fn:arrow,effect:effect$1,requires:['popperOffsets'],requiresIfExists:['preventOverflow']};function getVariation(placement){return placement.split('-')[1];}
var unsetSides={top:'auto',right:'auto',bottom:'auto',left:'auto'};function roundOffsetsByDPR(_ref){var x=_ref.x,y=_ref.y;var win=window;var dpr=win.devicePixelRatio||1;return{x:round(x*dpr)/dpr||0,y:round(y*dpr)/dpr||0};}
function mapToStyles(_ref2){var _Object$assign2;var popper=_ref2.popper,popperRect=_ref2.popperRect,placement=_ref2.placement,variation=_ref2.variation,offsets=_ref2.offsets,position=_ref2.position,gpuAcceleration=_ref2.gpuAcceleration,adaptive=_ref2.adaptive,roundOffsets=_ref2.roundOffsets,isFixed=_ref2.isFixed;var _ref3=roundOffsets===true?roundOffsetsByDPR(offsets):typeof roundOffsets==='function'?roundOffsets(offsets):offsets,_ref3$x=_ref3.x,x=_ref3$x===void 0?0:_ref3$x,_ref3$y=_ref3.y,y=_ref3$y===void 0?0:_ref3$y;var hasX=offsets.hasOwnProperty('x');var hasY=offsets.hasOwnProperty('y');var sideX=left;var sideY=top;var win=window;if(adaptive){var offsetParent=getOffsetParent(popper);var heightProp='clientHeight';var widthProp='clientWidth';if(offsetParent===getWindow(popper)){offsetParent=getDocumentElement(popper);if(getComputedStyle$1(offsetParent).position!=='static'&&position==='absolute'){heightProp='scrollHeight';widthProp='scrollWidth';}}
offsetParent=offsetParent;if(placement===top||(placement===left||placement===right)&&variation===end){sideY=bottom;var offsetY=isFixed&&win.visualViewport?win.visualViewport.height:offsetParent[heightProp];y-=offsetY-popperRect.height;y*=gpuAcceleration?1:-1;}
if(placement===left||(placement===top||placement===bottom)&&variation===end){sideX=right;var offsetX=isFixed&&win.visualViewport?win.visualViewport.width:offsetParent[widthProp];x-=offsetX-popperRect.width;x*=gpuAcceleration?1:-1;}}
var commonStyles=Object.assign({position:position},adaptive&&unsetSides);if(gpuAcceleration){var _Object$assign;return Object.assign({},commonStyles,(_Object$assign={},_Object$assign[sideY]=hasY?'0':'',_Object$assign[sideX]=hasX?'0':'',_Object$assign.transform=(win.devicePixelRatio||1)<=1?"translate("+x+"px, "+y+"px)":"translate3d("+x+"px, "+y+"px, 0)",_Object$assign));}
return Object.assign({},commonStyles,(_Object$assign2={},_Object$assign2[sideY]=hasY?y+"px":'',_Object$assign2[sideX]=hasX?x+"px":'',_Object$assign2.transform='',_Object$assign2));}
function computeStyles(_ref4){var state=_ref4.state,options=_ref4.options;var _options$gpuAccelerat=options.gpuAcceleration,gpuAcceleration=_options$gpuAccelerat===void 0?true:_options$gpuAccelerat,_options$adaptive=options.adaptive,adaptive=_options$adaptive===void 0?true:_options$adaptive,_options$roundOffsets=options.roundOffsets,roundOffsets=_options$roundOffsets===void 0?true:_options$roundOffsets;var commonStyles={placement:getBasePlacement(state.placement),variation:getVariation(state.placement),popper:state.elements.popper,popperRect:state.rects.popper,gpuAcceleration:gpuAcceleration,isFixed:state.options.strategy==='fixed'};if(state.modifiersData.popperOffsets!=null){state.styles.popper=Object.assign({},state.styles.popper,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.popperOffsets,position:state.options.strategy,adaptive:adaptive,roundOffsets:roundOffsets})));}
if(state.modifiersData.arrow!=null){state.styles.arrow=Object.assign({},state.styles.arrow,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.arrow,position:'absolute',adaptive:false,roundOffsets:roundOffsets})));}
state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-placement':state.placement});}
var computeStyles$1={name:'computeStyles',enabled:true,phase:'beforeWrite',fn:computeStyles,data:{}};var passive={passive:true};function effect(_ref){var state=_ref.state,instance=_ref.instance,options=_ref.options;var _options$scroll=options.scroll,scroll=_options$scroll===void 0?true:_options$scroll,_options$resize=options.resize,resize=_options$resize===void 0?true:_options$resize;var window=getWindow(state.elements.popper);var scrollParents=[].concat(state.scrollParents.reference,state.scrollParents.popper);if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.addEventListener('scroll',instance.update,passive);});}
if(resize){window.addEventListener('resize',instance.update,passive);}
return function(){if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.removeEventListener('scroll',instance.update,passive);});}
if(resize){window.removeEventListener('resize',instance.update,passive);}};}
var eventListeners={name:'eventListeners',enabled:true,phase:'write',fn:function fn(){},effect:effect,data:{}};var hash$1={left:'right',right:'left',bottom:'top',top:'bottom'};function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,function(matched){return hash$1[matched];});}
var hash={start:'end',end:'start'};function getOppositeVariationPlacement(placement){return placement.replace(/start|end/g,function(matched){return hash[matched];});}
function getWindowScroll(node){var win=getWindow(node);var scrollLeft=win.pageXOffset;var scrollTop=win.pageYOffset;return{scrollLeft:scrollLeft,scrollTop:scrollTop};}
function getWindowScrollBarX(element){return getBoundingClientRect(getDocumentElement(element)).left+getWindowScroll(element).scrollLeft;}
function getViewportRect(element){var win=getWindow(element);var html=getDocumentElement(element);var visualViewport=win.visualViewport;var width=html.clientWidth;var height=html.clientHeight;var x=0;var y=0;if(visualViewport){width=visualViewport.width;height=visualViewport.height;if(!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){x=visualViewport.offsetLeft;y=visualViewport.offsetTop;}}
return{width:width,height:height,x:x+getWindowScrollBarX(element),y:y};}
function getDocumentRect(element){var _element$ownerDocumen;var html=getDocumentElement(element);var winScroll=getWindowScroll(element);var body=(_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body;var width=max(html.scrollWidth,html.clientWidth,body?body.scrollWidth:0,body?body.clientWidth:0);var height=max(html.scrollHeight,html.clientHeight,body?body.scrollHeight:0,body?body.clientHeight:0);var x=-winScroll.scrollLeft+getWindowScrollBarX(element);var y=-winScroll.scrollTop;if(getComputedStyle$1(body||html).direction==='rtl'){x+=max(html.clientWidth,body?body.clientWidth:0)-width;}
return{width:width,height:height,x:x,y:y};}
function isScrollParent(element){var _getComputedStyle=getComputedStyle$1(element),overflow=_getComputedStyle.overflow,overflowX=_getComputedStyle.overflowX,overflowY=_getComputedStyle.overflowY;return/auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX);}
function getScrollParent(node){if(['html','body','#document'].indexOf(getNodeName(node))>=0){return node.ownerDocument.body;}
if(isHTMLElement(node)&&isScrollParent(node)){return node;}
return getScrollParent(getParentNode(node));}
function listScrollParents(element,list){var _element$ownerDocumen;if(list===void 0){list=[];}
var scrollParent=getScrollParent(element);var isBody=scrollParent===((_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body);var win=getWindow(scrollParent);var target=isBody?[win].concat(win.visualViewport||[],isScrollParent(scrollParent)?scrollParent:[]):scrollParent;var updatedList=list.concat(target);return isBody?updatedList:updatedList.concat(listScrollParents(getParentNode(target)));}
function rectToClientRect(rect){return Object.assign({},rect,{left:rect.x,top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height});}
function getInnerBoundingClientRect(element){var rect=getBoundingClientRect(element);rect.top=rect.top+element.clientTop;rect.left=rect.left+element.clientLeft;rect.bottom=rect.top+element.clientHeight;rect.right=rect.left+element.clientWidth;rect.width=element.clientWidth;rect.height=element.clientHeight;rect.x=rect.left;rect.y=rect.top;return rect;}
function getClientRectFromMixedType(element,clippingParent){return clippingParent===viewport?rectToClientRect(getViewportRect(element)):isElement(clippingParent)?getInnerBoundingClientRect(clippingParent):rectToClientRect(getDocumentRect(getDocumentElement(element)));}
function getClippingParents(element){var clippingParents=listScrollParents(getParentNode(element));var canEscapeClipping=['absolute','fixed'].indexOf(getComputedStyle$1(element).position)>=0;var clipperElement=canEscapeClipping&&isHTMLElement(element)?getOffsetParent(element):element;if(!isElement(clipperElement)){return[];}
return clippingParents.filter(function(clippingParent){return isElement(clippingParent)&&contains(clippingParent,clipperElement)&&getNodeName(clippingParent)!=='body'&&(canEscapeClipping?getComputedStyle$1(clippingParent).position!=='static':true);});}
function getClippingRect(element,boundary,rootBoundary){var mainClippingParents=boundary==='clippingParents'?getClippingParents(element):[].concat(boundary);var clippingParents=[].concat(mainClippingParents,[rootBoundary]);var firstClippingParent=clippingParents[0];var clippingRect=clippingParents.reduce(function(accRect,clippingParent){var rect=getClientRectFromMixedType(element,clippingParent);accRect.top=max(rect.top,accRect.top);accRect.right=min(rect.right,accRect.right);accRect.bottom=min(rect.bottom,accRect.bottom);accRect.left=max(rect.left,accRect.left);return accRect;},getClientRectFromMixedType(element,firstClippingParent));clippingRect.width=clippingRect.right-clippingRect.left;clippingRect.height=clippingRect.bottom-clippingRect.top;clippingRect.x=clippingRect.left;clippingRect.y=clippingRect.top;return clippingRect;}
function computeOffsets(_ref){var reference=_ref.reference,element=_ref.element,placement=_ref.placement;var basePlacement=placement?getBasePlacement(placement):null;var variation=placement?getVariation(placement):null;var commonX=reference.x+reference.width/2-element.width/2;var commonY=reference.y+reference.height/2-element.height/2;var offsets;switch(basePlacement){case top:offsets={x:commonX,y:reference.y-element.height};break;case bottom:offsets={x:commonX,y:reference.y+reference.height};break;case right:offsets={x:reference.x+reference.width,y:commonY};break;case left:offsets={x:reference.x-element.width,y:commonY};break;default:offsets={x:reference.x,y:reference.y};}
var mainAxis=basePlacement?getMainAxisFromPlacement(basePlacement):null;if(mainAxis!=null){var len=mainAxis==='y'?'height':'width';switch(variation){case start:offsets[mainAxis]=offsets[mainAxis]-(reference[len]/2-element[len]/2);break;case end:offsets[mainAxis]=offsets[mainAxis]+(reference[len]/2-element[len]/2);break;}}
return offsets;}
function detectOverflow(state,options){if(options===void 0){options={};}
var _options=options,_options$placement=_options.placement,placement=_options$placement===void 0?state.placement:_options$placement,_options$boundary=_options.boundary,boundary=_options$boundary===void 0?clippingParents:_options$boundary,_options$rootBoundary=_options.rootBoundary,rootBoundary=_options$rootBoundary===void 0?viewport:_options$rootBoundary,_options$elementConte=_options.elementContext,elementContext=_options$elementConte===void 0?popper:_options$elementConte,_options$altBoundary=_options.altBoundary,altBoundary=_options$altBoundary===void 0?false:_options$altBoundary,_options$padding=_options.padding,padding=_options$padding===void 0?0:_options$padding;var paddingObject=mergePaddingObject(typeof padding!=='number'?padding:expandToHashMap(padding,basePlacements));var altContext=elementContext===popper?reference:popper;var popperRect=state.rects.popper;var element=state.elements[altBoundary?altContext:elementContext];var clippingClientRect=getClippingRect(isElement(element)?element:element.contextElement||getDocumentElement(state.elements.popper),boundary,rootBoundary);var referenceClientRect=getBoundingClientRect(state.elements.reference);var popperOffsets=computeOffsets({reference:referenceClientRect,element:popperRect,strategy:'absolute',placement:placement});var popperClientRect=rectToClientRect(Object.assign({},popperRect,popperOffsets));var elementClientRect=elementContext===popper?popperClientRect:referenceClientRect;var overflowOffsets={top:clippingClientRect.top-elementClientRect.top+paddingObject.top,bottom:elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom,left:clippingClientRect.left-elementClientRect.left+paddingObject.left,right:elementClientRect.right-clippingClientRect.right+paddingObject.right};var offsetData=state.modifiersData.offset;if(elementContext===popper&&offsetData){var offset=offsetData[placement];Object.keys(overflowOffsets).forEach(function(key){var multiply=[right,bottom].indexOf(key)>=0?1:-1;var axis=[top,bottom].indexOf(key)>=0?'y':'x';overflowOffsets[key]+=offset[axis]*multiply;});}
return overflowOffsets;}
function computeAutoPlacement(state,options){if(options===void 0){options={};}
var _options=options,placement=_options.placement,boundary=_options.boundary,rootBoundary=_options.rootBoundary,padding=_options.padding,flipVariations=_options.flipVariations,_options$allowedAutoP=_options.allowedAutoPlacements,allowedAutoPlacements=_options$allowedAutoP===void 0?placements:_options$allowedAutoP;var variation=getVariation(placement);var placements$1=variation?flipVariations?variationPlacements:variationPlacements.filter(function(placement){return getVariation(placement)===variation;}):basePlacements;var allowedPlacements=placements$1.filter(function(placement){return allowedAutoPlacements.indexOf(placement)>=0;});if(allowedPlacements.length===0){allowedPlacements=placements$1;}
var overflows=allowedPlacements.reduce(function(acc,placement){acc[placement]=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding})[getBasePlacement(placement)];return acc;},{});return Object.keys(overflows).sort(function(a,b){return overflows[a]-overflows[b];});}
function getExpandedFallbackPlacements(placement){if(getBasePlacement(placement)===auto){return[];}
var oppositePlacement=getOppositePlacement(placement);return[getOppositeVariationPlacement(placement),oppositePlacement,getOppositeVariationPlacement(oppositePlacement)];}
function flip(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;if(state.modifiersData[name]._skip){return;}
var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?true:_options$altAxis,specifiedFallbackPlacements=options.fallbackPlacements,padding=options.padding,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,_options$flipVariatio=options.flipVariations,flipVariations=_options$flipVariatio===void 0?true:_options$flipVariatio,allowedAutoPlacements=options.allowedAutoPlacements;var preferredPlacement=state.options.placement;var basePlacement=getBasePlacement(preferredPlacement);var isBasePlacement=basePlacement===preferredPlacement;var fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipVariations?[getOppositePlacement(preferredPlacement)]:getExpandedFallbackPlacements(preferredPlacement));var placements=[preferredPlacement].concat(fallbackPlacements).reduce(function(acc,placement){return acc.concat(getBasePlacement(placement)===auto?computeAutoPlacement(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding,flipVariations:flipVariations,allowedAutoPlacements:allowedAutoPlacements}):placement);},[]);var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var checksMap=new Map();var makeFallbackChecks=true;var firstFittingPlacement=placements[0];for(var i=0;i<placements.length;i++){var placement=placements[i];var _basePlacement=getBasePlacement(placement);var isStartVariation=getVariation(placement)===start;var isVertical=[top,bottom].indexOf(_basePlacement)>=0;var len=isVertical?'width':'height';var overflow=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,altBoundary:altBoundary,padding:padding});var mainVariationSide=isVertical?isStartVariation?right:left:isStartVariation?bottom:top;if(referenceRect[len]>popperRect[len]){mainVariationSide=getOppositePlacement(mainVariationSide);}
var altVariationSide=getOppositePlacement(mainVariationSide);var checks=[];if(checkMainAxis){checks.push(overflow[_basePlacement]<=0);}
if(checkAltAxis){checks.push(overflow[mainVariationSide]<=0,overflow[altVariationSide]<=0);}
if(checks.every(function(check){return check;})){firstFittingPlacement=placement;makeFallbackChecks=false;break;}
checksMap.set(placement,checks);}
if(makeFallbackChecks){var numberOfChecks=flipVariations?3:1;var _loop=function _loop(_i){var fittingPlacement=placements.find(function(placement){var checks=checksMap.get(placement);if(checks){return checks.slice(0,_i).every(function(check){return check;});}});if(fittingPlacement){firstFittingPlacement=fittingPlacement;return"break";}};for(var _i=numberOfChecks;_i>0;_i--){var _ret=_loop(_i);if(_ret==="break")break;}}
if(state.placement!==firstFittingPlacement){state.modifiersData[name]._skip=true;state.placement=firstFittingPlacement;state.reset=true;}}
var flip$1={name:'flip',enabled:true,phase:'main',fn:flip,requiresIfExists:['offset'],data:{_skip:false}};function getSideOffsets(overflow,rect,preventedOffsets){if(preventedOffsets===void 0){preventedOffsets={x:0,y:0};}
return{top:overflow.top-rect.height-preventedOffsets.y,right:overflow.right-rect.width+preventedOffsets.x,bottom:overflow.bottom-rect.height+preventedOffsets.y,left:overflow.left-rect.width-preventedOffsets.x};}
function isAnySideFullyClipped(overflow){return[top,right,bottom,left].some(function(side){return overflow[side]>=0;});}
function hide(_ref){var state=_ref.state,name=_ref.name;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var preventedOffsets=state.modifiersData.preventOverflow;var referenceOverflow=detectOverflow(state,{elementContext:'reference'});var popperAltOverflow=detectOverflow(state,{altBoundary:true});var referenceClippingOffsets=getSideOffsets(referenceOverflow,referenceRect);var popperEscapeOffsets=getSideOffsets(popperAltOverflow,popperRect,preventedOffsets);var isReferenceHidden=isAnySideFullyClipped(referenceClippingOffsets);var hasPopperEscaped=isAnySideFullyClipped(popperEscapeOffsets);state.modifiersData[name]={referenceClippingOffsets:referenceClippingOffsets,popperEscapeOffsets:popperEscapeOffsets,isReferenceHidden:isReferenceHidden,hasPopperEscaped:hasPopperEscaped};state.attributes.popper=Object.assign({},state.attributes.popper,{'data-popper-reference-hidden':isReferenceHidden,'data-popper-escaped':hasPopperEscaped});}
var hide$1={name:'hide',enabled:true,phase:'main',requiresIfExists:['preventOverflow'],fn:hide};function distanceAndSkiddingToXY(placement,rects,offset){var basePlacement=getBasePlacement(placement);var invertDistance=[left,top].indexOf(basePlacement)>=0?-1:1;var _ref=typeof offset==='function'?offset(Object.assign({},rects,{placement:placement})):offset,skidding=_ref[0],distance=_ref[1];skidding=skidding||0;distance=(distance||0)*invertDistance;return[left,right].indexOf(basePlacement)>=0?{x:distance,y:skidding}:{x:skidding,y:distance};}
function offset(_ref2){var state=_ref2.state,options=_ref2.options,name=_ref2.name;var _options$offset=options.offset,offset=_options$offset===void 0?[0,0]:_options$offset;var data=placements.reduce(function(acc,placement){acc[placement]=distanceAndSkiddingToXY(placement,state.rects,offset);return acc;},{});var _data$state$placement=data[state.placement],x=_data$state$placement.x,y=_data$state$placement.y;if(state.modifiersData.popperOffsets!=null){state.modifiersData.popperOffsets.x+=x;state.modifiersData.popperOffsets.y+=y;}
state.modifiersData[name]=data;}
var offset$1={name:'offset',enabled:true,phase:'main',requires:['popperOffsets'],fn:offset};function popperOffsets(_ref){var state=_ref.state,name=_ref.name;state.modifiersData[name]=computeOffsets({reference:state.rects.reference,element:state.rects.popper,strategy:'absolute',placement:state.placement});}
var popperOffsets$1={name:'popperOffsets',enabled:true,phase:'read',fn:popperOffsets,data:{}};function getAltAxis(axis){return axis==='x'?'y':'x';}
function preventOverflow(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?false:_options$altAxis,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,padding=options.padding,_options$tether=options.tether,tether=_options$tether===void 0?true:_options$tether,_options$tetherOffset=options.tetherOffset,tetherOffset=_options$tetherOffset===void 0?0:_options$tetherOffset;var overflow=detectOverflow(state,{boundary:boundary,rootBoundary:rootBoundary,padding:padding,altBoundary:altBoundary});var basePlacement=getBasePlacement(state.placement);var variation=getVariation(state.placement);var isBasePlacement=!variation;var mainAxis=getMainAxisFromPlacement(basePlacement);var altAxis=getAltAxis(mainAxis);var popperOffsets=state.modifiersData.popperOffsets;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var tetherOffsetValue=typeof tetherOffset==='function'?tetherOffset(Object.assign({},state.rects,{placement:state.placement})):tetherOffset;var normalizedTetherOffsetValue=typeof tetherOffsetValue==='number'?{mainAxis:tetherOffsetValue,altAxis:tetherOffsetValue}:Object.assign({mainAxis:0,altAxis:0},tetherOffsetValue);var offsetModifierState=state.modifiersData.offset?state.modifiersData.offset[state.placement]:null;var data={x:0,y:0};if(!popperOffsets){return;}
if(checkMainAxis){var _offsetModifierState$;var mainSide=mainAxis==='y'?top:left;var altSide=mainAxis==='y'?bottom:right;var len=mainAxis==='y'?'height':'width';var offset=popperOffsets[mainAxis];var min$1=offset+overflow[mainSide];var max$1=offset-overflow[altSide];var additive=tether?-popperRect[len]/2:0;var minLen=variation===start?referenceRect[len]:popperRect[len];var maxLen=variation===start?-popperRect[len]:-referenceRect[len];var arrowElement=state.elements.arrow;var arrowRect=tether&&arrowElement?getLayoutRect(arrowElement):{width:0,height:0};var arrowPaddingObject=state.modifiersData['arrow#persistent']?state.modifiersData['arrow#persistent'].padding:getFreshSideObject();var arrowPaddingMin=arrowPaddingObject[mainSide];var arrowPaddingMax=arrowPaddingObject[altSide];var arrowLen=within(0,referenceRect[len],arrowRect[len]);var minOffset=isBasePlacement?referenceRect[len]/2-additive-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis:minLen-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis;var maxOffset=isBasePlacement?-referenceRect[len]/2+additive+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis:maxLen+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis;var arrowOffsetParent=state.elements.arrow&&getOffsetParent(state.elements.arrow);var clientOffset=arrowOffsetParent?mainAxis==='y'?arrowOffsetParent.clientTop||0:arrowOffsetParent.clientLeft||0:0;var offsetModifierValue=(_offsetModifierState$=offsetModifierState==null?void 0:offsetModifierState[mainAxis])!=null?_offsetModifierState$:0;var tetherMin=offset+minOffset-offsetModifierValue-clientOffset;var tetherMax=offset+maxOffset-offsetModifierValue;var preventedOffset=within(tether?min(min$1,tetherMin):min$1,offset,tether?max(max$1,tetherMax):max$1);popperOffsets[mainAxis]=preventedOffset;data[mainAxis]=preventedOffset-offset;}
if(checkAltAxis){var _offsetModifierState$2;var _mainSide=mainAxis==='x'?top:left;var _altSide=mainAxis==='x'?bottom:right;var _offset=popperOffsets[altAxis];var _len=altAxis==='y'?'height':'width';var _min=_offset+overflow[_mainSide];var _max=_offset-overflow[_altSide];var isOriginSide=[top,left].indexOf(basePlacement)!==-1;var _offsetModifierValue=(_offsetModifierState$2=offsetModifierState==null?void 0:offsetModifierState[altAxis])!=null?_offsetModifierState$2:0;var _tetherMin=isOriginSide?_min:_offset-referenceRect[_len]-popperRect[_len]-_offsetModifierValue+normalizedTetherOffsetValue.altAxis;var _tetherMax=isOriginSide?_offset+referenceRect[_len]+popperRect[_len]-_offsetModifierValue-normalizedTetherOffsetValue.altAxis:_max;var _preventedOffset=tether&&isOriginSide?withinMaxClamp(_tetherMin,_offset,_tetherMax):within(tether?_tetherMin:_min,_offset,tether?_tetherMax:_max);popperOffsets[altAxis]=_preventedOffset;data[altAxis]=_preventedOffset-_offset;}
state.modifiersData[name]=data;}
var preventOverflow$1={name:'preventOverflow',enabled:true,phase:'main',fn:preventOverflow,requiresIfExists:['offset']};function getHTMLElementScroll(element){return{scrollLeft:element.scrollLeft,scrollTop:element.scrollTop};}
function getNodeScroll(node){if(node===getWindow(node)||!isHTMLElement(node)){return getWindowScroll(node);}else{return getHTMLElementScroll(node);}}
function isElementScaled(element){var rect=element.getBoundingClientRect();var scaleX=round(rect.width)/element.offsetWidth||1;var scaleY=round(rect.height)/element.offsetHeight||1;return scaleX!==1||scaleY!==1;}
function getCompositeRect(elementOrVirtualElement,offsetParent,isFixed){if(isFixed===void 0){isFixed=false;}
var isOffsetParentAnElement=isHTMLElement(offsetParent);var offsetParentIsScaled=isHTMLElement(offsetParent)&&isElementScaled(offsetParent);var documentElement=getDocumentElement(offsetParent);var rect=getBoundingClientRect(elementOrVirtualElement,offsetParentIsScaled);var scroll={scrollLeft:0,scrollTop:0};var offsets={x:0,y:0};if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed){if(getNodeName(offsetParent)!=='body'||isScrollParent(documentElement)){scroll=getNodeScroll(offsetParent);}
if(isHTMLElement(offsetParent)){offsets=getBoundingClientRect(offsetParent,true);offsets.x+=offsetParent.clientLeft;offsets.y+=offsetParent.clientTop;}else if(documentElement){offsets.x=getWindowScrollBarX(documentElement);}}
return{x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height};}
function order(modifiers){var map=new Map();var visited=new Set();var result=[];modifiers.forEach(function(modifier){map.set(modifier.name,modifier);});function sort(modifier){visited.add(modifier.name);var requires=[].concat(modifier.requires||[],modifier.requiresIfExists||[]);requires.forEach(function(dep){if(!visited.has(dep)){var depModifier=map.get(dep);if(depModifier){sort(depModifier);}}});result.push(modifier);}
modifiers.forEach(function(modifier){if(!visited.has(modifier.name)){sort(modifier);}});return result;}
function orderModifiers(modifiers){var orderedModifiers=order(modifiers);return modifierPhases.reduce(function(acc,phase){return acc.concat(orderedModifiers.filter(function(modifier){return modifier.phase===phase;}));},[]);}
function debounce(fn){var pending;return function(){if(!pending){pending=new Promise(function(resolve){Promise.resolve().then(function(){pending=undefined;resolve(fn());});});}
return pending;};}
function mergeByName(modifiers){var merged=modifiers.reduce(function(merged,current){var existing=merged[current.name];merged[current.name]=existing?Object.assign({},existing,current,{options:Object.assign({},existing.options,current.options),data:Object.assign({},existing.data,current.data)}):current;return merged;},{});return Object.keys(merged).map(function(key){return merged[key];});}
var DEFAULT_OPTIONS={placement:'bottom',modifiers:[],strategy:'absolute'};function areValidElements(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
return!args.some(function(element){return!(element&&typeof element.getBoundingClientRect==='function');});}
function popperGenerator(generatorOptions){if(generatorOptions===void 0){generatorOptions={};}
var _generatorOptions=generatorOptions,_generatorOptions$def=_generatorOptions.defaultModifiers,defaultModifiers=_generatorOptions$def===void 0?[]:_generatorOptions$def,_generatorOptions$def2=_generatorOptions.defaultOptions,defaultOptions=_generatorOptions$def2===void 0?DEFAULT_OPTIONS:_generatorOptions$def2;return function createPopper(reference,popper,options){if(options===void 0){options=defaultOptions;}
var state={placement:'bottom',orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,defaultOptions),modifiersData:{},elements:{reference:reference,popper:popper},attributes:{},styles:{}};var effectCleanupFns=[];var isDestroyed=false;var instance={state:state,setOptions:function setOptions(setOptionsAction){var options=typeof setOptionsAction==='function'?setOptionsAction(state.options):setOptionsAction;cleanupModifierEffects();state.options=Object.assign({},defaultOptions,state.options,options);state.scrollParents={reference:isElement(reference)?listScrollParents(reference):reference.contextElement?listScrollParents(reference.contextElement):[],popper:listScrollParents(popper)};var orderedModifiers=orderModifiers(mergeByName([].concat(defaultModifiers,state.options.modifiers)));state.orderedModifiers=orderedModifiers.filter(function(m){return m.enabled;});runModifierEffects();return instance.update();},forceUpdate:function forceUpdate(){if(isDestroyed){return;}
var _state$elements=state.elements,reference=_state$elements.reference,popper=_state$elements.popper;if(!areValidElements(reference,popper)){return;}
state.rects={reference:getCompositeRect(reference,getOffsetParent(popper),state.options.strategy==='fixed'),popper:getLayoutRect(popper)};state.reset=false;state.placement=state.options.placement;state.orderedModifiers.forEach(function(modifier){return state.modifiersData[modifier.name]=Object.assign({},modifier.data);});for(var index=0;index<state.orderedModifiers.length;index++){if(state.reset===true){state.reset=false;index=-1;continue;}
var _state$orderedModifie=state.orderedModifiers[index],fn=_state$orderedModifie.fn,_state$orderedModifie2=_state$orderedModifie.options,_options=_state$orderedModifie2===void 0?{}:_state$orderedModifie2,name=_state$orderedModifie.name;if(typeof fn==='function'){state=fn({state:state,options:_options,name:name,instance:instance})||state;}}},update:debounce(function(){return new Promise(function(resolve){instance.forceUpdate();resolve(state);});}),destroy:function destroy(){cleanupModifierEffects();isDestroyed=true;}};if(!areValidElements(reference,popper)){return instance;}
instance.setOptions(options).then(function(state){if(!isDestroyed&&options.onFirstUpdate){options.onFirstUpdate(state);}});function runModifierEffects(){state.orderedModifiers.forEach(function(_ref3){var name=_ref3.name,_ref3$options=_ref3.options,options=_ref3$options===void 0?{}:_ref3$options,effect=_ref3.effect;if(typeof effect==='function'){var cleanupFn=effect({state:state,name:name,instance:instance,options:options});var noopFn=function noopFn(){};effectCleanupFns.push(cleanupFn||noopFn);}});}
function cleanupModifierEffects(){effectCleanupFns.forEach(function(fn){return fn();});effectCleanupFns=[];}
return instance;};}
var createPopper$2=popperGenerator();var defaultModifiers$1=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1];var createPopper$1=popperGenerator({defaultModifiers:defaultModifiers$1});var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1,offset$1,flip$1,preventOverflow$1,arrow$1,hide$1];var createPopper=popperGenerator({defaultModifiers:defaultModifiers});var lib=Object.freeze({__proto__:null,popperGenerator:popperGenerator,detectOverflow:detectOverflow,createPopperBase:createPopper$2,createPopper:createPopper,createPopperLite:createPopper$1,top:top,bottom:bottom,right:right,left:left,auto:auto,basePlacements:basePlacements,start:start,end:end,clippingParents:clippingParents,viewport:viewport,popper:popper,reference:reference,variationPlacements:variationPlacements,placements:placements,beforeRead:beforeRead,read:read,afterRead:afterRead,beforeMain:beforeMain,main:main,afterMain:afterMain,beforeWrite:beforeWrite,write:write,afterWrite:afterWrite,modifierPhases:modifierPhases,applyStyles:applyStyles$1,arrow:arrow$1,computeStyles:computeStyles$1,eventListeners:eventListeners,flip:flip$1,hide:hide$1,offset:offset$1,popperOffsets:popperOffsets$1,preventOverflow:preventOverflow$1});var require$$0=getAugmentedNamespace(lib);
/*!
   * Bootstrap dropdown.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(require$$0,eventHandler.exports,manipulator.exports,selectorEngine.exports,baseComponent.exports);})(commonjsGlobal,(function(Popper,EventHandler,Manipulator,SelectorEngine,BaseComponent){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};function _interopNamespace(e){if(e&&e.__esModule)return e;const n=Object.create(null);if(e){for(const k in e){if(k!=='default'){const d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:()=>e[k]});}}}
n.default=e;return Object.freeze(n);}
const Popper__namespace=_interopNamespace(Popper);const EventHandler__default=_interopDefaultLegacy(EventHandler);const Manipulator__default=_interopDefaultLegacy(Manipulator);const SelectorEngine__default=_interopDefaultLegacy(SelectorEngine);const BaseComponent__default=_interopDefaultLegacy(BaseComponent);const toType=obj=>{if(obj===null||obj===undefined){return`${obj}`;}
return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();};const getSelector=element=>{let selector=element.getAttribute('data-bs-target');if(!selector||selector==='#'){let hrefAttr=element.getAttribute('href');if(!hrefAttr||!hrefAttr.includes('#')&&!hrefAttr.startsWith('.')){return null;}
if(hrefAttr.includes('#')&&!hrefAttr.startsWith('#')){hrefAttr=`#${hrefAttr.split('#')[1]}`;}
selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():null;}
return selector;};const getElementFromSelector=element=>{const selector=getSelector(element);return selector?document.querySelector(selector):null;};const isElement=obj=>{if(!obj||typeof obj!=='object'){return false;}
if(typeof obj.jquery!=='undefined'){obj=obj[0];}
return typeof obj.nodeType!=='undefined';};const getElement=obj=>{if(isElement(obj)){return obj.jquery?obj[0]:obj;}
if(typeof obj==='string'&&obj.length>0){return document.querySelector(obj);}
return null;};const typeCheckConfig=(componentName,config,configTypes)=>{Object.keys(configTypes).forEach(property=>{const expectedTypes=configTypes[property];const value=config[property];const valueType=value&&isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);}});};const isVisible=element=>{if(!isElement(element)||element.getClientRects().length===0){return false;}
return getComputedStyle(element).getPropertyValue('visibility')==='visible';};const isDisabled=element=>{if(!element||element.nodeType!==Node.ELEMENT_NODE){return true;}
if(element.classList.contains('disabled')){return true;}
if(typeof element.disabled!=='undefined'){return element.disabled;}
return element.hasAttribute('disabled')&&element.getAttribute('disabled')!=='false';};const noop=()=>{};const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const isRTL=()=>document.documentElement.dir==='rtl';const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const getNextActiveElement=(list,activeElement,shouldGetNext,isCycleAllowed)=>{let index=list.indexOf(activeElement);if(index===-1){return list[!shouldGetNext&&isCycleAllowed?list.length-1:0];}
const listLength=list.length;index+=shouldGetNext?1:-1;if(isCycleAllowed){index=(index+listLength)%listLength;}
return list[Math.max(0,Math.min(index,listLength-1))];};const NAME='dropdown';const DATA_KEY='bs.dropdown';const EVENT_KEY=`.${DATA_KEY}`;const DATA_API_KEY='.data-api';const ESCAPE_KEY='Escape';const SPACE_KEY='Space';const TAB_KEY='Tab';const ARROW_UP_KEY='ArrowUp';const ARROW_DOWN_KEY='ArrowDown';const RIGHT_MOUSE_BUTTON=2;const REGEXP_KEYDOWN=new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY}`);const EVENT_HIDE=`hide${EVENT_KEY}`;const EVENT_HIDDEN=`hidden${EVENT_KEY}`;const EVENT_SHOW=`show${EVENT_KEY}`;const EVENT_SHOWN=`shown${EVENT_KEY}`;const EVENT_CLICK_DATA_API=`click${EVENT_KEY}${DATA_API_KEY}`;const EVENT_KEYDOWN_DATA_API=`keydown${EVENT_KEY}${DATA_API_KEY}`;const EVENT_KEYUP_DATA_API=`keyup${EVENT_KEY}${DATA_API_KEY}`;const CLASS_NAME_SHOW='show';const CLASS_NAME_DROPUP='dropup';const CLASS_NAME_DROPEND='dropend';const CLASS_NAME_DROPSTART='dropstart';const CLASS_NAME_NAVBAR='navbar';const SELECTOR_DATA_TOGGLE='[data-bs-toggle="dropdown"]';const SELECTOR_MENU='.dropdown-menu';const SELECTOR_NAVBAR_NAV='.navbar-nav';const SELECTOR_VISIBLE_ITEMS='.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';const PLACEMENT_TOP=isRTL()?'top-end':'top-start';const PLACEMENT_TOPEND=isRTL()?'top-start':'top-end';const PLACEMENT_BOTTOM=isRTL()?'bottom-end':'bottom-start';const PLACEMENT_BOTTOMEND=isRTL()?'bottom-start':'bottom-end';const PLACEMENT_RIGHT=isRTL()?'left-start':'right-start';const PLACEMENT_LEFT=isRTL()?'right-start':'left-start';const Default={offset:[0,2],boundary:'clippingParents',reference:'toggle',display:'dynamic',popperConfig:null,autoClose:true};const DefaultType={offset:'(array|string|function)',boundary:'(string|element)',reference:'(string|element|object)',display:'string',popperConfig:'(null|object|function)',autoClose:'(boolean|string)'};class Dropdown extends BaseComponent__default.default{constructor(element,config){super(element);this._popper=null;this._config=this._getConfig(config);this._menu=this._getMenuElement();this._inNavbar=this._detectNavbar();}
static get Default(){return Default;}
static get DefaultType(){return DefaultType;}
static get NAME(){return NAME;}
toggle(){return this._isShown()?this.hide():this.show();}
show(){if(isDisabled(this._element)||this._isShown(this._menu)){return;}
const relatedTarget={relatedTarget:this._element};const showEvent=EventHandler__default.default.trigger(this._element,EVENT_SHOW,relatedTarget);if(showEvent.defaultPrevented){return;}
const parent=Dropdown.getParentFromElement(this._element);if(this._inNavbar){Manipulator__default.default.setDataAttribute(this._menu,'popper','none');}else{this._createPopper(parent);}
if('ontouchstart'in document.documentElement&&!parent.closest(SELECTOR_NAVBAR_NAV)){[].concat(...document.body.children).forEach(elem=>EventHandler__default.default.on(elem,'mouseover',noop));}
this._element.focus();this._element.setAttribute('aria-expanded',true);this._menu.classList.add(CLASS_NAME_SHOW);this._element.classList.add(CLASS_NAME_SHOW);EventHandler__default.default.trigger(this._element,EVENT_SHOWN,relatedTarget);}
hide(){if(isDisabled(this._element)||!this._isShown(this._menu)){return;}
const relatedTarget={relatedTarget:this._element};this._completeHide(relatedTarget);}
dispose(){if(this._popper){this._popper.destroy();}
super.dispose();}
update(){this._inNavbar=this._detectNavbar();if(this._popper){this._popper.update();}}
_completeHide(relatedTarget){const hideEvent=EventHandler__default.default.trigger(this._element,EVENT_HIDE,relatedTarget);if(hideEvent.defaultPrevented){return;}
if('ontouchstart'in document.documentElement){[].concat(...document.body.children).forEach(elem=>EventHandler__default.default.off(elem,'mouseover',noop));}
if(this._popper){this._popper.destroy();}
this._menu.classList.remove(CLASS_NAME_SHOW);this._element.classList.remove(CLASS_NAME_SHOW);this._element.setAttribute('aria-expanded','false');Manipulator__default.default.removeDataAttribute(this._menu,'popper');EventHandler__default.default.trigger(this._element,EVENT_HIDDEN,relatedTarget);}
_getConfig(config){config={...this.constructor.Default,...Manipulator__default.default.getDataAttributes(this._element),...config};typeCheckConfig(NAME,config,this.constructor.DefaultType);if(typeof config.reference==='object'&&!isElement(config.reference)&&typeof config.reference.getBoundingClientRect!=='function'){throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);}
return config;}
_createPopper(parent){if(typeof Popper__namespace==='undefined'){throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');}
let referenceElement=this._element;if(this._config.reference==='parent'){referenceElement=parent;}else if(isElement(this._config.reference)){referenceElement=getElement(this._config.reference);}else if(typeof this._config.reference==='object'){referenceElement=this._config.reference;}
const popperConfig=this._getPopperConfig();const isDisplayStatic=popperConfig.modifiers.find(modifier=>modifier.name==='applyStyles'&&modifier.enabled===false);this._popper=Popper__namespace.createPopper(referenceElement,this._menu,popperConfig);if(isDisplayStatic){Manipulator__default.default.setDataAttribute(this._menu,'popper','static');}}
_isShown(element=this._element){return element.classList.contains(CLASS_NAME_SHOW);}
_getMenuElement(){return SelectorEngine__default.default.next(this._element,SELECTOR_MENU)[0];}
_getPlacement(){const parentDropdown=this._element.parentNode;if(parentDropdown.classList.contains(CLASS_NAME_DROPEND)){return PLACEMENT_RIGHT;}
if(parentDropdown.classList.contains(CLASS_NAME_DROPSTART)){return PLACEMENT_LEFT;}
const isEnd=getComputedStyle(this._menu).getPropertyValue('--bs-position').trim()==='end';if(parentDropdown.classList.contains(CLASS_NAME_DROPUP)){return isEnd?PLACEMENT_TOPEND:PLACEMENT_TOP;}
return isEnd?PLACEMENT_BOTTOMEND:PLACEMENT_BOTTOM;}
_detectNavbar(){return this._element.closest(`.${CLASS_NAME_NAVBAR}`)!==null;}
_getOffset(){const{offset}=this._config;if(typeof offset==='string'){return offset.split(',').map(val=>Number.parseInt(val,10));}
if(typeof offset==='function'){return popperData=>offset(popperData,this._element);}
return offset;}
_getPopperConfig(){const defaultBsPopperConfig={placement:this._getPlacement(),modifiers:[{name:'preventOverflow',options:{boundary:this._config.boundary}},{name:'offset',options:{offset:this._getOffset()}}]};if(this._config.display==='static'){defaultBsPopperConfig.modifiers=[{name:'applyStyles',enabled:false}];}
return{...defaultBsPopperConfig,...(typeof this._config.popperConfig==='function'?this._config.popperConfig(defaultBsPopperConfig):this._config.popperConfig)};}
_selectMenuItem({key,target}){const items=SelectorEngine__default.default.find(SELECTOR_VISIBLE_ITEMS,this._menu).filter(isVisible);if(!items.length){return;}
getNextActiveElement(items,target,key===ARROW_DOWN_KEY,!items.includes(target)).focus();}
static jQueryInterface(config){return this.each(function(){const data=Dropdown.getOrCreateInstance(this,config);if(typeof config!=='string'){return;}
if(typeof data[config]==='undefined'){throw new TypeError(`No method named "${config}"`);}
data[config]();});}
static clearMenus(event){if(event&&(event.button===RIGHT_MOUSE_BUTTON||event.type==='keyup'&&event.key!==TAB_KEY)){return;}
const toggles=SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE);for(let i=0,len=toggles.length;i<len;i++){const context=Dropdown.getInstance(toggles[i]);if(!context||context._config.autoClose===false){continue;}
if(!context._isShown()){continue;}
const relatedTarget={relatedTarget:context._element};if(event){const composedPath=event.composedPath();const isMenuTarget=composedPath.includes(context._menu);if(composedPath.includes(context._element)||context._config.autoClose==='inside'&&!isMenuTarget||context._config.autoClose==='outside'&&isMenuTarget){continue;}
if(context._menu.contains(event.target)&&(event.type==='keyup'&&event.key===TAB_KEY||/input|select|option|textarea|form/i.test(event.target.tagName))){continue;}
if(event.type==='click'){relatedTarget.clickEvent=event;}}
context._completeHide(relatedTarget);}}
static getParentFromElement(element){return getElementFromSelector(element)||element.parentNode;}
static dataApiKeydownHandler(event){if(/input|textarea/i.test(event.target.tagName)?event.key===SPACE_KEY||event.key!==ESCAPE_KEY&&(event.key!==ARROW_DOWN_KEY&&event.key!==ARROW_UP_KEY||event.target.closest(SELECTOR_MENU)):!REGEXP_KEYDOWN.test(event.key)){return;}
const isActive=this.classList.contains(CLASS_NAME_SHOW);if(!isActive&&event.key===ESCAPE_KEY){return;}
event.preventDefault();event.stopPropagation();if(isDisabled(this)){return;}
const getToggleButton=this.matches(SELECTOR_DATA_TOGGLE)?this:SelectorEngine__default.default.prev(this,SELECTOR_DATA_TOGGLE)[0];const instance=Dropdown.getOrCreateInstance(getToggleButton);if(event.key===ESCAPE_KEY){instance.hide();return;}
if(event.key===ARROW_UP_KEY||event.key===ARROW_DOWN_KEY){if(!isActive){instance.show();}
instance._selectMenuItem(event);return;}
if(!isActive||event.key===SPACE_KEY){Dropdown.clearMenus();}}}
EventHandler__default.default.on(document,EVENT_KEYDOWN_DATA_API,SELECTOR_DATA_TOGGLE,Dropdown.dataApiKeydownHandler);EventHandler__default.default.on(document,EVENT_KEYDOWN_DATA_API,SELECTOR_MENU,Dropdown.dataApiKeydownHandler);EventHandler__default.default.on(document,EVENT_CLICK_DATA_API,Dropdown.clearMenus);EventHandler__default.default.on(document,EVENT_KEYUP_DATA_API,Dropdown.clearMenus);EventHandler__default.default.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,function(event){event.preventDefault();Dropdown.getOrCreateInstance(this).toggle();});defineJQueryPlugin(Dropdown);return Dropdown;}));}(dropdown$1));var dropdown=getDefaultExportFromCjs(dropdown$1.exports);var modal$1={exports:{}};
/*!
   * Bootstrap modal.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(eventHandler.exports,manipulator.exports,selectorEngine.exports,baseComponent.exports);})(commonjsGlobal,(function(EventHandler,Manipulator,SelectorEngine,BaseComponent){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};const EventHandler__default=_interopDefaultLegacy(EventHandler);const Manipulator__default=_interopDefaultLegacy(Manipulator);const SelectorEngine__default=_interopDefaultLegacy(SelectorEngine);const BaseComponent__default=_interopDefaultLegacy(BaseComponent);const MILLISECONDS_MULTIPLIER=1000;const TRANSITION_END='transitionend';const toType=obj=>{if(obj===null||obj===undefined){return`${obj}`;}
return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();};const getSelector=element=>{let selector=element.getAttribute('data-bs-target');if(!selector||selector==='#'){let hrefAttr=element.getAttribute('href');if(!hrefAttr||!hrefAttr.includes('#')&&!hrefAttr.startsWith('.')){return null;}
if(hrefAttr.includes('#')&&!hrefAttr.startsWith('#')){hrefAttr=`#${hrefAttr.split('#')[1]}`;}
selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():null;}
return selector;};const getElementFromSelector=element=>{const selector=getSelector(element);return selector?document.querySelector(selector):null;};const getTransitionDurationFromElement=element=>{if(!element){return 0;}
let{transitionDuration,transitionDelay}=window.getComputedStyle(element);const floatTransitionDuration=Number.parseFloat(transitionDuration);const floatTransitionDelay=Number.parseFloat(transitionDelay);if(!floatTransitionDuration&&!floatTransitionDelay){return 0;}
transitionDuration=transitionDuration.split(',')[0];transitionDelay=transitionDelay.split(',')[0];return(Number.parseFloat(transitionDuration)+Number.parseFloat(transitionDelay))*MILLISECONDS_MULTIPLIER;};const triggerTransitionEnd=element=>{element.dispatchEvent(new Event(TRANSITION_END));};const isElement=obj=>{if(!obj||typeof obj!=='object'){return false;}
if(typeof obj.jquery!=='undefined'){obj=obj[0];}
return typeof obj.nodeType!=='undefined';};const getElement=obj=>{if(isElement(obj)){return obj.jquery?obj[0]:obj;}
if(typeof obj==='string'&&obj.length>0){return document.querySelector(obj);}
return null;};const typeCheckConfig=(componentName,config,configTypes)=>{Object.keys(configTypes).forEach(property=>{const expectedTypes=configTypes[property];const value=config[property];const valueType=value&&isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);}});};const isVisible=element=>{if(!isElement(element)||element.getClientRects().length===0){return false;}
return getComputedStyle(element).getPropertyValue('visibility')==='visible';};const isDisabled=element=>{if(!element||element.nodeType!==Node.ELEMENT_NODE){return true;}
if(element.classList.contains('disabled')){return true;}
if(typeof element.disabled!=='undefined'){return element.disabled;}
return element.hasAttribute('disabled')&&element.getAttribute('disabled')!=='false';};const reflow=element=>{element.offsetHeight;};const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const isRTL=()=>document.documentElement.dir==='rtl';const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const execute=callback=>{if(typeof callback==='function'){callback();}};const executeAfterTransition=(callback,transitionElement,waitForTransition=true)=>{if(!waitForTransition){execute(callback);return;}
const durationPadding=5;const emulatedDuration=getTransitionDurationFromElement(transitionElement)+durationPadding;let called=false;const handler=({target})=>{if(target!==transitionElement){return;}
called=true;transitionElement.removeEventListener(TRANSITION_END,handler);execute(callback);};transitionElement.addEventListener(TRANSITION_END,handler);setTimeout(()=>{if(!called){triggerTransitionEnd(transitionElement);}},emulatedDuration);};const SELECTOR_FIXED_CONTENT='.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';const SELECTOR_STICKY_CONTENT='.sticky-top';class ScrollBarHelper{constructor(){this._element=document.body;}
getWidth(){const documentWidth=document.documentElement.clientWidth;return Math.abs(window.innerWidth-documentWidth);}
hide(){const width=this.getWidth();this._disableOverFlow();this._setElementAttributes(this._element,'paddingRight',calculatedValue=>calculatedValue+width);this._setElementAttributes(SELECTOR_FIXED_CONTENT,'paddingRight',calculatedValue=>calculatedValue+width);this._setElementAttributes(SELECTOR_STICKY_CONTENT,'marginRight',calculatedValue=>calculatedValue-width);}
_disableOverFlow(){this._saveInitialAttribute(this._element,'overflow');this._element.style.overflow='hidden';}
_setElementAttributes(selector,styleProp,callback){const scrollbarWidth=this.getWidth();const manipulationCallBack=element=>{if(element!==this._element&&window.innerWidth>element.clientWidth+scrollbarWidth){return;}
this._saveInitialAttribute(element,styleProp);const calculatedValue=window.getComputedStyle(element)[styleProp];element.style[styleProp]=`${callback(Number.parseFloat(calculatedValue))}px`;};this._applyManipulationCallback(selector,manipulationCallBack);}
reset(){this._resetElementAttributes(this._element,'overflow');this._resetElementAttributes(this._element,'paddingRight');this._resetElementAttributes(SELECTOR_FIXED_CONTENT,'paddingRight');this._resetElementAttributes(SELECTOR_STICKY_CONTENT,'marginRight');}
_saveInitialAttribute(element,styleProp){const actualValue=element.style[styleProp];if(actualValue){Manipulator__default.default.setDataAttribute(element,styleProp,actualValue);}}
_resetElementAttributes(selector,styleProp){const manipulationCallBack=element=>{const value=Manipulator__default.default.getDataAttribute(element,styleProp);if(typeof value==='undefined'){element.style.removeProperty(styleProp);}else{Manipulator__default.default.removeDataAttribute(element,styleProp);element.style[styleProp]=value;}};this._applyManipulationCallback(selector,manipulationCallBack);}
_applyManipulationCallback(selector,callBack){if(isElement(selector)){callBack(selector);}else{SelectorEngine__default.default.find(selector,this._element).forEach(callBack);}}
isOverflowing(){return this.getWidth()>0;}}
const Default$2={className:'modal-backdrop',isVisible:true,isAnimated:false,rootElement:'body',clickCallback:null};const DefaultType$2={className:'string',isVisible:'boolean',isAnimated:'boolean',rootElement:'(element|string)',clickCallback:'(function|null)'};const NAME$2='backdrop';const CLASS_NAME_FADE$1='fade';const CLASS_NAME_SHOW$1='show';const EVENT_MOUSEDOWN=`mousedown.bs.${NAME$2}`;class Backdrop{constructor(config){this._config=this._getConfig(config);this._isAppended=false;this._element=null;}
show(callback){if(!this._config.isVisible){execute(callback);return;}
this._append();if(this._config.isAnimated){reflow(this._getElement());}
this._getElement().classList.add(CLASS_NAME_SHOW$1);this._emulateAnimation(()=>{execute(callback);});}
hide(callback){if(!this._config.isVisible){execute(callback);return;}
this._getElement().classList.remove(CLASS_NAME_SHOW$1);this._emulateAnimation(()=>{this.dispose();execute(callback);});}
_getElement(){if(!this._element){const backdrop=document.createElement('div');backdrop.className=this._config.className;if(this._config.isAnimated){backdrop.classList.add(CLASS_NAME_FADE$1);}
this._element=backdrop;}
return this._element;}
_getConfig(config){config={...Default$2,...(typeof config==='object'?config:{})};config.rootElement=getElement(config.rootElement);typeCheckConfig(NAME$2,config,DefaultType$2);return config;}
_append(){if(this._isAppended){return;}
this._config.rootElement.append(this._getElement());EventHandler__default.default.on(this._getElement(),EVENT_MOUSEDOWN,()=>{execute(this._config.clickCallback);});this._isAppended=true;}
dispose(){if(!this._isAppended){return;}
EventHandler__default.default.off(this._element,EVENT_MOUSEDOWN);this._element.remove();this._isAppended=false;}
_emulateAnimation(callback){executeAfterTransition(callback,this._getElement(),this._config.isAnimated);}}
const Default$1={trapElement:null,autofocus:true};const DefaultType$1={trapElement:'element',autofocus:'boolean'};const NAME$1='focustrap';const DATA_KEY$1='bs.focustrap';const EVENT_KEY$1=`.${DATA_KEY$1}`;const EVENT_FOCUSIN=`focusin${EVENT_KEY$1}`;const EVENT_KEYDOWN_TAB=`keydown.tab${EVENT_KEY$1}`;const TAB_KEY='Tab';const TAB_NAV_FORWARD='forward';const TAB_NAV_BACKWARD='backward';class FocusTrap{constructor(config){this._config=this._getConfig(config);this._isActive=false;this._lastTabNavDirection=null;}
activate(){const{trapElement,autofocus}=this._config;if(this._isActive){return;}
if(autofocus){trapElement.focus();}
EventHandler__default.default.off(document,EVENT_KEY$1);EventHandler__default.default.on(document,EVENT_FOCUSIN,event=>this._handleFocusin(event));EventHandler__default.default.on(document,EVENT_KEYDOWN_TAB,event=>this._handleKeydown(event));this._isActive=true;}
deactivate(){if(!this._isActive){return;}
this._isActive=false;EventHandler__default.default.off(document,EVENT_KEY$1);}
_handleFocusin(event){const{target}=event;const{trapElement}=this._config;if(target===document||target===trapElement||trapElement.contains(target)){return;}
const elements=SelectorEngine__default.default.focusableChildren(trapElement);if(elements.length===0){trapElement.focus();}else if(this._lastTabNavDirection===TAB_NAV_BACKWARD){elements[elements.length-1].focus();}else{elements[0].focus();}}
_handleKeydown(event){if(event.key!==TAB_KEY){return;}
this._lastTabNavDirection=event.shiftKey?TAB_NAV_BACKWARD:TAB_NAV_FORWARD;}
_getConfig(config){config={...Default$1,...(typeof config==='object'?config:{})};typeCheckConfig(NAME$1,config,DefaultType$1);return config;}}
const enableDismissTrigger=(component,method='hide')=>{const clickEvent=`click.dismiss${component.EVENT_KEY}`;const name=component.NAME;EventHandler__default.default.on(document,clickEvent,`[data-bs-dismiss="${name}"]`,function(event){if(['A','AREA'].includes(this.tagName)){event.preventDefault();}
if(isDisabled(this)){return;}
const target=getElementFromSelector(this)||this.closest(`.${name}`);const instance=component.getOrCreateInstance(target);instance[method]();});};const NAME='modal';const DATA_KEY='bs.modal';const EVENT_KEY=`.${DATA_KEY}`;const DATA_API_KEY='.data-api';const ESCAPE_KEY='Escape';const Default={backdrop:true,keyboard:true,focus:true};const DefaultType={backdrop:'(boolean|string)',keyboard:'boolean',focus:'boolean'};const EVENT_HIDE=`hide${EVENT_KEY}`;const EVENT_HIDE_PREVENTED=`hidePrevented${EVENT_KEY}`;const EVENT_HIDDEN=`hidden${EVENT_KEY}`;const EVENT_SHOW=`show${EVENT_KEY}`;const EVENT_SHOWN=`shown${EVENT_KEY}`;const EVENT_RESIZE=`resize${EVENT_KEY}`;const EVENT_CLICK_DISMISS=`click.dismiss${EVENT_KEY}`;const EVENT_KEYDOWN_DISMISS=`keydown.dismiss${EVENT_KEY}`;const EVENT_MOUSEUP_DISMISS=`mouseup.dismiss${EVENT_KEY}`;const EVENT_MOUSEDOWN_DISMISS=`mousedown.dismiss${EVENT_KEY}`;const EVENT_CLICK_DATA_API=`click${EVENT_KEY}${DATA_API_KEY}`;const CLASS_NAME_OPEN='modal-open';const CLASS_NAME_FADE='fade';const CLASS_NAME_SHOW='show';const CLASS_NAME_STATIC='modal-static';const OPEN_SELECTOR='.modal.show';const SELECTOR_DIALOG='.modal-dialog';const SELECTOR_MODAL_BODY='.modal-body';const SELECTOR_DATA_TOGGLE='[data-bs-toggle="modal"]';class Modal extends BaseComponent__default.default{constructor(element,config){super(element);this._config=this._getConfig(config);this._dialog=SelectorEngine__default.default.findOne(SELECTOR_DIALOG,this._element);this._backdrop=this._initializeBackDrop();this._focustrap=this._initializeFocusTrap();this._isShown=false;this._ignoreBackdropClick=false;this._isTransitioning=false;this._scrollBar=new ScrollBarHelper();}
static get Default(){return Default;}
static get NAME(){return NAME;}
toggle(relatedTarget){return this._isShown?this.hide():this.show(relatedTarget);}
show(relatedTarget){if(this._isShown||this._isTransitioning){return;}
const showEvent=EventHandler__default.default.trigger(this._element,EVENT_SHOW,{relatedTarget});if(showEvent.defaultPrevented){return;}
this._isShown=true;if(this._isAnimated()){this._isTransitioning=true;}
this._scrollBar.hide();document.body.classList.add(CLASS_NAME_OPEN);this._adjustDialog();this._setEscapeEvent();this._setResizeEvent();EventHandler__default.default.on(this._dialog,EVENT_MOUSEDOWN_DISMISS,()=>{EventHandler__default.default.one(this._element,EVENT_MOUSEUP_DISMISS,event=>{if(event.target===this._element){this._ignoreBackdropClick=true;}});});this._showBackdrop(()=>this._showElement(relatedTarget));}
hide(){if(!this._isShown||this._isTransitioning){return;}
const hideEvent=EventHandler__default.default.trigger(this._element,EVENT_HIDE);if(hideEvent.defaultPrevented){return;}
this._isShown=false;const isAnimated=this._isAnimated();if(isAnimated){this._isTransitioning=true;}
this._setEscapeEvent();this._setResizeEvent();this._focustrap.deactivate();this._element.classList.remove(CLASS_NAME_SHOW);EventHandler__default.default.off(this._element,EVENT_CLICK_DISMISS);EventHandler__default.default.off(this._dialog,EVENT_MOUSEDOWN_DISMISS);this._queueCallback(()=>this._hideModal(),this._element,isAnimated);}
dispose(){[window,this._dialog].forEach(htmlElement=>EventHandler__default.default.off(htmlElement,EVENT_KEY));this._backdrop.dispose();this._focustrap.deactivate();super.dispose();}
handleUpdate(){this._adjustDialog();}
_initializeBackDrop(){return new Backdrop({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()});}
_initializeFocusTrap(){return new FocusTrap({trapElement:this._element});}
_getConfig(config){config={...Default,...Manipulator__default.default.getDataAttributes(this._element),...(typeof config==='object'?config:{})};typeCheckConfig(NAME,config,DefaultType);return config;}
_showElement(relatedTarget){const isAnimated=this._isAnimated();const modalBody=SelectorEngine__default.default.findOne(SELECTOR_MODAL_BODY,this._dialog);if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE){document.body.append(this._element);}
this._element.style.display='block';this._element.removeAttribute('aria-hidden');this._element.setAttribute('aria-modal',true);this._element.setAttribute('role','dialog');this._element.scrollTop=0;if(modalBody){modalBody.scrollTop=0;}
if(isAnimated){reflow(this._element);}
this._element.classList.add(CLASS_NAME_SHOW);const transitionComplete=()=>{if(this._config.focus){this._focustrap.activate();}
this._isTransitioning=false;EventHandler__default.default.trigger(this._element,EVENT_SHOWN,{relatedTarget});};this._queueCallback(transitionComplete,this._dialog,isAnimated);}
_setEscapeEvent(){if(this._isShown){EventHandler__default.default.on(this._element,EVENT_KEYDOWN_DISMISS,event=>{if(this._config.keyboard&&event.key===ESCAPE_KEY){event.preventDefault();this.hide();}else if(!this._config.keyboard&&event.key===ESCAPE_KEY){this._triggerBackdropTransition();}});}else{EventHandler__default.default.off(this._element,EVENT_KEYDOWN_DISMISS);}}
_setResizeEvent(){if(this._isShown){EventHandler__default.default.on(window,EVENT_RESIZE,()=>this._adjustDialog());}else{EventHandler__default.default.off(window,EVENT_RESIZE);}}
_hideModal(){this._element.style.display='none';this._element.setAttribute('aria-hidden',true);this._element.removeAttribute('aria-modal');this._element.removeAttribute('role');this._isTransitioning=false;this._backdrop.hide(()=>{document.body.classList.remove(CLASS_NAME_OPEN);this._resetAdjustments();this._scrollBar.reset();EventHandler__default.default.trigger(this._element,EVENT_HIDDEN);});}
_showBackdrop(callback){EventHandler__default.default.on(this._element,EVENT_CLICK_DISMISS,event=>{if(this._ignoreBackdropClick){this._ignoreBackdropClick=false;return;}
if(event.target!==event.currentTarget){return;}
if(this._config.backdrop===true){this.hide();}else if(this._config.backdrop==='static'){this._triggerBackdropTransition();}});this._backdrop.show(callback);}
_isAnimated(){return this._element.classList.contains(CLASS_NAME_FADE);}
_triggerBackdropTransition(){const hideEvent=EventHandler__default.default.trigger(this._element,EVENT_HIDE_PREVENTED);if(hideEvent.defaultPrevented){return;}
const{classList,scrollHeight,style}=this._element;const isModalOverflowing=scrollHeight>document.documentElement.clientHeight;if(!isModalOverflowing&&style.overflowY==='hidden'||classList.contains(CLASS_NAME_STATIC)){return;}
if(!isModalOverflowing){style.overflowY='hidden';}
classList.add(CLASS_NAME_STATIC);this._queueCallback(()=>{classList.remove(CLASS_NAME_STATIC);if(!isModalOverflowing){this._queueCallback(()=>{style.overflowY='';},this._dialog);}},this._dialog);this._element.focus();}
_adjustDialog(){const isModalOverflowing=this._element.scrollHeight>document.documentElement.clientHeight;const scrollbarWidth=this._scrollBar.getWidth();const isBodyOverflowing=scrollbarWidth>0;if(!isBodyOverflowing&&isModalOverflowing&&!isRTL()||isBodyOverflowing&&!isModalOverflowing&&isRTL()){this._element.style.paddingLeft=`${scrollbarWidth}px`;}
if(isBodyOverflowing&&!isModalOverflowing&&!isRTL()||!isBodyOverflowing&&isModalOverflowing&&isRTL()){this._element.style.paddingRight=`${scrollbarWidth}px`;}}
_resetAdjustments(){this._element.style.paddingLeft='';this._element.style.paddingRight='';}
static jQueryInterface(config,relatedTarget){return this.each(function(){const data=Modal.getOrCreateInstance(this,config);if(typeof config!=='string'){return;}
if(typeof data[config]==='undefined'){throw new TypeError(`No method named "${config}"`);}
data[config](relatedTarget);});}}
EventHandler__default.default.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,function(event){const target=getElementFromSelector(this);if(['A','AREA'].includes(this.tagName)){event.preventDefault();}
EventHandler__default.default.one(target,EVENT_SHOW,showEvent=>{if(showEvent.defaultPrevented){return;}
EventHandler__default.default.one(target,EVENT_HIDDEN,()=>{if(isVisible(this)){this.focus();}});});const allReadyOpen=SelectorEngine__default.default.findOne(OPEN_SELECTOR);if(allReadyOpen){Modal.getInstance(allReadyOpen).hide();}
const data=Modal.getOrCreateInstance(target);data.toggle(this);});enableDismissTrigger(Modal);defineJQueryPlugin(Modal);return Modal;}));}(modal$1));var modal=modal$1.exports;var offcanvas$1={exports:{}};
/*!
   * Bootstrap offcanvas.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(selectorEngine.exports,manipulator.exports,eventHandler.exports,baseComponent.exports);})(commonjsGlobal,(function(SelectorEngine,Manipulator,EventHandler,BaseComponent){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};const SelectorEngine__default=_interopDefaultLegacy(SelectorEngine);const Manipulator__default=_interopDefaultLegacy(Manipulator);const EventHandler__default=_interopDefaultLegacy(EventHandler);const BaseComponent__default=_interopDefaultLegacy(BaseComponent);const MILLISECONDS_MULTIPLIER=1000;const TRANSITION_END='transitionend';const toType=obj=>{if(obj===null||obj===undefined){return`${obj}`;}
return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();};const getSelector=element=>{let selector=element.getAttribute('data-bs-target');if(!selector||selector==='#'){let hrefAttr=element.getAttribute('href');if(!hrefAttr||!hrefAttr.includes('#')&&!hrefAttr.startsWith('.')){return null;}
if(hrefAttr.includes('#')&&!hrefAttr.startsWith('#')){hrefAttr=`#${hrefAttr.split('#')[1]}`;}
selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():null;}
return selector;};const getElementFromSelector=element=>{const selector=getSelector(element);return selector?document.querySelector(selector):null;};const getTransitionDurationFromElement=element=>{if(!element){return 0;}
let{transitionDuration,transitionDelay}=window.getComputedStyle(element);const floatTransitionDuration=Number.parseFloat(transitionDuration);const floatTransitionDelay=Number.parseFloat(transitionDelay);if(!floatTransitionDuration&&!floatTransitionDelay){return 0;}
transitionDuration=transitionDuration.split(',')[0];transitionDelay=transitionDelay.split(',')[0];return(Number.parseFloat(transitionDuration)+Number.parseFloat(transitionDelay))*MILLISECONDS_MULTIPLIER;};const triggerTransitionEnd=element=>{element.dispatchEvent(new Event(TRANSITION_END));};const isElement=obj=>{if(!obj||typeof obj!=='object'){return false;}
if(typeof obj.jquery!=='undefined'){obj=obj[0];}
return typeof obj.nodeType!=='undefined';};const getElement=obj=>{if(isElement(obj)){return obj.jquery?obj[0]:obj;}
if(typeof obj==='string'&&obj.length>0){return document.querySelector(obj);}
return null;};const typeCheckConfig=(componentName,config,configTypes)=>{Object.keys(configTypes).forEach(property=>{const expectedTypes=configTypes[property];const value=config[property];const valueType=value&&isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);}});};const isVisible=element=>{if(!isElement(element)||element.getClientRects().length===0){return false;}
return getComputedStyle(element).getPropertyValue('visibility')==='visible';};const isDisabled=element=>{if(!element||element.nodeType!==Node.ELEMENT_NODE){return true;}
if(element.classList.contains('disabled')){return true;}
if(typeof element.disabled!=='undefined'){return element.disabled;}
return element.hasAttribute('disabled')&&element.getAttribute('disabled')!=='false';};const reflow=element=>{element.offsetHeight;};const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const execute=callback=>{if(typeof callback==='function'){callback();}};const executeAfterTransition=(callback,transitionElement,waitForTransition=true)=>{if(!waitForTransition){execute(callback);return;}
const durationPadding=5;const emulatedDuration=getTransitionDurationFromElement(transitionElement)+durationPadding;let called=false;const handler=({target})=>{if(target!==transitionElement){return;}
called=true;transitionElement.removeEventListener(TRANSITION_END,handler);execute(callback);};transitionElement.addEventListener(TRANSITION_END,handler);setTimeout(()=>{if(!called){triggerTransitionEnd(transitionElement);}},emulatedDuration);};const SELECTOR_FIXED_CONTENT='.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';const SELECTOR_STICKY_CONTENT='.sticky-top';class ScrollBarHelper{constructor(){this._element=document.body;}
getWidth(){const documentWidth=document.documentElement.clientWidth;return Math.abs(window.innerWidth-documentWidth);}
hide(){const width=this.getWidth();this._disableOverFlow();this._setElementAttributes(this._element,'paddingRight',calculatedValue=>calculatedValue+width);this._setElementAttributes(SELECTOR_FIXED_CONTENT,'paddingRight',calculatedValue=>calculatedValue+width);this._setElementAttributes(SELECTOR_STICKY_CONTENT,'marginRight',calculatedValue=>calculatedValue-width);}
_disableOverFlow(){this._saveInitialAttribute(this._element,'overflow');this._element.style.overflow='hidden';}
_setElementAttributes(selector,styleProp,callback){const scrollbarWidth=this.getWidth();const manipulationCallBack=element=>{if(element!==this._element&&window.innerWidth>element.clientWidth+scrollbarWidth){return;}
this._saveInitialAttribute(element,styleProp);const calculatedValue=window.getComputedStyle(element)[styleProp];element.style[styleProp]=`${callback(Number.parseFloat(calculatedValue))}px`;};this._applyManipulationCallback(selector,manipulationCallBack);}
reset(){this._resetElementAttributes(this._element,'overflow');this._resetElementAttributes(this._element,'paddingRight');this._resetElementAttributes(SELECTOR_FIXED_CONTENT,'paddingRight');this._resetElementAttributes(SELECTOR_STICKY_CONTENT,'marginRight');}
_saveInitialAttribute(element,styleProp){const actualValue=element.style[styleProp];if(actualValue){Manipulator__default.default.setDataAttribute(element,styleProp,actualValue);}}
_resetElementAttributes(selector,styleProp){const manipulationCallBack=element=>{const value=Manipulator__default.default.getDataAttribute(element,styleProp);if(typeof value==='undefined'){element.style.removeProperty(styleProp);}else{Manipulator__default.default.removeDataAttribute(element,styleProp);element.style[styleProp]=value;}};this._applyManipulationCallback(selector,manipulationCallBack);}
_applyManipulationCallback(selector,callBack){if(isElement(selector)){callBack(selector);}else{SelectorEngine__default.default.find(selector,this._element).forEach(callBack);}}
isOverflowing(){return this.getWidth()>0;}}
const Default$2={className:'modal-backdrop',isVisible:true,isAnimated:false,rootElement:'body',clickCallback:null};const DefaultType$2={className:'string',isVisible:'boolean',isAnimated:'boolean',rootElement:'(element|string)',clickCallback:'(function|null)'};const NAME$2='backdrop';const CLASS_NAME_FADE='fade';const CLASS_NAME_SHOW$1='show';const EVENT_MOUSEDOWN=`mousedown.bs.${NAME$2}`;class Backdrop{constructor(config){this._config=this._getConfig(config);this._isAppended=false;this._element=null;}
show(callback){if(!this._config.isVisible){execute(callback);return;}
this._append();if(this._config.isAnimated){reflow(this._getElement());}
this._getElement().classList.add(CLASS_NAME_SHOW$1);this._emulateAnimation(()=>{execute(callback);});}
hide(callback){if(!this._config.isVisible){execute(callback);return;}
this._getElement().classList.remove(CLASS_NAME_SHOW$1);this._emulateAnimation(()=>{this.dispose();execute(callback);});}
_getElement(){if(!this._element){const backdrop=document.createElement('div');backdrop.className=this._config.className;if(this._config.isAnimated){backdrop.classList.add(CLASS_NAME_FADE);}
this._element=backdrop;}
return this._element;}
_getConfig(config){config={...Default$2,...(typeof config==='object'?config:{})};config.rootElement=getElement(config.rootElement);typeCheckConfig(NAME$2,config,DefaultType$2);return config;}
_append(){if(this._isAppended){return;}
this._config.rootElement.append(this._getElement());EventHandler__default.default.on(this._getElement(),EVENT_MOUSEDOWN,()=>{execute(this._config.clickCallback);});this._isAppended=true;}
dispose(){if(!this._isAppended){return;}
EventHandler__default.default.off(this._element,EVENT_MOUSEDOWN);this._element.remove();this._isAppended=false;}
_emulateAnimation(callback){executeAfterTransition(callback,this._getElement(),this._config.isAnimated);}}
const Default$1={trapElement:null,autofocus:true};const DefaultType$1={trapElement:'element',autofocus:'boolean'};const NAME$1='focustrap';const DATA_KEY$1='bs.focustrap';const EVENT_KEY$1=`.${DATA_KEY$1}`;const EVENT_FOCUSIN=`focusin${EVENT_KEY$1}`;const EVENT_KEYDOWN_TAB=`keydown.tab${EVENT_KEY$1}`;const TAB_KEY='Tab';const TAB_NAV_FORWARD='forward';const TAB_NAV_BACKWARD='backward';class FocusTrap{constructor(config){this._config=this._getConfig(config);this._isActive=false;this._lastTabNavDirection=null;}
activate(){const{trapElement,autofocus}=this._config;if(this._isActive){return;}
if(autofocus){trapElement.focus();}
EventHandler__default.default.off(document,EVENT_KEY$1);EventHandler__default.default.on(document,EVENT_FOCUSIN,event=>this._handleFocusin(event));EventHandler__default.default.on(document,EVENT_KEYDOWN_TAB,event=>this._handleKeydown(event));this._isActive=true;}
deactivate(){if(!this._isActive){return;}
this._isActive=false;EventHandler__default.default.off(document,EVENT_KEY$1);}
_handleFocusin(event){const{target}=event;const{trapElement}=this._config;if(target===document||target===trapElement||trapElement.contains(target)){return;}
const elements=SelectorEngine__default.default.focusableChildren(trapElement);if(elements.length===0){trapElement.focus();}else if(this._lastTabNavDirection===TAB_NAV_BACKWARD){elements[elements.length-1].focus();}else{elements[0].focus();}}
_handleKeydown(event){if(event.key!==TAB_KEY){return;}
this._lastTabNavDirection=event.shiftKey?TAB_NAV_BACKWARD:TAB_NAV_FORWARD;}
_getConfig(config){config={...Default$1,...(typeof config==='object'?config:{})};typeCheckConfig(NAME$1,config,DefaultType$1);return config;}}
const enableDismissTrigger=(component,method='hide')=>{const clickEvent=`click.dismiss${component.EVENT_KEY}`;const name=component.NAME;EventHandler__default.default.on(document,clickEvent,`[data-bs-dismiss="${name}"]`,function(event){if(['A','AREA'].includes(this.tagName)){event.preventDefault();}
if(isDisabled(this)){return;}
const target=getElementFromSelector(this)||this.closest(`.${name}`);const instance=component.getOrCreateInstance(target);instance[method]();});};const NAME='offcanvas';const DATA_KEY='bs.offcanvas';const EVENT_KEY=`.${DATA_KEY}`;const DATA_API_KEY='.data-api';const EVENT_LOAD_DATA_API=`load${EVENT_KEY}${DATA_API_KEY}`;const ESCAPE_KEY='Escape';const Default={backdrop:true,keyboard:true,scroll:false};const DefaultType={backdrop:'boolean',keyboard:'boolean',scroll:'boolean'};const CLASS_NAME_SHOW='show';const CLASS_NAME_BACKDROP='offcanvas-backdrop';const OPEN_SELECTOR='.offcanvas.show';const EVENT_SHOW=`show${EVENT_KEY}`;const EVENT_SHOWN=`shown${EVENT_KEY}`;const EVENT_HIDE=`hide${EVENT_KEY}`;const EVENT_HIDDEN=`hidden${EVENT_KEY}`;const EVENT_CLICK_DATA_API=`click${EVENT_KEY}${DATA_API_KEY}`;const EVENT_KEYDOWN_DISMISS=`keydown.dismiss${EVENT_KEY}`;const SELECTOR_DATA_TOGGLE='[data-bs-toggle="offcanvas"]';class Offcanvas extends BaseComponent__default.default{constructor(element,config){super(element);this._config=this._getConfig(config);this._isShown=false;this._backdrop=this._initializeBackDrop();this._focustrap=this._initializeFocusTrap();this._addEventListeners();}
static get NAME(){return NAME;}
static get Default(){return Default;}
toggle(relatedTarget){return this._isShown?this.hide():this.show(relatedTarget);}
show(relatedTarget){if(this._isShown){return;}
const showEvent=EventHandler__default.default.trigger(this._element,EVENT_SHOW,{relatedTarget});if(showEvent.defaultPrevented){return;}
this._isShown=true;this._element.style.visibility='visible';this._backdrop.show();if(!this._config.scroll){new ScrollBarHelper().hide();}
this._element.removeAttribute('aria-hidden');this._element.setAttribute('aria-modal',true);this._element.setAttribute('role','dialog');this._element.classList.add(CLASS_NAME_SHOW);const completeCallBack=()=>{if(!this._config.scroll){this._focustrap.activate();}
EventHandler__default.default.trigger(this._element,EVENT_SHOWN,{relatedTarget});};this._queueCallback(completeCallBack,this._element,true);}
hide(){if(!this._isShown){return;}
const hideEvent=EventHandler__default.default.trigger(this._element,EVENT_HIDE);if(hideEvent.defaultPrevented){return;}
this._focustrap.deactivate();this._element.blur();this._isShown=false;this._element.classList.remove(CLASS_NAME_SHOW);this._backdrop.hide();const completeCallback=()=>{this._element.setAttribute('aria-hidden',true);this._element.removeAttribute('aria-modal');this._element.removeAttribute('role');this._element.style.visibility='hidden';if(!this._config.scroll){new ScrollBarHelper().reset();}
EventHandler__default.default.trigger(this._element,EVENT_HIDDEN);};this._queueCallback(completeCallback,this._element,true);}
dispose(){this._backdrop.dispose();this._focustrap.deactivate();super.dispose();}
_getConfig(config){config={...Default,...Manipulator__default.default.getDataAttributes(this._element),...(typeof config==='object'?config:{})};typeCheckConfig(NAME,config,DefaultType);return config;}
_initializeBackDrop(){return new Backdrop({className:CLASS_NAME_BACKDROP,isVisible:this._config.backdrop,isAnimated:true,rootElement:this._element.parentNode,clickCallback:()=>this.hide()});}
_initializeFocusTrap(){return new FocusTrap({trapElement:this._element});}
_addEventListeners(){EventHandler__default.default.on(this._element,EVENT_KEYDOWN_DISMISS,event=>{if(this._config.keyboard&&event.key===ESCAPE_KEY){this.hide();}});}
static jQueryInterface(config){return this.each(function(){const data=Offcanvas.getOrCreateInstance(this,config);if(typeof config!=='string'){return;}
if(data[config]===undefined||config.startsWith('_')||config==='constructor'){throw new TypeError(`No method named "${config}"`);}
data[config](this);});}}
EventHandler__default.default.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,function(event){const target=getElementFromSelector(this);if(['A','AREA'].includes(this.tagName)){event.preventDefault();}
if(isDisabled(this)){return;}
EventHandler__default.default.one(target,EVENT_HIDDEN,()=>{if(isVisible(this)){this.focus();}});const allReadyOpen=SelectorEngine__default.default.findOne(OPEN_SELECTOR);if(allReadyOpen&&allReadyOpen!==target){Offcanvas.getInstance(allReadyOpen).hide();}
const data=Offcanvas.getOrCreateInstance(target);data.toggle(this);});EventHandler__default.default.on(window,EVENT_LOAD_DATA_API,()=>SelectorEngine__default.default.find(OPEN_SELECTOR).forEach(el=>Offcanvas.getOrCreateInstance(el).show()));enableDismissTrigger(Offcanvas);defineJQueryPlugin(Offcanvas);return Offcanvas;}));}(offcanvas$1));var offcanvas=offcanvas$1.exports;var popover$1={exports:{}};var tooltip$1={exports:{}};
/*!
   * Bootstrap tooltip.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(require$$0,data.exports,eventHandler.exports,manipulator.exports,selectorEngine.exports,baseComponent.exports);})(commonjsGlobal,(function(Popper,Data,EventHandler,Manipulator,SelectorEngine,BaseComponent){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};function _interopNamespace(e){if(e&&e.__esModule)return e;const n=Object.create(null);if(e){for(const k in e){if(k!=='default'){const d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:true,get:()=>e[k]});}}}
n.default=e;return Object.freeze(n);}
const Popper__namespace=_interopNamespace(Popper);const Data__default=_interopDefaultLegacy(Data);const EventHandler__default=_interopDefaultLegacy(EventHandler);const Manipulator__default=_interopDefaultLegacy(Manipulator);const SelectorEngine__default=_interopDefaultLegacy(SelectorEngine);const BaseComponent__default=_interopDefaultLegacy(BaseComponent);const MAX_UID=1000000;const toType=obj=>{if(obj===null||obj===undefined){return`${obj}`;}
return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();};const getUID=prefix=>{do{prefix+=Math.floor(Math.random()*MAX_UID);}while(document.getElementById(prefix));return prefix;};const isElement=obj=>{if(!obj||typeof obj!=='object'){return false;}
if(typeof obj.jquery!=='undefined'){obj=obj[0];}
return typeof obj.nodeType!=='undefined';};const getElement=obj=>{if(isElement(obj)){return obj.jquery?obj[0]:obj;}
if(typeof obj==='string'&&obj.length>0){return document.querySelector(obj);}
return null;};const typeCheckConfig=(componentName,config,configTypes)=>{Object.keys(configTypes).forEach(property=>{const expectedTypes=configTypes[property];const value=config[property];const valueType=value&&isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);}});};const findShadowRoot=element=>{if(!document.documentElement.attachShadow){return null;}
if(typeof element.getRootNode==='function'){const root=element.getRootNode();return root instanceof ShadowRoot?root:null;}
if(element instanceof ShadowRoot){return element;}
if(!element.parentNode){return null;}
return findShadowRoot(element.parentNode);};const noop=()=>{};const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const isRTL=()=>document.documentElement.dir==='rtl';const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const uriAttributes=new Set(['background','cite','href','itemtype','longdesc','poster','src','xlink:href']);const ARIA_ATTRIBUTE_PATTERN=/^aria-[\w-]*$/i;const SAFE_URL_PATTERN=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;const DATA_URL_PATTERN=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;const allowedAttribute=(attribute,allowedAttributeList)=>{const attributeName=attribute.nodeName.toLowerCase();if(allowedAttributeList.includes(attributeName)){if(uriAttributes.has(attributeName)){return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue)||DATA_URL_PATTERN.test(attribute.nodeValue));}
return true;}
const regExp=allowedAttributeList.filter(attributeRegex=>attributeRegex instanceof RegExp);for(let i=0,len=regExp.length;i<len;i++){if(regExp[i].test(attributeName)){return true;}}
return false;};const DefaultAllowlist={'*':['class','dir','id','lang','role',ARIA_ATTRIBUTE_PATTERN],a:['target','href','title','rel'],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:['src','srcset','alt','title','width','height'],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function sanitizeHtml(unsafeHtml,allowList,sanitizeFn){if(!unsafeHtml.length){return unsafeHtml;}
if(sanitizeFn&&typeof sanitizeFn==='function'){return sanitizeFn(unsafeHtml);}
const domParser=new window.DOMParser();const createdDocument=domParser.parseFromString(unsafeHtml,'text/html');const elements=[].concat(...createdDocument.body.querySelectorAll('*'));for(let i=0,len=elements.length;i<len;i++){const element=elements[i];const elementName=element.nodeName.toLowerCase();if(!Object.keys(allowList).includes(elementName)){element.remove();continue;}
const attributeList=[].concat(...element.attributes);const allowedAttributes=[].concat(allowList['*']||[],allowList[elementName]||[]);attributeList.forEach(attribute=>{if(!allowedAttribute(attribute,allowedAttributes)){element.removeAttribute(attribute.nodeName);}});}
return createdDocument.body.innerHTML;}
const NAME='tooltip';const DATA_KEY='bs.tooltip';const EVENT_KEY=`.${DATA_KEY}`;const CLASS_PREFIX='bs-tooltip';const DISALLOWED_ATTRIBUTES=new Set(['sanitize','allowList','sanitizeFn']);const DefaultType={animation:'boolean',template:'string',title:'(string|element|function)',trigger:'string',delay:'(number|object)',html:'boolean',selector:'(string|boolean)',placement:'(string|function)',offset:'(array|string|function)',container:'(string|element|boolean)',fallbackPlacements:'array',boundary:'(string|element)',customClass:'(string|function)',sanitize:'boolean',sanitizeFn:'(null|function)',allowList:'object',popperConfig:'(null|object|function)'};const AttachmentMap={AUTO:'auto',TOP:'top',RIGHT:isRTL()?'left':'right',BOTTOM:'bottom',LEFT:isRTL()?'right':'left'};const Default={animation:true,template:'<div class="tooltip" role="tooltip">'+'<div class="tooltip-arrow"></div>'+'<div class="tooltip-inner"></div>'+'</div>',trigger:'hover focus',title:'',delay:0,html:false,selector:false,placement:'top',offset:[0,0],container:false,fallbackPlacements:['top','right','bottom','left'],boundary:'clippingParents',customClass:'',sanitize:true,sanitizeFn:null,allowList:DefaultAllowlist,popperConfig:null};const Event={HIDE:`hide${EVENT_KEY}`,HIDDEN:`hidden${EVENT_KEY}`,SHOW:`show${EVENT_KEY}`,SHOWN:`shown${EVENT_KEY}`,INSERTED:`inserted${EVENT_KEY}`,CLICK:`click${EVENT_KEY}`,FOCUSIN:`focusin${EVENT_KEY}`,FOCUSOUT:`focusout${EVENT_KEY}`,MOUSEENTER:`mouseenter${EVENT_KEY}`,MOUSELEAVE:`mouseleave${EVENT_KEY}`};const CLASS_NAME_FADE='fade';const CLASS_NAME_MODAL='modal';const CLASS_NAME_SHOW='show';const HOVER_STATE_SHOW='show';const HOVER_STATE_OUT='out';const SELECTOR_TOOLTIP_INNER='.tooltip-inner';const SELECTOR_MODAL=`.${CLASS_NAME_MODAL}`;const EVENT_MODAL_HIDE='hide.bs.modal';const TRIGGER_HOVER='hover';const TRIGGER_FOCUS='focus';const TRIGGER_CLICK='click';const TRIGGER_MANUAL='manual';class Tooltip extends BaseComponent__default.default{constructor(element,config){if(typeof Popper__namespace==='undefined'){throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');}
super(element);this._isEnabled=true;this._timeout=0;this._hoverState='';this._activeTrigger={};this._popper=null;this._config=this._getConfig(config);this.tip=null;this._setListeners();}
static get Default(){return Default;}
static get NAME(){return NAME;}
static get Event(){return Event;}
static get DefaultType(){return DefaultType;}
enable(){this._isEnabled=true;}
disable(){this._isEnabled=false;}
toggleEnabled(){this._isEnabled=!this._isEnabled;}
toggle(event){if(!this._isEnabled){return;}
if(event){const context=this._initializeOnDelegatedTarget(event);context._activeTrigger.click=!context._activeTrigger.click;if(context._isWithActiveTrigger()){context._enter(null,context);}else{context._leave(null,context);}}else{if(this.getTipElement().classList.contains(CLASS_NAME_SHOW)){this._leave(null,this);return;}
this._enter(null,this);}}
dispose(){clearTimeout(this._timeout);EventHandler__default.default.off(this._element.closest(SELECTOR_MODAL),EVENT_MODAL_HIDE,this._hideModalHandler);if(this.tip){this.tip.remove();}
this._disposePopper();super.dispose();}
show(){if(this._element.style.display==='none'){throw new Error('Please use show on visible elements');}
if(!(this.isWithContent()&&this._isEnabled)){return;}
const showEvent=EventHandler__default.default.trigger(this._element,this.constructor.Event.SHOW);const shadowRoot=findShadowRoot(this._element);const isInTheDom=shadowRoot===null?this._element.ownerDocument.documentElement.contains(this._element):shadowRoot.contains(this._element);if(showEvent.defaultPrevented||!isInTheDom){return;}
if(this.constructor.NAME==='tooltip'&&this.tip&&this.getTitle()!==this.tip.querySelector(SELECTOR_TOOLTIP_INNER).innerHTML){this._disposePopper();this.tip.remove();this.tip=null;}
const tip=this.getTipElement();const tipId=getUID(this.constructor.NAME);tip.setAttribute('id',tipId);this._element.setAttribute('aria-describedby',tipId);if(this._config.animation){tip.classList.add(CLASS_NAME_FADE);}
const placement=typeof this._config.placement==='function'?this._config.placement.call(this,tip,this._element):this._config.placement;const attachment=this._getAttachment(placement);this._addAttachmentClass(attachment);const{container}=this._config;Data__default.default.set(tip,this.constructor.DATA_KEY,this);if(!this._element.ownerDocument.documentElement.contains(this.tip)){container.append(tip);EventHandler__default.default.trigger(this._element,this.constructor.Event.INSERTED);}
if(this._popper){this._popper.update();}else{this._popper=Popper__namespace.createPopper(this._element,tip,this._getPopperConfig(attachment));}
tip.classList.add(CLASS_NAME_SHOW);const customClass=this._resolvePossibleFunction(this._config.customClass);if(customClass){tip.classList.add(...customClass.split(' '));}
if('ontouchstart'in document.documentElement){[].concat(...document.body.children).forEach(element=>{EventHandler__default.default.on(element,'mouseover',noop);});}
const complete=()=>{const prevHoverState=this._hoverState;this._hoverState=null;EventHandler__default.default.trigger(this._element,this.constructor.Event.SHOWN);if(prevHoverState===HOVER_STATE_OUT){this._leave(null,this);}};const isAnimated=this.tip.classList.contains(CLASS_NAME_FADE);this._queueCallback(complete,this.tip,isAnimated);}
hide(){if(!this._popper){return;}
const tip=this.getTipElement();const complete=()=>{if(this._isWithActiveTrigger()){return;}
if(this._hoverState!==HOVER_STATE_SHOW){tip.remove();}
this._cleanTipClass();this._element.removeAttribute('aria-describedby');EventHandler__default.default.trigger(this._element,this.constructor.Event.HIDDEN);this._disposePopper();};const hideEvent=EventHandler__default.default.trigger(this._element,this.constructor.Event.HIDE);if(hideEvent.defaultPrevented){return;}
tip.classList.remove(CLASS_NAME_SHOW);if('ontouchstart'in document.documentElement){[].concat(...document.body.children).forEach(element=>EventHandler__default.default.off(element,'mouseover',noop));}
this._activeTrigger[TRIGGER_CLICK]=false;this._activeTrigger[TRIGGER_FOCUS]=false;this._activeTrigger[TRIGGER_HOVER]=false;const isAnimated=this.tip.classList.contains(CLASS_NAME_FADE);this._queueCallback(complete,this.tip,isAnimated);this._hoverState='';}
update(){if(this._popper!==null){this._popper.update();}}
isWithContent(){return Boolean(this.getTitle());}
getTipElement(){if(this.tip){return this.tip;}
const element=document.createElement('div');element.innerHTML=this._config.template;const tip=element.children[0];this.setContent(tip);tip.classList.remove(CLASS_NAME_FADE,CLASS_NAME_SHOW);this.tip=tip;return this.tip;}
setContent(tip){this._sanitizeAndSetContent(tip,this.getTitle(),SELECTOR_TOOLTIP_INNER);}
_sanitizeAndSetContent(template,content,selector){const templateElement=SelectorEngine__default.default.findOne(selector,template);if(!content&&templateElement){templateElement.remove();return;}
this.setElementContent(templateElement,content);}
setElementContent(element,content){if(element===null){return;}
if(isElement(content)){content=getElement(content);if(this._config.html){if(content.parentNode!==element){element.innerHTML='';element.append(content);}}else{element.textContent=content.textContent;}
return;}
if(this._config.html){if(this._config.sanitize){content=sanitizeHtml(content,this._config.allowList,this._config.sanitizeFn);}
element.innerHTML=content;}else{element.textContent=content;}}
getTitle(){const title=this._element.getAttribute('data-bs-original-title')||this._config.title;return this._resolvePossibleFunction(title);}
updateAttachment(attachment){if(attachment==='right'){return'end';}
if(attachment==='left'){return'start';}
return attachment;}
_initializeOnDelegatedTarget(event,context){return context||this.constructor.getOrCreateInstance(event.delegateTarget,this._getDelegateConfig());}
_getOffset(){const{offset}=this._config;if(typeof offset==='string'){return offset.split(',').map(val=>Number.parseInt(val,10));}
if(typeof offset==='function'){return popperData=>offset(popperData,this._element);}
return offset;}
_resolvePossibleFunction(content){return typeof content==='function'?content.call(this._element):content;}
_getPopperConfig(attachment){const defaultBsPopperConfig={placement:attachment,modifiers:[{name:'flip',options:{fallbackPlacements:this._config.fallbackPlacements}},{name:'offset',options:{offset:this._getOffset()}},{name:'preventOverflow',options:{boundary:this._config.boundary}},{name:'arrow',options:{element:`.${this.constructor.NAME}-arrow`}},{name:'onChange',enabled:true,phase:'afterWrite',fn:data=>this._handlePopperPlacementChange(data)}],onFirstUpdate:data=>{if(data.options.placement!==data.placement){this._handlePopperPlacementChange(data);}}};return{...defaultBsPopperConfig,...(typeof this._config.popperConfig==='function'?this._config.popperConfig(defaultBsPopperConfig):this._config.popperConfig)};}
_addAttachmentClass(attachment){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment)}`);}
_getAttachment(placement){return AttachmentMap[placement.toUpperCase()];}
_setListeners(){const triggers=this._config.trigger.split(' ');triggers.forEach(trigger=>{if(trigger==='click'){EventHandler__default.default.on(this._element,this.constructor.Event.CLICK,this._config.selector,event=>this.toggle(event));}else if(trigger!==TRIGGER_MANUAL){const eventIn=trigger===TRIGGER_HOVER?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN;const eventOut=trigger===TRIGGER_HOVER?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;EventHandler__default.default.on(this._element,eventIn,this._config.selector,event=>this._enter(event));EventHandler__default.default.on(this._element,eventOut,this._config.selector,event=>this._leave(event));}});this._hideModalHandler=()=>{if(this._element){this.hide();}};EventHandler__default.default.on(this._element.closest(SELECTOR_MODAL),EVENT_MODAL_HIDE,this._hideModalHandler);if(this._config.selector){this._config={...this._config,trigger:'manual',selector:''};}else{this._fixTitle();}}
_fixTitle(){const title=this._element.getAttribute('title');const originalTitleType=typeof this._element.getAttribute('data-bs-original-title');if(title||originalTitleType!=='string'){this._element.setAttribute('data-bs-original-title',title||'');if(title&&!this._element.getAttribute('aria-label')&&!this._element.textContent){this._element.setAttribute('aria-label',title);}
this._element.setAttribute('title','');}}
_enter(event,context){context=this._initializeOnDelegatedTarget(event,context);if(event){context._activeTrigger[event.type==='focusin'?TRIGGER_FOCUS:TRIGGER_HOVER]=true;}
if(context.getTipElement().classList.contains(CLASS_NAME_SHOW)||context._hoverState===HOVER_STATE_SHOW){context._hoverState=HOVER_STATE_SHOW;return;}
clearTimeout(context._timeout);context._hoverState=HOVER_STATE_SHOW;if(!context._config.delay||!context._config.delay.show){context.show();return;}
context._timeout=setTimeout(()=>{if(context._hoverState===HOVER_STATE_SHOW){context.show();}},context._config.delay.show);}
_leave(event,context){context=this._initializeOnDelegatedTarget(event,context);if(event){context._activeTrigger[event.type==='focusout'?TRIGGER_FOCUS:TRIGGER_HOVER]=context._element.contains(event.relatedTarget);}
if(context._isWithActiveTrigger()){return;}
clearTimeout(context._timeout);context._hoverState=HOVER_STATE_OUT;if(!context._config.delay||!context._config.delay.hide){context.hide();return;}
context._timeout=setTimeout(()=>{if(context._hoverState===HOVER_STATE_OUT){context.hide();}},context._config.delay.hide);}
_isWithActiveTrigger(){for(const trigger in this._activeTrigger){if(this._activeTrigger[trigger]){return true;}}
return false;}
_getConfig(config){const dataAttributes=Manipulator__default.default.getDataAttributes(this._element);Object.keys(dataAttributes).forEach(dataAttr=>{if(DISALLOWED_ATTRIBUTES.has(dataAttr)){delete dataAttributes[dataAttr];}});config={...this.constructor.Default,...dataAttributes,...(typeof config==='object'&&config?config:{})};config.container=config.container===false?document.body:getElement(config.container);if(typeof config.delay==='number'){config.delay={show:config.delay,hide:config.delay};}
if(typeof config.title==='number'){config.title=config.title.toString();}
if(typeof config.content==='number'){config.content=config.content.toString();}
typeCheckConfig(NAME,config,this.constructor.DefaultType);if(config.sanitize){config.template=sanitizeHtml(config.template,config.allowList,config.sanitizeFn);}
return config;}
_getDelegateConfig(){const config={};for(const key in this._config){if(this.constructor.Default[key]!==this._config[key]){config[key]=this._config[key];}}
return config;}
_cleanTipClass(){const tip=this.getTipElement();const basicClassPrefixRegex=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,'g');const tabClass=tip.getAttribute('class').match(basicClassPrefixRegex);if(tabClass!==null&&tabClass.length>0){tabClass.map(token=>token.trim()).forEach(tClass=>tip.classList.remove(tClass));}}
_getBasicClassPrefix(){return CLASS_PREFIX;}
_handlePopperPlacementChange(popperData){const{state}=popperData;if(!state){return;}
this.tip=state.elements.popper;this._cleanTipClass();this._addAttachmentClass(this._getAttachment(state.placement));}
_disposePopper(){if(this._popper){this._popper.destroy();this._popper=null;}}
static jQueryInterface(config){return this.each(function(){const data=Tooltip.getOrCreateInstance(this,config);if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError(`No method named "${config}"`);}
data[config]();}});}}
defineJQueryPlugin(Tooltip);return Tooltip;}));}(tooltip$1));var tooltip=getDefaultExportFromCjs(tooltip$1.exports);
/*!
   * Bootstrap popover.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(tooltip$1.exports);})(commonjsGlobal,(function(Tooltip){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};const Tooltip__default=_interopDefaultLegacy(Tooltip);const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const NAME='popover';const DATA_KEY='bs.popover';const EVENT_KEY=`.${DATA_KEY}`;const CLASS_PREFIX='bs-popover';const Default={...Tooltip__default.default.Default,placement:'right',offset:[0,8],trigger:'click',content:'',template:'<div class="popover" role="tooltip">'+'<div class="popover-arrow"></div>'+'<h3 class="popover-header"></h3>'+'<div class="popover-body"></div>'+'</div>'};const DefaultType={...Tooltip__default.default.DefaultType,content:'(string|element|function)'};const Event={HIDE:`hide${EVENT_KEY}`,HIDDEN:`hidden${EVENT_KEY}`,SHOW:`show${EVENT_KEY}`,SHOWN:`shown${EVENT_KEY}`,INSERTED:`inserted${EVENT_KEY}`,CLICK:`click${EVENT_KEY}`,FOCUSIN:`focusin${EVENT_KEY}`,FOCUSOUT:`focusout${EVENT_KEY}`,MOUSEENTER:`mouseenter${EVENT_KEY}`,MOUSELEAVE:`mouseleave${EVENT_KEY}`};const SELECTOR_TITLE='.popover-header';const SELECTOR_CONTENT='.popover-body';class Popover extends Tooltip__default.default{static get Default(){return Default;}
static get NAME(){return NAME;}
static get Event(){return Event;}
static get DefaultType(){return DefaultType;}
isWithContent(){return this.getTitle()||this._getContent();}
setContent(tip){this._sanitizeAndSetContent(tip,this.getTitle(),SELECTOR_TITLE);this._sanitizeAndSetContent(tip,this._getContent(),SELECTOR_CONTENT);}
_getContent(){return this._resolvePossibleFunction(this._config.content);}
_getBasicClassPrefix(){return CLASS_PREFIX;}
static jQueryInterface(config){return this.each(function(){const data=Popover.getOrCreateInstance(this,config);if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError(`No method named "${config}"`);}
data[config]();}});}}
defineJQueryPlugin(Popover);return Popover;}));}(popover$1));var popover=popover$1.exports;var scrollspy$1={exports:{}};
/*!
   * Bootstrap scrollspy.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(eventHandler.exports,manipulator.exports,selectorEngine.exports,baseComponent.exports);})(commonjsGlobal,(function(EventHandler,Manipulator,SelectorEngine,BaseComponent){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};const EventHandler__default=_interopDefaultLegacy(EventHandler);const Manipulator__default=_interopDefaultLegacy(Manipulator);const SelectorEngine__default=_interopDefaultLegacy(SelectorEngine);const BaseComponent__default=_interopDefaultLegacy(BaseComponent);const toType=obj=>{if(obj===null||obj===undefined){return`${obj}`;}
return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();};const getSelector=element=>{let selector=element.getAttribute('data-bs-target');if(!selector||selector==='#'){let hrefAttr=element.getAttribute('href');if(!hrefAttr||!hrefAttr.includes('#')&&!hrefAttr.startsWith('.')){return null;}
if(hrefAttr.includes('#')&&!hrefAttr.startsWith('#')){hrefAttr=`#${hrefAttr.split('#')[1]}`;}
selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():null;}
return selector;};const getSelectorFromElement=element=>{const selector=getSelector(element);if(selector){return document.querySelector(selector)?selector:null;}
return null;};const isElement=obj=>{if(!obj||typeof obj!=='object'){return false;}
if(typeof obj.jquery!=='undefined'){obj=obj[0];}
return typeof obj.nodeType!=='undefined';};const getElement=obj=>{if(isElement(obj)){return obj.jquery?obj[0]:obj;}
if(typeof obj==='string'&&obj.length>0){return document.querySelector(obj);}
return null;};const typeCheckConfig=(componentName,config,configTypes)=>{Object.keys(configTypes).forEach(property=>{const expectedTypes=configTypes[property];const value=config[property];const valueType=value&&isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);}});};const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const NAME='scrollspy';const DATA_KEY='bs.scrollspy';const EVENT_KEY=`.${DATA_KEY}`;const DATA_API_KEY='.data-api';const Default={offset:10,method:'auto',target:''};const DefaultType={offset:'number',method:'string',target:'(string|element)'};const EVENT_ACTIVATE=`activate${EVENT_KEY}`;const EVENT_SCROLL=`scroll${EVENT_KEY}`;const EVENT_LOAD_DATA_API=`load${EVENT_KEY}${DATA_API_KEY}`;const CLASS_NAME_DROPDOWN_ITEM='dropdown-item';const CLASS_NAME_ACTIVE='active';const SELECTOR_DATA_SPY='[data-bs-spy="scroll"]';const SELECTOR_NAV_LIST_GROUP='.nav, .list-group';const SELECTOR_NAV_LINKS='.nav-link';const SELECTOR_NAV_ITEMS='.nav-item';const SELECTOR_LIST_ITEMS='.list-group-item';const SELECTOR_LINK_ITEMS=`${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}, .${CLASS_NAME_DROPDOWN_ITEM}`;const SELECTOR_DROPDOWN='.dropdown';const SELECTOR_DROPDOWN_TOGGLE='.dropdown-toggle';const METHOD_OFFSET='offset';const METHOD_POSITION='position';class ScrollSpy extends BaseComponent__default.default{constructor(element,config){super(element);this._scrollElement=this._element.tagName==='BODY'?window:this._element;this._config=this._getConfig(config);this._offsets=[];this._targets=[];this._activeTarget=null;this._scrollHeight=0;EventHandler__default.default.on(this._scrollElement,EVENT_SCROLL,()=>this._process());this.refresh();this._process();}
static get Default(){return Default;}
static get NAME(){return NAME;}
refresh(){const autoMethod=this._scrollElement===this._scrollElement.window?METHOD_OFFSET:METHOD_POSITION;const offsetMethod=this._config.method==='auto'?autoMethod:this._config.method;const offsetBase=offsetMethod===METHOD_POSITION?this._getScrollTop():0;this._offsets=[];this._targets=[];this._scrollHeight=this._getScrollHeight();const targets=SelectorEngine__default.default.find(SELECTOR_LINK_ITEMS,this._config.target);targets.map(element=>{const targetSelector=getSelectorFromElement(element);const target=targetSelector?SelectorEngine__default.default.findOne(targetSelector):null;if(target){const targetBCR=target.getBoundingClientRect();if(targetBCR.width||targetBCR.height){return[Manipulator__default.default[offsetMethod](target).top+offsetBase,targetSelector];}}
return null;}).filter(item=>item).sort((a,b)=>a[0]-b[0]).forEach(item=>{this._offsets.push(item[0]);this._targets.push(item[1]);});}
dispose(){EventHandler__default.default.off(this._scrollElement,EVENT_KEY);super.dispose();}
_getConfig(config){config={...Default,...Manipulator__default.default.getDataAttributes(this._element),...(typeof config==='object'&&config?config:{})};config.target=getElement(config.target)||document.documentElement;typeCheckConfig(NAME,config,DefaultType);return config;}
_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop;}
_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);}
_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height;}
_process(){const scrollTop=this._getScrollTop()+this._config.offset;const scrollHeight=this._getScrollHeight();const maxScroll=this._config.offset+scrollHeight-this._getOffsetHeight();if(this._scrollHeight!==scrollHeight){this.refresh();}
if(scrollTop>=maxScroll){const target=this._targets[this._targets.length-1];if(this._activeTarget!==target){this._activate(target);}
return;}
if(this._activeTarget&&scrollTop<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null;this._clear();return;}
for(let i=this._offsets.length;i--;){const isActiveTarget=this._activeTarget!==this._targets[i]&&scrollTop>=this._offsets[i]&&(typeof this._offsets[i+1]==='undefined'||scrollTop<this._offsets[i+1]);if(isActiveTarget){this._activate(this._targets[i]);}}}
_activate(target){this._activeTarget=target;this._clear();const queries=SELECTOR_LINK_ITEMS.split(',').map(selector=>`${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);const link=SelectorEngine__default.default.findOne(queries.join(','),this._config.target);link.classList.add(CLASS_NAME_ACTIVE);if(link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)){SelectorEngine__default.default.findOne(SELECTOR_DROPDOWN_TOGGLE,link.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE);}else{SelectorEngine__default.default.parents(link,SELECTOR_NAV_LIST_GROUP).forEach(listGroup=>{SelectorEngine__default.default.prev(listGroup,`${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item=>item.classList.add(CLASS_NAME_ACTIVE));SelectorEngine__default.default.prev(listGroup,SELECTOR_NAV_ITEMS).forEach(navItem=>{SelectorEngine__default.default.children(navItem,SELECTOR_NAV_LINKS).forEach(item=>item.classList.add(CLASS_NAME_ACTIVE));});});}
EventHandler__default.default.trigger(this._scrollElement,EVENT_ACTIVATE,{relatedTarget:target});}
_clear(){SelectorEngine__default.default.find(SELECTOR_LINK_ITEMS,this._config.target).filter(node=>node.classList.contains(CLASS_NAME_ACTIVE)).forEach(node=>node.classList.remove(CLASS_NAME_ACTIVE));}
static jQueryInterface(config){return this.each(function(){const data=ScrollSpy.getOrCreateInstance(this,config);if(typeof config!=='string'){return;}
if(typeof data[config]==='undefined'){throw new TypeError(`No method named "${config}"`);}
data[config]();});}}
EventHandler__default.default.on(window,EVENT_LOAD_DATA_API,()=>{SelectorEngine__default.default.find(SELECTOR_DATA_SPY).forEach(spy=>new ScrollSpy(spy));});defineJQueryPlugin(ScrollSpy);return ScrollSpy;}));}(scrollspy$1));var scrollspy=scrollspy$1.exports;var tab$1={exports:{}};
/*!
   * Bootstrap tab.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(eventHandler.exports,selectorEngine.exports,baseComponent.exports);})(commonjsGlobal,(function(EventHandler,SelectorEngine,BaseComponent){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};const EventHandler__default=_interopDefaultLegacy(EventHandler);const SelectorEngine__default=_interopDefaultLegacy(SelectorEngine);const BaseComponent__default=_interopDefaultLegacy(BaseComponent);const getSelector=element=>{let selector=element.getAttribute('data-bs-target');if(!selector||selector==='#'){let hrefAttr=element.getAttribute('href');if(!hrefAttr||!hrefAttr.includes('#')&&!hrefAttr.startsWith('.')){return null;}
if(hrefAttr.includes('#')&&!hrefAttr.startsWith('#')){hrefAttr=`#${hrefAttr.split('#')[1]}`;}
selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():null;}
return selector;};const getElementFromSelector=element=>{const selector=getSelector(element);return selector?document.querySelector(selector):null;};const isDisabled=element=>{if(!element||element.nodeType!==Node.ELEMENT_NODE){return true;}
if(element.classList.contains('disabled')){return true;}
if(typeof element.disabled!=='undefined'){return element.disabled;}
return element.hasAttribute('disabled')&&element.getAttribute('disabled')!=='false';};const reflow=element=>{element.offsetHeight;};const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const NAME='tab';const DATA_KEY='bs.tab';const EVENT_KEY=`.${DATA_KEY}`;const DATA_API_KEY='.data-api';const EVENT_HIDE=`hide${EVENT_KEY}`;const EVENT_HIDDEN=`hidden${EVENT_KEY}`;const EVENT_SHOW=`show${EVENT_KEY}`;const EVENT_SHOWN=`shown${EVENT_KEY}`;const EVENT_CLICK_DATA_API=`click${EVENT_KEY}${DATA_API_KEY}`;const CLASS_NAME_DROPDOWN_MENU='dropdown-menu';const CLASS_NAME_ACTIVE='active';const CLASS_NAME_FADE='fade';const CLASS_NAME_SHOW='show';const SELECTOR_DROPDOWN='.dropdown';const SELECTOR_NAV_LIST_GROUP='.nav, .list-group';const SELECTOR_ACTIVE='.active';const SELECTOR_ACTIVE_UL=':scope > li > .active';const SELECTOR_DATA_TOGGLE='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';const SELECTOR_DROPDOWN_TOGGLE='.dropdown-toggle';const SELECTOR_DROPDOWN_ACTIVE_CHILD=':scope > .dropdown-menu .active';class Tab extends BaseComponent__default.default{static get NAME(){return NAME;}
show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(CLASS_NAME_ACTIVE)){return;}
let previous;const target=getElementFromSelector(this._element);const listElement=this._element.closest(SELECTOR_NAV_LIST_GROUP);if(listElement){const itemSelector=listElement.nodeName==='UL'||listElement.nodeName==='OL'?SELECTOR_ACTIVE_UL:SELECTOR_ACTIVE;previous=SelectorEngine__default.default.find(itemSelector,listElement);previous=previous[previous.length-1];}
const hideEvent=previous?EventHandler__default.default.trigger(previous,EVENT_HIDE,{relatedTarget:this._element}):null;const showEvent=EventHandler__default.default.trigger(this._element,EVENT_SHOW,{relatedTarget:previous});if(showEvent.defaultPrevented||hideEvent!==null&&hideEvent.defaultPrevented){return;}
this._activate(this._element,listElement);const complete=()=>{EventHandler__default.default.trigger(previous,EVENT_HIDDEN,{relatedTarget:this._element});EventHandler__default.default.trigger(this._element,EVENT_SHOWN,{relatedTarget:previous});};if(target){this._activate(target,target.parentNode,complete);}else{complete();}}
_activate(element,container,callback){const activeElements=container&&(container.nodeName==='UL'||container.nodeName==='OL')?SelectorEngine__default.default.find(SELECTOR_ACTIVE_UL,container):SelectorEngine__default.default.children(container,SELECTOR_ACTIVE);const active=activeElements[0];const isTransitioning=callback&&active&&active.classList.contains(CLASS_NAME_FADE);const complete=()=>this._transitionComplete(element,active,callback);if(active&&isTransitioning){active.classList.remove(CLASS_NAME_SHOW);this._queueCallback(complete,element,true);}else{complete();}}
_transitionComplete(element,active,callback){if(active){active.classList.remove(CLASS_NAME_ACTIVE);const dropdownChild=SelectorEngine__default.default.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD,active.parentNode);if(dropdownChild){dropdownChild.classList.remove(CLASS_NAME_ACTIVE);}
if(active.getAttribute('role')==='tab'){active.setAttribute('aria-selected',false);}}
element.classList.add(CLASS_NAME_ACTIVE);if(element.getAttribute('role')==='tab'){element.setAttribute('aria-selected',true);}
reflow(element);if(element.classList.contains(CLASS_NAME_FADE)){element.classList.add(CLASS_NAME_SHOW);}
let parent=element.parentNode;if(parent&&parent.nodeName==='LI'){parent=parent.parentNode;}
if(parent&&parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)){const dropdownElement=element.closest(SELECTOR_DROPDOWN);if(dropdownElement){SelectorEngine__default.default.find(SELECTOR_DROPDOWN_TOGGLE,dropdownElement).forEach(dropdown=>dropdown.classList.add(CLASS_NAME_ACTIVE));}
element.setAttribute('aria-expanded',true);}
if(callback){callback();}}
static jQueryInterface(config){return this.each(function(){const data=Tab.getOrCreateInstance(this);if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError(`No method named "${config}"`);}
data[config]();}});}}
EventHandler__default.default.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,function(event){if(['A','AREA'].includes(this.tagName)){event.preventDefault();}
if(isDisabled(this)){return;}
const data=Tab.getOrCreateInstance(this);data.show();});defineJQueryPlugin(Tab);return Tab;}));}(tab$1));var tab=tab$1.exports;var toast$1={exports:{}};
/*!
   * Bootstrap toast.js v5.1.3 (https://getbootstrap.com/)
   * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   */
(function(module,exports){(function(global,factory){module.exports=factory(eventHandler.exports,manipulator.exports,baseComponent.exports);})(commonjsGlobal,(function(EventHandler,Manipulator,BaseComponent){const _interopDefaultLegacy=e=>e&&typeof e==='object'&&'default'in e?e:{default:e};const EventHandler__default=_interopDefaultLegacy(EventHandler);const Manipulator__default=_interopDefaultLegacy(Manipulator);const BaseComponent__default=_interopDefaultLegacy(BaseComponent);const toType=obj=>{if(obj===null||obj===undefined){return`${obj}`;}
return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();};const getSelector=element=>{let selector=element.getAttribute('data-bs-target');if(!selector||selector==='#'){let hrefAttr=element.getAttribute('href');if(!hrefAttr||!hrefAttr.includes('#')&&!hrefAttr.startsWith('.')){return null;}
if(hrefAttr.includes('#')&&!hrefAttr.startsWith('#')){hrefAttr=`#${hrefAttr.split('#')[1]}`;}
selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():null;}
return selector;};const getElementFromSelector=element=>{const selector=getSelector(element);return selector?document.querySelector(selector):null;};const isElement=obj=>{if(!obj||typeof obj!=='object'){return false;}
if(typeof obj.jquery!=='undefined'){obj=obj[0];}
return typeof obj.nodeType!=='undefined';};const typeCheckConfig=(componentName,config,configTypes)=>{Object.keys(configTypes).forEach(property=>{const expectedTypes=configTypes[property];const value=config[property];const valueType=value&&isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);}});};const isDisabled=element=>{if(!element||element.nodeType!==Node.ELEMENT_NODE){return true;}
if(element.classList.contains('disabled')){return true;}
if(typeof element.disabled!=='undefined'){return element.disabled;}
return element.hasAttribute('disabled')&&element.getAttribute('disabled')!=='false';};const reflow=element=>{element.offsetHeight;};const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute('data-bs-no-jquery')){return jQuery;}
return null;};const DOMContentLoadedCallbacks=[];const onDOMContentLoaded=callback=>{if(document.readyState==='loading'){if(!DOMContentLoadedCallbacks.length){document.addEventListener('DOMContentLoaded',()=>{DOMContentLoadedCallbacks.forEach(callback=>callback());});}
DOMContentLoadedCallbacks.push(callback);}else{callback();}};const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface;};}});};const enableDismissTrigger=(component,method='hide')=>{const clickEvent=`click.dismiss${component.EVENT_KEY}`;const name=component.NAME;EventHandler__default.default.on(document,clickEvent,`[data-bs-dismiss="${name}"]`,function(event){if(['A','AREA'].includes(this.tagName)){event.preventDefault();}
if(isDisabled(this)){return;}
const target=getElementFromSelector(this)||this.closest(`.${name}`);const instance=component.getOrCreateInstance(target);instance[method]();});};const NAME='toast';const DATA_KEY='bs.toast';const EVENT_KEY=`.${DATA_KEY}`;const EVENT_MOUSEOVER=`mouseover${EVENT_KEY}`;const EVENT_MOUSEOUT=`mouseout${EVENT_KEY}`;const EVENT_FOCUSIN=`focusin${EVENT_KEY}`;const EVENT_FOCUSOUT=`focusout${EVENT_KEY}`;const EVENT_HIDE=`hide${EVENT_KEY}`;const EVENT_HIDDEN=`hidden${EVENT_KEY}`;const EVENT_SHOW=`show${EVENT_KEY}`;const EVENT_SHOWN=`shown${EVENT_KEY}`;const CLASS_NAME_FADE='fade';const CLASS_NAME_HIDE='hide';const CLASS_NAME_SHOW='show';const CLASS_NAME_SHOWING='showing';const DefaultType={animation:'boolean',autohide:'boolean',delay:'number'};const Default={animation:true,autohide:true,delay:5000};class Toast extends BaseComponent__default.default{constructor(element,config){super(element);this._config=this._getConfig(config);this._timeout=null;this._hasMouseInteraction=false;this._hasKeyboardInteraction=false;this._setListeners();}
static get DefaultType(){return DefaultType;}
static get Default(){return Default;}
static get NAME(){return NAME;}
show(){const showEvent=EventHandler__default.default.trigger(this._element,EVENT_SHOW);if(showEvent.defaultPrevented){return;}
this._clearTimeout();if(this._config.animation){this._element.classList.add(CLASS_NAME_FADE);}
const complete=()=>{this._element.classList.remove(CLASS_NAME_SHOWING);EventHandler__default.default.trigger(this._element,EVENT_SHOWN);this._maybeScheduleHide();};this._element.classList.remove(CLASS_NAME_HIDE);reflow(this._element);this._element.classList.add(CLASS_NAME_SHOW);this._element.classList.add(CLASS_NAME_SHOWING);this._queueCallback(complete,this._element,this._config.animation);}
hide(){if(!this._element.classList.contains(CLASS_NAME_SHOW)){return;}
const hideEvent=EventHandler__default.default.trigger(this._element,EVENT_HIDE);if(hideEvent.defaultPrevented){return;}
const complete=()=>{this._element.classList.add(CLASS_NAME_HIDE);this._element.classList.remove(CLASS_NAME_SHOWING);this._element.classList.remove(CLASS_NAME_SHOW);EventHandler__default.default.trigger(this._element,EVENT_HIDDEN);};this._element.classList.add(CLASS_NAME_SHOWING);this._queueCallback(complete,this._element,this._config.animation);}
dispose(){this._clearTimeout();if(this._element.classList.contains(CLASS_NAME_SHOW)){this._element.classList.remove(CLASS_NAME_SHOW);}
super.dispose();}
_getConfig(config){config={...Default,...Manipulator__default.default.getDataAttributes(this._element),...(typeof config==='object'&&config?config:{})};typeCheckConfig(NAME,config,this.constructor.DefaultType);return config;}
_maybeScheduleHide(){if(!this._config.autohide){return;}
if(this._hasMouseInteraction||this._hasKeyboardInteraction){return;}
this._timeout=setTimeout(()=>{this.hide();},this._config.delay);}
_onInteraction(event,isInteracting){switch(event.type){case'mouseover':case'mouseout':this._hasMouseInteraction=isInteracting;break;case'focusin':case'focusout':this._hasKeyboardInteraction=isInteracting;break;}
if(isInteracting){this._clearTimeout();return;}
const nextElement=event.relatedTarget;if(this._element===nextElement||this._element.contains(nextElement)){return;}
this._maybeScheduleHide();}
_setListeners(){EventHandler__default.default.on(this._element,EVENT_MOUSEOVER,event=>this._onInteraction(event,true));EventHandler__default.default.on(this._element,EVENT_MOUSEOUT,event=>this._onInteraction(event,false));EventHandler__default.default.on(this._element,EVENT_FOCUSIN,event=>this._onInteraction(event,true));EventHandler__default.default.on(this._element,EVENT_FOCUSOUT,event=>this._onInteraction(event,false));}
_clearTimeout(){clearTimeout(this._timeout);this._timeout=null;}
static jQueryInterface(config){return this.each(function(){const data=Toast.getOrCreateInstance(this,config);if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError(`No method named "${config}"`);}
data[config](this);}});}}
enableDismissTrigger(Toast);defineJQueryPlugin(Toast);return Toast;}));}(toast$1));var toast=toast$1.exports;(function(){var isWebkit=navigator.userAgent.toLowerCase().indexOf('webkit')>-1,isOpera=navigator.userAgent.toLowerCase().indexOf('opera')>-1,isIe=navigator.userAgent.toLowerCase().indexOf('msie')>-1;if((isWebkit||isOpera||isIe)&&document.getElementById&&window.addEventListener){window.addEventListener('hashchange',function(){var id=location.hash.substring(1),element;if(!/^[A-z0-9_-]+$/.test(id)){return;}
element=document.getElementById(id);if(element){if(!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)){element.tabIndex=-1;}
element.focus();}},false);}})();const BlockStuff=()=>{console.log("I am a block, I am an island... ");};BlockStuff();exports.Alert=alert;exports.Button=button;exports.Carousel=carousel;exports.Collapse=collapse;exports.Dropdown=dropdown;exports.Modal=modal;exports.Offcanvas=offcanvas;exports.Popover=popover;exports.Scrollspy=scrollspy;exports.Tab=tab;exports.Toast=toast;exports.Tooltip=tooltip;Object.defineProperty(exports,'__esModule',{value:true});}));