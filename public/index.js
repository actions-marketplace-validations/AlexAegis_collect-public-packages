import require$$0 from "os";
import require$$0$1 from "fs";
import require$$0$3 from "path";
import require$$2$1 from "http";
import require$$3 from "https";
import "net";
import require$$1 from "tls";
import require$$4 from "events";
import "assert";
import require$$0$2 from "util";
import fs$a, { existsSync } from "node:fs";
import path$d, { join as join$1, relative, normalize as normalize$1 } from "node:path";
import { readFile } from "node:fs/promises";
import require$$0$4 from "stream";
import process$2 from "node:process";
import { fileURLToPath } from "node:url";
import "node:stream";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f2 = n.default;
  if (typeof f2 == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        var args = [null];
        args.push.apply(args, arguments);
        var Ctor = Function.bind.apply(f2, args);
        return new Ctor();
      }
      return f2.apply(this, arguments);
    };
    a.prototype = f2.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var documentAll$2 = typeof document == "object" && document.all;
var IS_HTMLDDA = typeof documentAll$2 == "undefined" && documentAll$2 !== void 0;
var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA
};
var $documentAll$1 = documentAll_1;
var documentAll$1 = $documentAll$1.all;
var isCallable$j = $documentAll$1.IS_HTMLDDA ? function(argument) {
  return typeof argument == "function" || argument === documentAll$1;
} : function(argument) {
  return typeof argument == "function";
};
var objectDefineProperty = {};
var fails$l = function(exec2) {
  try {
    return !!exec2();
  } catch (error2) {
    return true;
  }
};
var fails$k = fails$l;
var descriptors = !fails$k(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
});
var check = function(it) {
  return it && it.Math == Math && it;
};
var global$g = (
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function() {
    return this;
  }() || commonjsGlobal || Function("return this")()
);
var isCallable$i = isCallable$j;
var $documentAll = documentAll_1;
var documentAll = $documentAll.all;
var isObject$g = $documentAll.IS_HTMLDDA ? function(it) {
  return typeof it == "object" ? it !== null : isCallable$i(it) || it === documentAll;
} : function(it) {
  return typeof it == "object" ? it !== null : isCallable$i(it);
};
var global$f = global$g;
var isObject$f = isObject$g;
var document$1 = global$f.document;
var EXISTS$1 = isObject$f(document$1) && isObject$f(document$1.createElement);
var documentCreateElement$1 = function(it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};
var DESCRIPTORS$d = descriptors;
var fails$j = fails$l;
var createElement = documentCreateElement$1;
var ie8DomDefine = !DESCRIPTORS$d && !fails$j(function() {
  return Object.defineProperty(createElement("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
});
var DESCRIPTORS$c = descriptors;
var fails$i = fails$l;
var v8PrototypeDefineBug = DESCRIPTORS$c && fails$i(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: false
  }).prototype != 42;
});
var isObject$e = isObject$g;
var $String$5 = String;
var $TypeError$a = TypeError;
var anObject$c = function(argument) {
  if (isObject$e(argument))
    return argument;
  throw $TypeError$a($String$5(argument) + " is not an object");
};
var fails$h = fails$l;
var functionBindNative = !fails$h(function() {
  var test2 = function() {
  }.bind();
  return typeof test2 != "function" || test2.hasOwnProperty("prototype");
});
var NATIVE_BIND$2 = functionBindNative;
var call$9 = Function.prototype.call;
var functionCall = NATIVE_BIND$2 ? call$9.bind(call$9) : function() {
  return call$9.apply(call$9, arguments);
};
var global$e = global$g;
var isCallable$h = isCallable$j;
var aFunction = function(argument) {
  return isCallable$h(argument) ? argument : void 0;
};
var getBuiltIn$8 = function(namespace, method) {
  return arguments.length < 2 ? aFunction(global$e[namespace]) : global$e[namespace] && global$e[namespace][method];
};
var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype$1 = Function.prototype;
var call$8 = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$1.bind.bind(call$8, call$8);
var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function(fn) {
  return function() {
    return call$8.apply(fn, arguments);
  };
};
var uncurryThis$i = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$i({}.isPrototypeOf);
var engineUserAgent = typeof navigator != "undefined" && String(navigator.userAgent) || "";
var global$d = global$g;
var userAgent = engineUserAgent;
var process$1 = global$d.process;
var Deno$1 = global$d.Deno;
var versions = process$1 && process$1.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match$1, version$1;
if (v8) {
  match$1 = v8.split(".");
  version$1 = match$1[0] > 0 && match$1[0] < 4 ? 1 : +(match$1[0] + match$1[1]);
}
if (!version$1 && userAgent) {
  match$1 = userAgent.match(/Edge\/(\d+)/);
  if (!match$1 || match$1[1] >= 74) {
    match$1 = userAgent.match(/Chrome\/(\d+)/);
    if (match$1)
      version$1 = +match$1[1];
  }
}
var engineV8Version = version$1;
var V8_VERSION = engineV8Version;
var fails$g = fails$l;
var global$c = global$g;
var $String$4 = global$c.String;
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$g(function() {
  var symbol = Symbol();
  return !$String$4(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == "symbol";
var getBuiltIn$7 = getBuiltIn$8;
var isCallable$g = isCallable$j;
var isPrototypeOf$3 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var $Object$4 = Object;
var isSymbol$3 = USE_SYMBOL_AS_UID$1 ? function(it) {
  return typeof it == "symbol";
} : function(it) {
  var $Symbol = getBuiltIn$7("Symbol");
  return isCallable$g($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$4(it));
};
var $String$3 = String;
var tryToString$3 = function(argument) {
  try {
    return $String$3(argument);
  } catch (error2) {
    return "Object";
  }
};
var isCallable$f = isCallable$j;
var tryToString$2 = tryToString$3;
var $TypeError$9 = TypeError;
var aCallable$4 = function(argument) {
  if (isCallable$f(argument))
    return argument;
  throw $TypeError$9(tryToString$2(argument) + " is not a function");
};
var isNullOrUndefined$6 = function(it) {
  return it === null || it === void 0;
};
var aCallable$3 = aCallable$4;
var isNullOrUndefined$5 = isNullOrUndefined$6;
var getMethod$3 = function(V, P) {
  var func = V[P];
  return isNullOrUndefined$5(func) ? void 0 : aCallable$3(func);
};
var call$7 = functionCall;
var isCallable$e = isCallable$j;
var isObject$d = isObject$g;
var $TypeError$8 = TypeError;
var ordinaryToPrimitive$1 = function(input, pref) {
  var fn, val;
  if (pref === "string" && isCallable$e(fn = input.toString) && !isObject$d(val = call$7(fn, input)))
    return val;
  if (isCallable$e(fn = input.valueOf) && !isObject$d(val = call$7(fn, input)))
    return val;
  if (pref !== "string" && isCallable$e(fn = input.toString) && !isObject$d(val = call$7(fn, input)))
    return val;
  throw $TypeError$8("Can't convert object to primitive value");
};
var shared$3 = { exports: {} };
var global$b = global$g;
var defineProperty$8 = Object.defineProperty;
var defineGlobalProperty$3 = function(key, value) {
  try {
    defineProperty$8(global$b, key, { value, configurable: true, writable: true });
  } catch (error2) {
    global$b[key] = value;
  }
  return value;
};
var global$a = global$g;
var defineGlobalProperty$2 = defineGlobalProperty$3;
var SHARED = "__core-js_shared__";
var store$3 = global$a[SHARED] || defineGlobalProperty$2(SHARED, {});
var sharedStore = store$3;
var store$2 = sharedStore;
(shared$3.exports = function(key, value) {
  return store$2[key] || (store$2[key] = value !== void 0 ? value : {});
})("versions", []).push({
  version: "3.31.0",
  mode: "global",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var sharedExports = shared$3.exports;
var isNullOrUndefined$4 = isNullOrUndefined$6;
var $TypeError$7 = TypeError;
var requireObjectCoercible$2 = function(it) {
  if (isNullOrUndefined$4(it))
    throw $TypeError$7("Can't call method on " + it);
  return it;
};
var requireObjectCoercible$1 = requireObjectCoercible$2;
var $Object$3 = Object;
var toObject$3 = function(argument) {
  return $Object$3(requireObjectCoercible$1(argument));
};
var uncurryThis$h = functionUncurryThis;
var toObject$2 = toObject$3;
var hasOwnProperty = uncurryThis$h({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$2(it), key);
};
var uncurryThis$g = functionUncurryThis;
var id$1 = 0;
var postfix = Math.random();
var toString$4 = uncurryThis$g(1 .toString);
var uid$4 = function(key) {
  return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString$4(++id$1 + postfix, 36);
};
var global$9 = global$g;
var shared$2 = sharedExports;
var hasOwn$e = hasOwnProperty_1;
var uid$3 = uid$4;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var Symbol$1 = global$9.Symbol;
var WellKnownSymbolsStore = shared$2("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1["for"] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$3;
var wellKnownSymbol$b = function(name) {
  if (!hasOwn$e(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$e(Symbol$1, name) ? Symbol$1[name] : createWellKnownSymbol("Symbol." + name);
  }
  return WellKnownSymbolsStore[name];
};
var call$6 = functionCall;
var isObject$c = isObject$g;
var isSymbol$2 = isSymbol$3;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$a = wellKnownSymbol$b;
var $TypeError$6 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$a("toPrimitive");
var toPrimitive$1 = function(input, pref) {
  if (!isObject$c(input) || isSymbol$2(input))
    return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === void 0)
      pref = "default";
    result = call$6(exoticToPrim, input, pref);
    if (!isObject$c(result) || isSymbol$2(result))
      return result;
    throw $TypeError$6("Can't convert object to primitive value");
  }
  if (pref === void 0)
    pref = "number";
  return ordinaryToPrimitive(input, pref);
};
var toPrimitive = toPrimitive$1;
var isSymbol$1 = isSymbol$3;
var toPropertyKey$3 = function(argument) {
  var key = toPrimitive(argument, "string");
  return isSymbol$1(key) ? key : key + "";
};
var DESCRIPTORS$b = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$b = anObject$c;
var toPropertyKey$2 = toPropertyKey$3;
var $TypeError$5 = TypeError;
var $defineProperty = Object.defineProperty;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE$1 = "configurable";
var WRITABLE = "writable";
objectDefineProperty.f = DESCRIPTORS$b ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$b(O);
  P = toPropertyKey$2(P);
  anObject$b(Attributes);
  if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty2(O, P, Attributes) {
  anObject$b(O);
  P = toPropertyKey$2(P);
  anObject$b(Attributes);
  if (IE8_DOM_DEFINE$1)
    try {
      return $defineProperty(O, P, Attributes);
    } catch (error2) {
    }
  if ("get" in Attributes || "set" in Attributes)
    throw $TypeError$5("Accessors not supported");
  if ("value" in Attributes)
    O[P] = Attributes.value;
  return O;
};
var makeBuiltIn$3 = { exports: {} };
var DESCRIPTORS$a = descriptors;
var hasOwn$d = hasOwnProperty_1;
var FunctionPrototype = Function.prototype;
var getDescriptor = DESCRIPTORS$a && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$d(FunctionPrototype, "name");
var PROPER = EXISTS && function something() {
}.name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$a || DESCRIPTORS$a && getDescriptor(FunctionPrototype, "name").configurable);
var functionName = {
  EXISTS,
  PROPER,
  CONFIGURABLE
};
var uncurryThis$f = functionUncurryThis;
var isCallable$d = isCallable$j;
var store$1 = sharedStore;
var functionToString = uncurryThis$f(Function.toString);
if (!isCallable$d(store$1.inspectSource)) {
  store$1.inspectSource = function(it) {
    return functionToString(it);
  };
}
var inspectSource$2 = store$1.inspectSource;
var global$8 = global$g;
var isCallable$c = isCallable$j;
var WeakMap$2 = global$8.WeakMap;
var weakMapBasicDetection = isCallable$c(WeakMap$2) && /native code/.test(String(WeakMap$2));
var createPropertyDescriptor$7 = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var DESCRIPTORS$9 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$6 = createPropertyDescriptor$7;
var createNonEnumerableProperty$4 = DESCRIPTORS$9 ? function(object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$6(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var shared$1 = sharedExports;
var uid$2 = uid$4;
var keys = shared$1("keys");
var sharedKey$3 = function(key) {
  return keys[key] || (keys[key] = uid$2(key));
};
var hiddenKeys$5 = {};
var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$7 = global$g;
var isObject$b = isObject$g;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$c = hasOwnProperty_1;
var shared = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$4 = hiddenKeys$5;
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError$2 = global$7.TypeError;
var WeakMap$1 = global$7.WeakMap;
var set$1, get$1, has;
var enforce = function(it) {
  return has(it) ? get$1(it) : set$1(it, {});
};
var getterFor$1 = function(TYPE) {
  return function(it) {
    var state;
    if (!isObject$b(it) || (state = get$1(it)).type !== TYPE) {
      throw TypeError$2("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap$1());
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  set$1 = function(it, metadata) {
    if (store.has(it))
      throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get$1 = function(it) {
    return store.get(it) || {};
  };
  has = function(it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2("state");
  hiddenKeys$4[STATE] = true;
  set$1 = function(it, metadata) {
    if (hasOwn$c(it, STATE))
      throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get$1 = function(it) {
    return hasOwn$c(it, STATE) ? it[STATE] : {};
  };
  has = function(it) {
    return hasOwn$c(it, STATE);
  };
}
var internalState = {
  set: set$1,
  get: get$1,
  has,
  enforce,
  getterFor: getterFor$1
};
var uncurryThis$e = functionUncurryThis;
var fails$f = fails$l;
var isCallable$b = isCallable$j;
var hasOwn$b = hasOwnProperty_1;
var DESCRIPTORS$8 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$2;
var InternalStateModule$3 = internalState;
var enforceInternalState = InternalStateModule$3.enforce;
var getInternalState$2 = InternalStateModule$3.get;
var $String$2 = String;
var defineProperty$7 = Object.defineProperty;
var stringSlice$1 = uncurryThis$e("".slice);
var replace$1 = uncurryThis$e("".replace);
var join = uncurryThis$e([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS$8 && !fails$f(function() {
  return defineProperty$7(function() {
  }, "length", { value: 8 }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn$2 = makeBuiltIn$3.exports = function(value, name, options) {
  if (stringSlice$1($String$2(name), 0, 7) === "Symbol(") {
    name = "[" + replace$1($String$2(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
  }
  if (options && options.getter)
    name = "get " + name;
  if (options && options.setter)
    name = "set " + name;
  if (!hasOwn$b(value, "name") || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
    if (DESCRIPTORS$8)
      defineProperty$7(value, "name", { value: name, configurable: true });
    else
      value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$b(options, "arity") && value.length !== options.arity) {
    defineProperty$7(value, "length", { value: options.arity });
  }
  try {
    if (options && hasOwn$b(options, "constructor") && options.constructor) {
      if (DESCRIPTORS$8)
        defineProperty$7(value, "prototype", { writable: false });
    } else if (value.prototype)
      value.prototype = void 0;
  } catch (error2) {
  }
  var state = enforceInternalState(value);
  if (!hasOwn$b(state, "source")) {
    state.source = join(TEMPLATE, typeof name == "string" ? name : "");
  }
  return value;
};
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$b(this) && getInternalState$2(this).source || inspectSource$1(this);
}, "toString");
var makeBuiltInExports = makeBuiltIn$3.exports;
var isCallable$a = isCallable$j;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;
var defineBuiltIn$8 = function(O, key, value, options) {
  if (!options)
    options = {};
  var simple = options.enumerable;
  var name = options.name !== void 0 ? options.name : key;
  if (isCallable$a(value))
    makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple)
      O[key] = value;
    else
      defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe)
        delete O[key];
      else if (O[key])
        simple = true;
    } catch (error2) {
    }
    if (simple)
      O[key] = value;
    else
      definePropertyModule$3.f(O, key, {
        value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
  }
  return O;
};
var objectDefineProperties = {};
var uncurryThis$d = functionUncurryThis;
var toString$3 = uncurryThis$d({}.toString);
var stringSlice = uncurryThis$d("".slice);
var classofRaw$2 = function(it) {
  return stringSlice(toString$3(it), 8, -1);
};
var uncurryThis$c = functionUncurryThis;
var fails$e = fails$l;
var classof$9 = classofRaw$2;
var $Object$2 = Object;
var split = uncurryThis$c("".split);
var indexedObject = fails$e(function() {
  return !$Object$2("z").propertyIsEnumerable(0);
}) ? function(it) {
  return classof$9(it) == "String" ? split(it, "") : $Object$2(it);
} : $Object$2;
var IndexedObject = indexedObject;
var requireObjectCoercible = requireObjectCoercible$2;
var toIndexedObject$6 = function(it) {
  return IndexedObject(requireObjectCoercible(it));
};
var ceil = Math.ceil;
var floor = Math.floor;
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};
var trunc2 = mathTrunc;
var toIntegerOrInfinity$2 = function(argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : trunc2(number);
};
var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
var max$1 = Math.max;
var min$1 = Math.min;
var toAbsoluteIndex$2 = function(index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
};
var toIntegerOrInfinity = toIntegerOrInfinity$2;
var min = Math.min;
var toLength$1 = function(argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
};
var toLength = toLength$1;
var lengthOfArrayLike$4 = function(obj) {
  return toLength(obj.length);
};
var toIndexedObject$5 = toIndexedObject$6;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$4;
var createMethod = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIndexedObject$5($this);
    var length = lengthOfArrayLike$3(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el)
      while (length > index) {
        value = O[index++];
        if (value != value)
          return true;
      }
    else
      for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el)
          return IS_INCLUDES || index || 0;
      }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};
var uncurryThis$b = functionUncurryThis;
var hasOwn$a = hasOwnProperty_1;
var toIndexedObject$4 = toIndexedObject$6;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$5;
var push$2 = uncurryThis$b([].push);
var objectKeysInternal = function(object, names) {
  var O = toIndexedObject$4(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O)
    !hasOwn$a(hiddenKeys$3, key) && hasOwn$a(O, key) && push$2(result, key);
  while (names.length > i)
    if (hasOwn$a(O, key = names[i++])) {
      ~indexOf(result, key) || push$2(result, key);
    }
  return result;
};
var enumBugKeys$3 = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
];
var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var objectKeys$2 = Object.keys || function keys2(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};
var DESCRIPTORS$7 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$2 = objectDefineProperty;
var anObject$a = anObject$c;
var toIndexedObject$3 = toIndexedObject$6;
var objectKeys$1 = objectKeys$2;
objectDefineProperties.f = DESCRIPTORS$7 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$a(O);
  var props = toIndexedObject$3(Properties);
  var keys4 = objectKeys$1(Properties);
  var length = keys4.length;
  var index = 0;
  var key;
  while (length > index)
    definePropertyModule$2.f(O, key = keys4[index++], props[key]);
  return O;
};
var getBuiltIn$6 = getBuiltIn$8;
var html$1 = getBuiltIn$6("document", "documentElement");
var anObject$9 = anObject$c;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$5;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey$1 = sharedKey$3;
var GT = ">";
var LT = "<";
var PROTOTYPE = "prototype";
var SCRIPT = "script";
var IE_PROTO$1 = sharedKey$1("IE_PROTO");
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
  return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function(activeXDocument2) {
  activeXDocument2.write(scriptTag(""));
  activeXDocument2.close();
  var temp = activeXDocument2.parentWindow.Object;
  activeXDocument2 = null;
  return temp;
};
var NullProtoObjectViaIFrame = function() {
  var iframe = documentCreateElement("iframe");
  var JS = "java" + SCRIPT + ":";
  var iframeDocument;
  iframe.style.display = "none";
  html.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag("document.F=Object"));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function() {
  try {
    activeXDocument = new ActiveXObject("htmlfile");
  } catch (error2) {
  }
  NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
  var length = enumBugKeys$1.length;
  while (length--)
    delete NullProtoObject[PROTOTYPE][enumBugKeys$1[length]];
  return NullProtoObject();
};
hiddenKeys$2[IE_PROTO$1] = true;
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$9(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    result[IE_PROTO$1] = O;
  } else
    result = NullProtoObject();
  return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
};
var wellKnownSymbol$9 = wellKnownSymbol$b;
var TO_STRING_TAG$2 = wellKnownSymbol$9("toStringTag");
var test = {};
test[TO_STRING_TAG$2] = "z";
var toStringTagSupport = String(test) === "[object z]";
var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$9 = isCallable$j;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$8 = wellKnownSymbol$b;
var TO_STRING_TAG$1 = wellKnownSymbol$8("toStringTag");
var $Object$1 = Object;
var CORRECT_ARGUMENTS = classofRaw$1(function() {
  return arguments;
}()) == "Arguments";
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (error2) {
  }
};
var classof$8 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function(it) {
  var O, tag, result;
  return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$1)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw$1(O) : (result = classofRaw$1(O)) == "Object" && isCallable$9(O.callee) ? "Arguments" : result;
};
var classof$7 = classof$8;
var $String$1 = String;
var toString$2 = function(argument) {
  if (classof$7(argument) === "Symbol")
    throw TypeError("Cannot convert a Symbol value to a string");
  return $String$1(argument);
};
var toString$1 = toString$2;
var normalizeStringArgument$3 = function(argument, $default) {
  return argument === void 0 ? arguments.length < 2 ? "" : $default : toString$1(argument);
};
var DESCRIPTORS$6 = descriptors;
var fails$d = fails$l;
var anObject$8 = anObject$c;
var create$4 = objectCreate;
var normalizeStringArgument$2 = normalizeStringArgument$3;
var nativeErrorToString = Error.prototype.toString;
var INCORRECT_TO_STRING$2 = fails$d(function() {
  if (DESCRIPTORS$6) {
    var object = create$4(Object.defineProperty({}, "name", { get: function() {
      return this === object;
    } }));
    if (nativeErrorToString.call(object) !== "true")
      return true;
  }
  return nativeErrorToString.call({ message: 1, name: 2 }) !== "2: 1" || nativeErrorToString.call({}) !== "Error";
});
var errorToString$2 = INCORRECT_TO_STRING$2 ? function toString2() {
  var O = anObject$8(this);
  var name = normalizeStringArgument$2(O.name, "Error");
  var message = normalizeStringArgument$2(O.message);
  return !name ? message : !message ? name : name + ": " + message;
} : nativeErrorToString;
var defineBuiltIn$7 = defineBuiltIn$8;
var errorToString$1 = errorToString$2;
var ErrorPrototype$1 = Error.prototype;
if (ErrorPrototype$1.toString !== errorToString$1) {
  defineBuiltIn$7(ErrorPrototype$1, "toString", errorToString$1);
}
var wellKnownSymbol$7 = wellKnownSymbol$b;
var create$3 = objectCreate;
var defineProperty$6 = objectDefineProperty.f;
var UNSCOPABLES = wellKnownSymbol$7("unscopables");
var ArrayPrototype$1 = Array.prototype;
if (ArrayPrototype$1[UNSCOPABLES] == void 0) {
  defineProperty$6(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$3(null)
  });
}
var addToUnscopables$1 = function(key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};
var iterators = {};
var objectGetOwnPropertyDescriptor = {};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor2 = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor2 && descriptor2.enumerable;
} : $propertyIsEnumerable;
var DESCRIPTORS$5 = descriptors;
var call$5 = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$5 = createPropertyDescriptor$7;
var toIndexedObject$2 = toIndexedObject$6;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$9 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE)
    try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error2) {
    }
  if (hasOwn$9(O, P))
    return createPropertyDescriptor$5(!call$5(propertyIsEnumerableModule.f, O, P), O[P]);
};
var objectGetOwnPropertyNames = {};
var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys.concat("length", "prototype");
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys$1);
};
var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn$5 = getBuiltIn$8;
var uncurryThis$a = functionUncurryThis;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$7 = anObject$c;
var concat = uncurryThis$a([].concat);
var ownKeys$1 = getBuiltIn$5("Reflect", "ownKeys") || function ownKeys(it) {
  var keys4 = getOwnPropertyNamesModule$1.f(anObject$7(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys4, getOwnPropertySymbols(it)) : keys4;
};
var hasOwn$8 = hasOwnProperty_1;
var ownKeys2 = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;
var copyConstructorProperties$1 = function(target, source, exceptions) {
  var keys4 = ownKeys2(source);
  var defineProperty4 = definePropertyModule$1.f;
  var getOwnPropertyDescriptor3 = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys4.length; i++) {
    var key = keys4[i];
    if (!hasOwn$8(target, key) && !(exceptions && hasOwn$8(exceptions, key))) {
      defineProperty4(target, key, getOwnPropertyDescriptor3(source, key));
    }
  }
};
var fails$c = fails$l;
var isCallable$8 = isCallable$j;
var replacement = /#|\.prototype\./;
var isForced$2 = function(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$8(detection) ? fails$c(detection) : !!detection;
};
var normalize = isForced$2.normalize = function(string2) {
  return String(string2).replace(replacement, ".").toLowerCase();
};
var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = "N";
var POLYFILL = isForced$2.POLYFILL = "P";
var isForced_1 = isForced$2;
var global$6 = global$g;
var getOwnPropertyDescriptor2 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var defineBuiltIn$6 = defineBuiltIn$8;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$1 = isForced_1;
var _export = function(options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor2;
  if (GLOBAL) {
    target = global$6;
  } else if (STATIC) {
    target = global$6[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$6[TARGET] || {}).prototype;
  }
  if (target)
    for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor2 = getOwnPropertyDescriptor2(target, key);
        targetProperty = descriptor2 && descriptor2.value;
      } else
        targetProperty = target[key];
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
      if (!FORCED && targetProperty !== void 0) {
        if (typeof sourceProperty == typeof targetProperty)
          continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$2(sourceProperty, "sham", true);
      }
      defineBuiltIn$6(target, key, sourceProperty, options);
    }
};
var fails$b = fails$l;
var correctPrototypeGetter = !fails$b(function() {
  function F() {
  }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});
var hasOwn$7 = hasOwnProperty_1;
var isCallable$7 = isCallable$j;
var toObject$1 = toObject$3;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
var IE_PROTO = sharedKey("IE_PROTO");
var $Object = Object;
var ObjectPrototype = $Object.prototype;
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
  var object = toObject$1(O);
  if (hasOwn$7(object, IE_PROTO))
    return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$7(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }
  return object instanceof $Object ? ObjectPrototype : null;
};
var fails$a = fails$l;
var isCallable$6 = isCallable$j;
var isObject$a = isObject$g;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$5 = defineBuiltIn$8;
var wellKnownSymbol$6 = wellKnownSymbol$b;
var ITERATOR$4 = wellKnownSymbol$6("iterator");
var BUGGY_SAFARI_ITERATORS$1 = false;
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
if ([].keys) {
  arrayIterator = [].keys();
  if (!("next" in arrayIterator))
    BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
      IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}
var NEW_ITERATOR_PROTOTYPE = !isObject$a(IteratorPrototype$2) || fails$a(function() {
  var test2 = {};
  return IteratorPrototype$2[ITERATOR$4].call(test2) !== test2;
});
if (NEW_ITERATOR_PROTOTYPE)
  IteratorPrototype$2 = {};
if (!isCallable$6(IteratorPrototype$2[ITERATOR$4])) {
  defineBuiltIn$5(IteratorPrototype$2, ITERATOR$4, function() {
    return this;
  });
}
var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};
var defineProperty$5 = objectDefineProperty.f;
var hasOwn$6 = hasOwnProperty_1;
var wellKnownSymbol$5 = wellKnownSymbol$b;
var TO_STRING_TAG = wellKnownSymbol$5("toStringTag");
var setToStringTag$4 = function(target, TAG, STATIC) {
  if (target && !STATIC)
    target = target.prototype;
  if (target && !hasOwn$6(target, TO_STRING_TAG)) {
    defineProperty$5(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};
var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$2 = objectCreate;
var createPropertyDescriptor$4 = createPropertyDescriptor$7;
var setToStringTag$3 = setToStringTag$4;
var Iterators$4 = iterators;
var returnThis$1 = function() {
  return this;
};
var iteratorCreateConstructor = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG2 = NAME + " Iterator";
  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$4(+!ENUMERABLE_NEXT, next) });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG2, false);
  Iterators$4[TO_STRING_TAG2] = returnThis$1;
  return IteratorConstructor;
};
var uncurryThis$9 = functionUncurryThis;
var aCallable$2 = aCallable$4;
var functionUncurryThisAccessor = function(object, key, method) {
  try {
    return uncurryThis$9(aCallable$2(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error2) {
  }
};
var isCallable$5 = isCallable$j;
var $String = String;
var $TypeError$4 = TypeError;
var aPossiblePrototype$1 = function(argument) {
  if (typeof argument == "object" || isCallable$5(argument))
    return argument;
  throw $TypeError$4("Can't set " + $String(argument) + " as a prototype");
};
var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$6 = anObject$c;
var aPossiblePrototype = aPossiblePrototype$1;
var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var CORRECT_SETTER = false;
  var test2 = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
    setter(test2, []);
    CORRECT_SETTER = test2 instanceof Array;
  } catch (error2) {
  }
  return function setPrototypeOf2(O, proto) {
    anObject$6(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER)
      setter(O, proto);
    else
      O.__proto__ = proto;
    return O;
  };
}() : void 0);
var $$6 = _export;
var call$4 = functionCall;
var FunctionName = functionName;
var isCallable$4 = isCallable$j;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$4;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var defineBuiltIn$4 = defineBuiltIn$8;
var wellKnownSymbol$4 = wellKnownSymbol$b;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;
var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$3 = wellKnownSymbol$4("iterator");
var KEYS = "keys";
var VALUES = "values";
var ENTRIES = "entries";
var returnThis = function() {
  return this;
};
var iteratorDefine = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);
  var getIterationMethod = function(KIND) {
    if (KIND === DEFAULT && defaultIterator)
      return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
      return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS:
        return function keys4() {
          return new IteratorConstructor(this, KIND);
        };
      case VALUES:
        return function values2() {
          return new IteratorConstructor(this, KIND);
        };
      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }
    return function() {
      return new IteratorConstructor(this);
    };
  };
  var TO_STRING_TAG2 = NAME + " Iterator";
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf$1) {
          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$3])) {
          defineBuiltIn$4(CurrentIteratorPrototype, ITERATOR$3, returnThis);
        }
      }
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG2, true);
    }
  }
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$1(IterablePrototype, "name", VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values2() {
        return call$4(nativeIterator, this);
      };
    }
  }
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED)
      for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$4(IterablePrototype, KEY, methods[KEY]);
        }
      }
    else
      $$6({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }
  if (IterablePrototype[ITERATOR$3] !== defaultIterator) {
    defineBuiltIn$4(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;
  return methods;
};
var createIterResultObject$2 = function(value, done) {
  return { value, done };
};
var toIndexedObject$1 = toIndexedObject$6;
var addToUnscopables = addToUnscopables$1;
var Iterators$2 = iterators;
var InternalStateModule$2 = internalState;
var defineProperty$4 = objectDefineProperty.f;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$2;
var DESCRIPTORS$4 = descriptors;
var ARRAY_ITERATOR = "Array Iterator";
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState$1 = InternalStateModule$2.getterFor(ARRAY_ITERATOR);
defineIterator$1(Array, "Array", function(iterated, kind) {
  setInternalState$2(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$1(iterated),
    // target
    index: 0,
    // next index
    kind
    // kind
  });
}, function() {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = void 0;
    return createIterResultObject$1(void 0, true);
  }
  if (kind == "keys")
    return createIterResultObject$1(index, false);
  if (kind == "values")
    return createIterResultObject$1(target[index], false);
  return createIterResultObject$1([index, target[index]], false);
}, "values");
var values = Iterators$2.Arguments = Iterators$2.Array;
addToUnscopables("keys");
addToUnscopables("values");
addToUnscopables("entries");
if (DESCRIPTORS$4 && values.name !== "values")
  try {
    defineProperty$4(values, "name", { value: "values" });
  } catch (error2) {
  }
var $$5 = _export;
var toObject = toObject$3;
var nativeKeys = objectKeys$2;
var fails$9 = fails$l;
var FAILS_ON_PRIMITIVES$1 = fails$9(function() {
  nativeKeys(1);
});
$$5({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
  keys: function keys3(it) {
    return nativeKeys(toObject(it));
  }
});
var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$6 = classof$8;
var objectToString$1 = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString3() {
  return "[object " + classof$6(this) + "]";
};
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineBuiltIn$3 = defineBuiltIn$8;
var toString4 = objectToString$1;
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn$3(Object.prototype, "toString", toString4, { unsafe: true });
}
var internalMetadata = { exports: {} };
var objectGetOwnPropertyNamesExternal = {};
var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor$3 = createPropertyDescriptor$7;
var createProperty$2 = function(object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object)
    definePropertyModule.f(object, propertyKey, createPropertyDescriptor$3(0, value));
  else
    object[propertyKey] = value;
};
var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike$2 = lengthOfArrayLike$4;
var createProperty$1 = createProperty$2;
var $Array = Array;
var max = Math.max;
var arraySliceSimple = function(O, start, end) {
  var length = lengthOfArrayLike$2(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++)
    createProperty$1(result, n, O[k]);
  result.length = n;
  return result;
};
var classof$5 = classofRaw$2;
var toIndexedObject = toIndexedObject$6;
var $getOwnPropertyNames = objectGetOwnPropertyNames.f;
var arraySlice = arraySliceSimple;
var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function(it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error2) {
    return arraySlice(windowNames);
  }
};
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames2(it) {
  return windowNames && classof$5(it) == "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
};
var fails$8 = fails$l;
var arrayBufferNonExtensible = fails$8(function() {
  if (typeof ArrayBuffer == "function") {
    var buffer = new ArrayBuffer(8);
    if (Object.isExtensible(buffer))
      Object.defineProperty(buffer, "a", { value: 8 });
  }
});
var fails$7 = fails$l;
var isObject$9 = isObject$g;
var classof$4 = classofRaw$2;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails$7(function() {
  $isExtensible(1);
});
var objectIsExtensible = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
  if (!isObject$9(it))
    return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$4(it) == "ArrayBuffer")
    return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;
var fails$6 = fails$l;
var freezing = !fails$6(function() {
  return Object.isExtensible(Object.preventExtensions({}));
});
var $$4 = _export;
var uncurryThis$8 = functionUncurryThis;
var hiddenKeys = hiddenKeys$5;
var isObject$8 = isObject$g;
var hasOwn$5 = hasOwnProperty_1;
var defineProperty$3 = objectDefineProperty.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var isExtensible2 = objectIsExtensible;
var uid$1 = uid$4;
var FREEZING = freezing;
var REQUIRED = false;
var METADATA = uid$1("meta");
var id = 0;
var setMetadata = function(it) {
  defineProperty$3(it, METADATA, { value: {
    objectID: "O" + id++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
};
var fastKey$1 = function(it, create3) {
  if (!isObject$8(it))
    return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
  if (!hasOwn$5(it, METADATA)) {
    if (!isExtensible2(it))
      return "F";
    if (!create3)
      return "E";
    setMetadata(it);
  }
  return it[METADATA].objectID;
};
var getWeakData = function(it, create3) {
  if (!hasOwn$5(it, METADATA)) {
    if (!isExtensible2(it))
      return true;
    if (!create3)
      return false;
    setMetadata(it);
  }
  return it[METADATA].weakData;
};
var onFreeze = function(it) {
  if (FREEZING && REQUIRED && isExtensible2(it) && !hasOwn$5(it, METADATA))
    setMetadata(it);
  return it;
};
var enable = function() {
  meta$1.enable = function() {
  };
  REQUIRED = true;
  var getOwnPropertyNames3 = getOwnPropertyNamesModule.f;
  var splice = uncurryThis$8([].splice);
  var test2 = {};
  test2[METADATA] = 1;
  if (getOwnPropertyNames3(test2).length) {
    getOwnPropertyNamesModule.f = function(it) {
      var result = getOwnPropertyNames3(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      }
      return result;
    };
    $$4({ target: "Object", stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};
var meta$1 = internalMetadata.exports = {
  enable,
  fastKey: fastKey$1,
  getWeakData,
  onFreeze
};
hiddenKeys[METADATA] = true;
var internalMetadataExports = internalMetadata.exports;
var classofRaw = classofRaw$2;
var uncurryThis$7 = functionUncurryThis;
var functionUncurryThisClause = function(fn) {
  if (classofRaw(fn) === "Function")
    return uncurryThis$7(fn);
};
var uncurryThis$6 = functionUncurryThisClause;
var aCallable$1 = aCallable$4;
var NATIVE_BIND = functionBindNative;
var bind$2 = uncurryThis$6(uncurryThis$6.bind);
var functionBindContext = function(fn, that) {
  aCallable$1(fn);
  return that === void 0 ? fn : NATIVE_BIND ? bind$2(fn, that) : function() {
    return fn.apply(that, arguments);
  };
};
var wellKnownSymbol$3 = wellKnownSymbol$b;
var Iterators$1 = iterators;
var ITERATOR$2 = wellKnownSymbol$3("iterator");
var ArrayPrototype = Array.prototype;
var isArrayIteratorMethod$1 = function(it) {
  return it !== void 0 && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};
var classof$3 = classof$8;
var getMethod$1 = getMethod$3;
var isNullOrUndefined$3 = isNullOrUndefined$6;
var Iterators = iterators;
var wellKnownSymbol$2 = wellKnownSymbol$b;
var ITERATOR$1 = wellKnownSymbol$2("iterator");
var getIteratorMethod$2 = function(it) {
  if (!isNullOrUndefined$3(it))
    return getMethod$1(it, ITERATOR$1) || getMethod$1(it, "@@iterator") || Iterators[classof$3(it)];
};
var call$3 = functionCall;
var aCallable = aCallable$4;
var anObject$5 = anObject$c;
var tryToString$1 = tryToString$3;
var getIteratorMethod$1 = getIteratorMethod$2;
var $TypeError$3 = TypeError;
var getIterator$1 = function(argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable(iteratorMethod))
    return anObject$5(call$3(iteratorMethod, argument));
  throw $TypeError$3(tryToString$1(argument) + " is not iterable");
};
var call$2 = functionCall;
var anObject$4 = anObject$c;
var getMethod = getMethod$3;
var iteratorClose$1 = function(iterator2, kind, value) {
  var innerResult, innerError;
  anObject$4(iterator2);
  try {
    innerResult = getMethod(iterator2, "return");
    if (!innerResult) {
      if (kind === "throw")
        throw value;
      return value;
    }
    innerResult = call$2(innerResult, iterator2);
  } catch (error2) {
    innerError = true;
    innerResult = error2;
  }
  if (kind === "throw")
    throw value;
  if (innerError)
    throw innerResult;
  anObject$4(innerResult);
  return value;
};
var bind$1 = functionBindContext;
var call$1 = functionCall;
var anObject$3 = anObject$c;
var tryToString = tryToString$3;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$4;
var isPrototypeOf$2 = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;
var $TypeError$2 = TypeError;
var Result = function(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$3 = function(iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$1(unboundFunction, that);
  var iterator2, iterFn, index, length, result, next, step;
  var stop = function(condition) {
    if (iterator2)
      iteratorClose(iterator2, "normal", condition);
    return new Result(true, condition);
  };
  var callFn = function(value) {
    if (AS_ENTRIES) {
      anObject$3(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_RECORD) {
    iterator2 = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator2 = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn)
      throw $TypeError$2(tryToString(iterable) + " is not iterable");
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$1(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$2(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    }
    iterator2 = getIterator(iterable, iterFn);
  }
  next = IS_RECORD ? iterable.next : iterator2.next;
  while (!(step = call$1(next, iterator2)).done) {
    try {
      result = callFn(step.value);
    } catch (error2) {
      iteratorClose(iterator2, "throw", error2);
    }
    if (typeof result == "object" && result && isPrototypeOf$2(ResultPrototype, result))
      return result;
  }
  return new Result(false);
};
var isPrototypeOf$1 = objectIsPrototypeOf;
var $TypeError$1 = TypeError;
var anInstance$4 = function(it, Prototype) {
  if (isPrototypeOf$1(Prototype, it))
    return it;
  throw $TypeError$1("Incorrect invocation");
};
var wellKnownSymbol$1 = wellKnownSymbol$b;
var ITERATOR = wellKnownSymbol$1("iterator");
var SAFE_CLOSING = false;
try {
  var called = 0;
  var iteratorWithReturn = {
    next: function() {
      return { done: !!called++ };
    },
    "return": function() {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function() {
    return this;
  };
  Array.from(iteratorWithReturn, function() {
    throw 2;
  });
} catch (error2) {
}
var checkCorrectnessOfIteration$1 = function(exec2, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING)
    return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function() {
      return {
        next: function() {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec2(object);
  } catch (error2) {
  }
  return ITERATION_SUPPORT;
};
var isCallable$3 = isCallable$j;
var isObject$7 = isObject$g;
var setPrototypeOf = objectSetPrototypeOf;
var inheritIfRequired$2 = function($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$3(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$7(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype
  )
    setPrototypeOf($this, NewTargetPrototype);
  return $this;
};
var $$3 = _export;
var global$5 = global$g;
var uncurryThis$5 = functionUncurryThis;
var isForced = isForced_1;
var defineBuiltIn$2 = defineBuiltIn$8;
var InternalMetadataModule = internalMetadataExports;
var iterate$2 = iterate$3;
var anInstance$3 = anInstance$4;
var isCallable$2 = isCallable$j;
var isNullOrUndefined$2 = isNullOrUndefined$6;
var isObject$6 = isObject$g;
var fails$5 = fails$l;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var setToStringTag$1 = setToStringTag$4;
var inheritIfRequired$1 = inheritIfRequired$2;
var collection$2 = function(CONSTRUCTOR_NAME, wrapper, common2) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
  var ADDER = IS_MAP ? "set" : "add";
  var NativeConstructor = global$5[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};
  var fixMethod = function(KEY) {
    var uncurriedNativeMethod = uncurryThis$5(NativePrototype[KEY]);
    defineBuiltIn$2(
      NativePrototype,
      KEY,
      KEY == "add" ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == "delete" ? function(key) {
        return IS_WEAK && !isObject$6(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == "get" ? function get2(key) {
        return IS_WEAK && !isObject$6(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == "has" ? function has2(key) {
        return IS_WEAK && !isObject$6(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set2(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };
  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable$2(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$5(function() {
      new NativeConstructor().entries().next();
    }))
  );
  if (REPLACE) {
    Constructor = common2.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    var THROWS_ON_PRIMITIVES = fails$5(function() {
      instance.has(1);
    });
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
      new NativeConstructor(iterable);
    });
    var BUGGY_ZERO = !IS_WEAK && fails$5(function() {
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--)
        $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function(dummy, iterable) {
        anInstance$3(dummy, NativePrototype);
        var that = inheritIfRequired$1(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined$2(iterable))
          iterate$2(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod("delete");
      fixMethod("has");
      IS_MAP && fixMethod("get");
    }
    if (BUGGY_ZERO || HASNT_CHAINING)
      fixMethod(ADDER);
    if (IS_WEAK && NativePrototype.clear)
      delete NativePrototype.clear;
  }
  exported[CONSTRUCTOR_NAME] = Constructor;
  $$3({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);
  setToStringTag$1(Constructor, CONSTRUCTOR_NAME);
  if (!IS_WEAK)
    common2.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};
var makeBuiltIn = makeBuiltInExports;
var defineProperty$2 = objectDefineProperty;
var defineBuiltInAccessor$3 = function(target, name, descriptor2) {
  if (descriptor2.get)
    makeBuiltIn(descriptor2.get, name, { getter: true });
  if (descriptor2.set)
    makeBuiltIn(descriptor2.set, name, { setter: true });
  return defineProperty$2.f(target, name, descriptor2);
};
var defineBuiltIn$1 = defineBuiltIn$8;
var defineBuiltIns$1 = function(target, src, options) {
  for (var key in src)
    defineBuiltIn$1(target, key, src[key], options);
  return target;
};
var getBuiltIn$4 = getBuiltIn$8;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
var wellKnownSymbol = wellKnownSymbol$b;
var DESCRIPTORS$3 = descriptors;
var SPECIES = wellKnownSymbol("species");
var setSpecies$1 = function(CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);
  if (DESCRIPTORS$3 && Constructor && !Constructor[SPECIES]) {
    defineBuiltInAccessor$2(Constructor, SPECIES, {
      configurable: true,
      get: function() {
        return this;
      }
    });
  }
};
var create$1 = objectCreate;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
var defineBuiltIns = defineBuiltIns$1;
var bind = functionBindContext;
var anInstance$2 = anInstance$4;
var isNullOrUndefined$1 = isNullOrUndefined$6;
var iterate$1 = iterate$3;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$2;
var setSpecies = setSpecies$1;
var DESCRIPTORS$2 = descriptors;
var fastKey = internalMetadataExports.fastKey;
var InternalStateModule$1 = internalState;
var setInternalState$1 = InternalStateModule$1.set;
var internalStateGetterFor = InternalStateModule$1.getterFor;
var collectionStrong$2 = {
  getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function(that, iterable) {
      anInstance$2(that, Prototype);
      setInternalState$1(that, {
        type: CONSTRUCTOR_NAME,
        index: create$1(null),
        first: void 0,
        last: void 0,
        size: 0
      });
      if (!DESCRIPTORS$2)
        that.size = 0;
      if (!isNullOrUndefined$1(iterable))
        iterate$1(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
    });
    var Prototype = Constructor.prototype;
    var getInternalState2 = internalStateGetterFor(CONSTRUCTOR_NAME);
    var define2 = function(that, key, value) {
      var state = getInternalState2(that);
      var entry2 = getEntry(that, key);
      var previous, index;
      if (entry2) {
        entry2.value = value;
      } else {
        state.last = entry2 = {
          index: index = fastKey(key, true),
          key,
          value,
          previous: previous = state.last,
          next: void 0,
          removed: false
        };
        if (!state.first)
          state.first = entry2;
        if (previous)
          previous.next = entry2;
        if (DESCRIPTORS$2)
          state.size++;
        else
          that.size++;
        if (index !== "F")
          state.index[index] = entry2;
      }
      return that;
    };
    var getEntry = function(that, key) {
      var state = getInternalState2(that);
      var index = fastKey(key);
      var entry2;
      if (index !== "F")
        return state.index[index];
      for (entry2 = state.first; entry2; entry2 = entry2.next) {
        if (entry2.key == key)
          return entry2;
      }
    };
    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState2(that);
        var data2 = state.index;
        var entry2 = state.first;
        while (entry2) {
          entry2.removed = true;
          if (entry2.previous)
            entry2.previous = entry2.previous.next = void 0;
          delete data2[entry2.index];
          entry2 = entry2.next;
        }
        state.first = state.last = void 0;
        if (DESCRIPTORS$2)
          state.size = 0;
        else
          that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      "delete": function(key) {
        var that = this;
        var state = getInternalState2(that);
        var entry2 = getEntry(that, key);
        if (entry2) {
          var next = entry2.next;
          var prev = entry2.previous;
          delete state.index[entry2.index];
          entry2.removed = true;
          if (prev)
            prev.next = next;
          if (next)
            next.previous = prev;
          if (state.first == entry2)
            state.first = next;
          if (state.last == entry2)
            state.last = prev;
          if (DESCRIPTORS$2)
            state.size--;
          else
            that.size--;
        }
        return !!entry2;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn) {
        var state = getInternalState2(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        var entry2;
        while (entry2 = entry2 ? entry2.next : state.first) {
          boundFunction(entry2.value, entry2.key, this);
          while (entry2 && entry2.removed)
            entry2 = entry2.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has2(key) {
        return !!getEntry(this, key);
      }
    });
    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get2(key) {
        var entry2 = getEntry(this, key);
        return entry2 && entry2.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set2(key, value) {
        return define2(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define2(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS$2)
      defineBuiltInAccessor$1(Prototype, "size", {
        configurable: true,
        get: function() {
          return getInternalState2(this).size;
        }
      });
    return Constructor;
  },
  setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
      setInternalState$1(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind,
        last: void 0
      });
    }, function() {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry2 = state.last;
      while (entry2 && entry2.removed)
        entry2 = entry2.previous;
      if (!state.target || !(state.last = entry2 = entry2 ? entry2.next : state.state.first)) {
        state.target = void 0;
        return createIterResultObject(void 0, true);
      }
      if (kind == "keys")
        return createIterResultObject(entry2.key, false);
      if (kind == "values")
        return createIterResultObject(entry2.value, false);
      return createIterResultObject([entry2.key, entry2.value], false);
    }, IS_MAP ? "entries" : "values", !IS_MAP, true);
    setSpecies(CONSTRUCTOR_NAME);
  }
};
var collection$1 = collection$2;
var collectionStrong$1 = collectionStrong$2;
collection$1("Map", function(init) {
  return function Map2() {
    return init(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionStrong$1);
var collection = collection$2;
var collectionStrong = collectionStrong$2;
collection("Set", function(init) {
  return function Set2() {
    return init(this, arguments.length ? arguments[0] : void 0);
  };
}, collectionStrong);
var classof$2 = classofRaw$2;
var engineIsNode = typeof process != "undefined" && classof$2(process) == "process";
var IS_NODE$2 = engineIsNode;
var tryNodeRequire$1 = function(name) {
  try {
    if (IS_NODE$2)
      return Function('return require("' + name + '")')();
  } catch (error2) {
  }
};
var domExceptionConstants = {
  IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
  DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
  HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
  WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
  InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
  NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
  NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 },
  NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
  NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
  InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
  InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
  SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
  InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 },
  NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
  InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
  ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
  TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
  SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
  NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
  AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
  URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
  QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
  TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
  InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
  DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 }
};
var uncurryThis$4 = functionUncurryThis;
var $Error = Error;
var replace = uncurryThis$4("".replace);
var TEST = function(arg) {
  return String($Error(arg).stack);
}("zxcasd");
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
var errorStackClear = function(stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) {
    while (dropEntries--)
      stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
  }
  return stack;
};
var $$2 = _export;
var tryNodeRequire = tryNodeRequire$1;
var getBuiltIn$3 = getBuiltIn$8;
var fails$4 = fails$l;
var create2 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$7;
var defineProperty$1 = objectDefineProperty.f;
var defineBuiltIn = defineBuiltIn$8;
var defineBuiltInAccessor = defineBuiltInAccessor$3;
var hasOwn$4 = hasOwnProperty_1;
var anInstance$1 = anInstance$4;
var anObject$2 = anObject$c;
var errorToString = errorToString$2;
var normalizeStringArgument$1 = normalizeStringArgument$3;
var DOMExceptionConstants$1 = domExceptionConstants;
var clearErrorStack$1 = errorStackClear;
var InternalStateModule = internalState;
var DESCRIPTORS$1 = descriptors;
var DOM_EXCEPTION$2 = "DOMException";
var DATA_CLONE_ERR = "DATA_CLONE_ERR";
var Error$3 = getBuiltIn$3("Error");
var NativeDOMException$1 = getBuiltIn$3(DOM_EXCEPTION$2) || function() {
  try {
    var MessageChannel = getBuiltIn$3("MessageChannel") || tryNodeRequire("worker_threads").MessageChannel;
    new MessageChannel().port1.postMessage(/* @__PURE__ */ new WeakMap());
  } catch (error2) {
    if (error2.name == DATA_CLONE_ERR && error2.code == 25)
      return error2.constructor;
  }
}();
var NativeDOMExceptionPrototype = NativeDOMException$1 && NativeDOMException$1.prototype;
var ErrorPrototype = Error$3.prototype;
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(DOM_EXCEPTION$2);
var HAS_STACK = "stack" in Error$3(DOM_EXCEPTION$2);
var codeFor = function(name) {
  return hasOwn$4(DOMExceptionConstants$1, name) && DOMExceptionConstants$1[name].m ? DOMExceptionConstants$1[name].c : 0;
};
var $DOMException$1 = function DOMException() {
  anInstance$1(this, DOMExceptionPrototype$1);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument$1(argumentsLength < 1 ? void 0 : arguments[0]);
  var name = normalizeStringArgument$1(argumentsLength < 2 ? void 0 : arguments[1], "Error");
  var code = codeFor(name);
  setInternalState(this, {
    type: DOM_EXCEPTION$2,
    name,
    message,
    code
  });
  if (!DESCRIPTORS$1) {
    this.name = name;
    this.message = message;
    this.code = code;
  }
  if (HAS_STACK) {
    var error2 = Error$3(message);
    error2.name = DOM_EXCEPTION$2;
    defineProperty$1(this, "stack", createPropertyDescriptor$2(1, clearErrorStack$1(error2.stack, 1)));
  }
};
var DOMExceptionPrototype$1 = $DOMException$1.prototype = create2(ErrorPrototype);
var createGetterDescriptor = function(get2) {
  return { enumerable: true, configurable: true, get: get2 };
};
var getterFor = function(key) {
  return createGetterDescriptor(function() {
    return getInternalState(this)[key];
  });
};
if (DESCRIPTORS$1) {
  defineBuiltInAccessor(DOMExceptionPrototype$1, "code", getterFor("code"));
  defineBuiltInAccessor(DOMExceptionPrototype$1, "message", getterFor("message"));
  defineBuiltInAccessor(DOMExceptionPrototype$1, "name", getterFor("name"));
}
defineProperty$1(DOMExceptionPrototype$1, "constructor", createPropertyDescriptor$2(1, $DOMException$1));
var INCORRECT_CONSTRUCTOR = fails$4(function() {
  return !(new NativeDOMException$1() instanceof Error$3);
});
var INCORRECT_TO_STRING$1 = INCORRECT_CONSTRUCTOR || fails$4(function() {
  return ErrorPrototype.toString !== errorToString || String(new NativeDOMException$1(1, 2)) !== "2: 1";
});
var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails$4(function() {
  return new NativeDOMException$1(1, "DataCloneError").code !== 25;
});
INCORRECT_CONSTRUCTOR || NativeDOMException$1[DATA_CLONE_ERR] !== 25 || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;
var FORCED_CONSTRUCTOR$1 = INCORRECT_CONSTRUCTOR;
$$2({ global: true, constructor: true, forced: FORCED_CONSTRUCTOR$1 }, {
  DOMException: FORCED_CONSTRUCTOR$1 ? $DOMException$1 : NativeDOMException$1
});
var PolyfilledDOMException$1 = getBuiltIn$3(DOM_EXCEPTION$2);
var PolyfilledDOMExceptionPrototype$1 = PolyfilledDOMException$1.prototype;
if (INCORRECT_TO_STRING$1 && NativeDOMException$1 === PolyfilledDOMException$1) {
  defineBuiltIn(PolyfilledDOMExceptionPrototype$1, "toString", errorToString);
}
if (INCORRECT_CODE && DESCRIPTORS$1 && NativeDOMException$1 === PolyfilledDOMException$1) {
  defineBuiltInAccessor(PolyfilledDOMExceptionPrototype$1, "code", createGetterDescriptor(function() {
    return codeFor(anObject$2(this).name);
  }));
}
for (var key$1 in DOMExceptionConstants$1)
  if (hasOwn$4(DOMExceptionConstants$1, key$1)) {
    var constant$1 = DOMExceptionConstants$1[key$1];
    var constantName$1 = constant$1.s;
    var descriptor$1 = createPropertyDescriptor$2(6, constant$1.c);
    if (!hasOwn$4(PolyfilledDOMException$1, constantName$1)) {
      defineProperty$1(PolyfilledDOMException$1, constantName$1, descriptor$1);
    }
    if (!hasOwn$4(PolyfilledDOMExceptionPrototype$1, constantName$1)) {
      defineProperty$1(PolyfilledDOMExceptionPrototype$1, constantName$1, descriptor$1);
    }
  }
var $$1 = _export;
var global$4 = global$g;
var getBuiltIn$2 = getBuiltIn$8;
var createPropertyDescriptor$1 = createPropertyDescriptor$7;
var defineProperty3 = objectDefineProperty.f;
var hasOwn$3 = hasOwnProperty_1;
var anInstance = anInstance$4;
var inheritIfRequired = inheritIfRequired$2;
var normalizeStringArgument = normalizeStringArgument$3;
var DOMExceptionConstants = domExceptionConstants;
var clearErrorStack = errorStackClear;
var DESCRIPTORS = descriptors;
var DOM_EXCEPTION$1 = "DOMException";
var Error$2 = getBuiltIn$2("Error");
var NativeDOMException = getBuiltIn$2(DOM_EXCEPTION$1);
var $DOMException = function DOMException2() {
  anInstance(this, DOMExceptionPrototype);
  var argumentsLength = arguments.length;
  var message = normalizeStringArgument(argumentsLength < 1 ? void 0 : arguments[0]);
  var name = normalizeStringArgument(argumentsLength < 2 ? void 0 : arguments[1], "Error");
  var that = new NativeDOMException(message, name);
  var error2 = Error$2(message);
  error2.name = DOM_EXCEPTION$1;
  defineProperty3(that, "stack", createPropertyDescriptor$1(1, clearErrorStack(error2.stack, 1)));
  inheritIfRequired(that, this, $DOMException);
  return that;
};
var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
var ERROR_HAS_STACK = "stack" in Error$2(DOM_EXCEPTION$1);
var DOM_EXCEPTION_HAS_STACK = "stack" in new NativeDOMException(1, 2);
var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global$4, DOM_EXCEPTION$1);
var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;
$$1({ global: true, constructor: true, forced: FORCED_CONSTRUCTOR }, {
  // TODO: fix export logic
  DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
});
var PolyfilledDOMException = getBuiltIn$2(DOM_EXCEPTION$1);
var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
  {
    defineProperty3(PolyfilledDOMExceptionPrototype, "constructor", createPropertyDescriptor$1(1, PolyfilledDOMException));
  }
  for (var key in DOMExceptionConstants)
    if (hasOwn$3(DOMExceptionConstants, key)) {
      var constant = DOMExceptionConstants[key];
      var constantName = constant.s;
      if (!hasOwn$3(PolyfilledDOMException, constantName)) {
        defineProperty3(PolyfilledDOMException, constantName, createPropertyDescriptor$1(6, constant.c));
      }
    }
}
var getBuiltIn$1 = getBuiltIn$8;
var setToStringTag = setToStringTag$4;
var DOM_EXCEPTION = "DOMException";
setToStringTag(getBuiltIn$1(DOM_EXCEPTION), DOM_EXCEPTION);
var uncurryThis$3 = functionUncurryThis;
var fails$3 = fails$l;
var isCallable$1 = isCallable$j;
var classof$1 = classof$8;
var getBuiltIn = getBuiltIn$8;
var inspectSource = inspectSource$2;
var noop$1 = function() {
};
var empty = [];
var construct = getBuiltIn("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis$3(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop$1);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$1(argument))
    return false;
  try {
    construct(noop$1, empty, argument);
    return true;
  } catch (error2) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor2(argument) {
  if (!isCallable$1(argument))
    return false;
  switch (classof$1(argument)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error2) {
    return true;
  }
};
isConstructorLegacy.sham = true;
var isConstructor$1 = !construct || fails$3(function() {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;
var $TypeError = TypeError;
var validateArgumentsLength$1 = function(passed, required) {
  if (passed < required)
    throw $TypeError("Not enough arguments");
  return passed;
};
var anObject$1 = anObject$c;
var regexpFlags = function() {
  var that = anObject$1(this);
  var result = "";
  if (that.hasIndices)
    result += "d";
  if (that.global)
    result += "g";
  if (that.ignoreCase)
    result += "i";
  if (that.multiline)
    result += "m";
  if (that.dotAll)
    result += "s";
  if (that.unicode)
    result += "u";
  if (that.unicodeSets)
    result += "v";
  if (that.sticky)
    result += "y";
  return result;
};
var call = functionCall;
var hasOwn$2 = hasOwnProperty_1;
var isPrototypeOf = objectIsPrototypeOf;
var regExpFlags = regexpFlags;
var RegExpPrototype = RegExp.prototype;
var regexpGetFlags = function(R) {
  var flags = R.flags;
  return flags === void 0 && !("flags" in RegExpPrototype) && !hasOwn$2(R, "flags") && isPrototypeOf(RegExpPrototype, R) ? call(regExpFlags, R) : flags;
};
var uncurryThis$2 = functionUncurryThis;
var MapPrototype = Map.prototype;
var mapHelpers = {
  // eslint-disable-next-line es/no-map -- safe
  Map,
  set: uncurryThis$2(MapPrototype.set),
  get: uncurryThis$2(MapPrototype.get),
  has: uncurryThis$2(MapPrototype.has),
  remove: uncurryThis$2(MapPrototype["delete"]),
  proto: MapPrototype
};
var uncurryThis$1 = functionUncurryThis;
var SetPrototype = Set.prototype;
var setHelpers = {
  // eslint-disable-next-line es/no-set -- safe
  Set,
  add: uncurryThis$1(SetPrototype.add),
  has: uncurryThis$1(SetPrototype.has),
  remove: uncurryThis$1(SetPrototype["delete"]),
  proto: SetPrototype
};
var fails$2 = fails$l;
var createPropertyDescriptor = createPropertyDescriptor$7;
var errorStackInstallable = !fails$2(function() {
  var error2 = Error("a");
  if (!("stack" in error2))
    return true;
  Object.defineProperty(error2, "stack", createPropertyDescriptor(1, 7));
  return error2.stack !== 7;
});
var engineIsDeno = typeof Deno == "object" && Deno && typeof Deno.version == "object";
var IS_DENO$1 = engineIsDeno;
var IS_NODE$1 = engineIsNode;
var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1 && typeof window == "object" && typeof document == "object";
var global$3 = global$g;
var fails$1 = fails$l;
var V8 = engineV8Version;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var IS_NODE = engineIsNode;
var structuredClone$1 = global$3.structuredClone;
var structuredCloneProperTransfer = !!structuredClone$1 && !fails$1(function() {
  if (IS_DENO && V8 > 92 || IS_NODE && V8 > 94 || IS_BROWSER && V8 > 97)
    return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone$1(buffer, { transfer: [buffer] });
  return buffer.byteLength != 0 || clone.byteLength != 8;
});
var $ = _export;
var global$2 = global$g;
var getBuiltin = getBuiltIn$8;
var uncurryThis = functionUncurryThis;
var fails = fails$l;
var uid = uid$4;
var isCallable = isCallable$j;
var isConstructor3 = isConstructor$1;
var isNullOrUndefined = isNullOrUndefined$6;
var isObject$5 = isObject$g;
var isSymbol = isSymbol$3;
var iterate = iterate$3;
var anObject = anObject$c;
var classof = classof$8;
var hasOwn$1 = hasOwnProperty_1;
var createProperty = createProperty$2;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var lengthOfArrayLike = lengthOfArrayLike$4;
var validateArgumentsLength = validateArgumentsLength$1;
var getRegExpFlags = regexpGetFlags;
var MapHelpers = mapHelpers;
var SetHelpers = setHelpers;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;
var PROPER_TRANSFER = structuredCloneProperTransfer;
var Object$1 = global$2.Object;
var Array$1 = global$2.Array;
var Date$1 = global$2.Date;
var Error$1 = global$2.Error;
var EvalError = global$2.EvalError;
var RangeError$1 = global$2.RangeError;
var ReferenceError = global$2.ReferenceError;
var SyntaxError$1 = global$2.SyntaxError;
var TypeError$1 = global$2.TypeError;
var URIError = global$2.URIError;
var PerformanceMark = global$2.PerformanceMark;
var WebAssembly = global$2.WebAssembly;
var CompileError = WebAssembly && WebAssembly.CompileError || Error$1;
var LinkError = WebAssembly && WebAssembly.LinkError || Error$1;
var RuntimeError = WebAssembly && WebAssembly.RuntimeError || Error$1;
var DOMException3 = getBuiltin("DOMException");
var Map$1 = MapHelpers.Map;
var mapHas = MapHelpers.has;
var mapGet = MapHelpers.get;
var mapSet = MapHelpers.set;
var Set$1 = SetHelpers.Set;
var setAdd = SetHelpers.add;
var objectKeys = getBuiltin("Object", "keys");
var push$1 = uncurryThis([].push);
var thisBooleanValue = uncurryThis(true.valueOf);
var thisNumberValue = uncurryThis(1 .valueOf);
var thisStringValue = uncurryThis("".valueOf);
var thisTimeValue = uncurryThis(Date$1.prototype.getTime);
var PERFORMANCE_MARK = uid("structuredClone");
var DATA_CLONE_ERROR = "DataCloneError";
var TRANSFERRING = "Transferring";
var checkBasicSemantic = function(structuredCloneImplementation) {
  return !fails(function() {
    var set1 = new global$2.Set([7]);
    var set2 = structuredCloneImplementation(set1);
    var number = structuredCloneImplementation(Object$1(7));
    return set2 == set1 || !set2.has(7) || typeof number != "object" || number != 7;
  }) && structuredCloneImplementation;
};
var checkErrorsCloning = function(structuredCloneImplementation, $Error2) {
  return !fails(function() {
    var error2 = new $Error2();
    var test2 = structuredCloneImplementation({ a: error2, b: error2 });
    return !(test2 && test2.a === test2.b && test2.a instanceof $Error2 && test2.a.stack === error2.stack);
  });
};
var checkNewErrorsCloningSemantic = function(structuredCloneImplementation) {
  return !fails(function() {
    var test2 = structuredCloneImplementation(new global$2.AggregateError([1], PERFORMANCE_MARK, { cause: 3 }));
    return test2.name != "AggregateError" || test2.errors[0] != 1 || test2.message != PERFORMANCE_MARK || test2.cause != 3;
  });
};
var nativeStructuredClone = global$2.structuredClone;
var FORCED_REPLACEMENT = !checkErrorsCloning(nativeStructuredClone, Error$1) || !checkErrorsCloning(nativeStructuredClone, DOMException3) || !checkNewErrorsCloningSemantic(nativeStructuredClone);
var structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function(value) {
  return new PerformanceMark(PERFORMANCE_MARK, { detail: value }).detail;
});
var nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;
var throwUncloneable = function(type2) {
  throw new DOMException3("Uncloneable type: " + type2, DATA_CLONE_ERROR);
};
var throwUnpolyfillable = function(type2, action) {
  throw new DOMException3((action || "Cloning") + " of " + type2 + " cannot be properly polyfilled in this engine", DATA_CLONE_ERROR);
};
var tryNativeRestrictedStructuredClone = function(value, type2) {
  if (!nativeRestrictedStructuredClone)
    throwUnpolyfillable(type2);
  return nativeRestrictedStructuredClone(value);
};
var createDataTransfer = function() {
  var dataTransfer;
  try {
    dataTransfer = new global$2.DataTransfer();
  } catch (error2) {
    try {
      dataTransfer = new global$2.ClipboardEvent("").clipboardData;
    } catch (error22) {
    }
  }
  return dataTransfer && dataTransfer.items && dataTransfer.files ? dataTransfer : null;
};
var structuredCloneInternal = function(value, map2) {
  if (isSymbol(value))
    throwUncloneable("Symbol");
  if (!isObject$5(value))
    return value;
  if (map2) {
    if (mapHas(map2, value))
      return mapGet(map2, value);
  } else
    map2 = new Map$1();
  var type2 = classof(value);
  var deep2 = false;
  var C, name, cloned, dataTransfer, i, length, keys4, key, source, target, options;
  switch (type2) {
    case "Array":
      cloned = Array$1(lengthOfArrayLike(value));
      deep2 = true;
      break;
    case "Object":
      cloned = {};
      deep2 = true;
      break;
    case "Map":
      cloned = new Map$1();
      deep2 = true;
      break;
    case "Set":
      cloned = new Set$1();
      deep2 = true;
      break;
    case "RegExp":
      cloned = new RegExp(value.source, getRegExpFlags(value));
      break;
    case "Error":
      name = value.name;
      switch (name) {
        case "AggregateError":
          cloned = getBuiltin("AggregateError")([]);
          break;
        case "EvalError":
          cloned = EvalError();
          break;
        case "RangeError":
          cloned = RangeError$1();
          break;
        case "ReferenceError":
          cloned = ReferenceError();
          break;
        case "SyntaxError":
          cloned = SyntaxError$1();
          break;
        case "TypeError":
          cloned = TypeError$1();
          break;
        case "URIError":
          cloned = URIError();
          break;
        case "CompileError":
          cloned = CompileError();
          break;
        case "LinkError":
          cloned = LinkError();
          break;
        case "RuntimeError":
          cloned = RuntimeError();
          break;
        default:
          cloned = Error$1();
      }
      deep2 = true;
      break;
    case "DOMException":
      cloned = new DOMException3(value.message, value.name);
      deep2 = true;
      break;
    case "DataView":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "BigInt64Array":
    case "BigUint64Array":
      C = global$2[type2];
      if (!isObject$5(C))
        throwUnpolyfillable(type2);
      cloned = new C(
        // this is safe, since arraybuffer cannot have circular references
        structuredCloneInternal(value.buffer, map2),
        value.byteOffset,
        type2 === "DataView" ? value.byteLength : value.length
      );
      break;
    case "DOMQuad":
      try {
        cloned = new DOMQuad(
          structuredCloneInternal(value.p1, map2),
          structuredCloneInternal(value.p2, map2),
          structuredCloneInternal(value.p3, map2),
          structuredCloneInternal(value.p4, map2)
        );
      } catch (error2) {
        cloned = tryNativeRestrictedStructuredClone(value, type2);
      }
      break;
    case "File":
      if (nativeRestrictedStructuredClone)
        try {
          cloned = nativeRestrictedStructuredClone(value);
          if (classof(cloned) !== type2)
            cloned = void 0;
        } catch (error2) {
        }
      if (!cloned)
        try {
          cloned = new File([value], value.name, value);
        } catch (error2) {
        }
      if (!cloned)
        throwUnpolyfillable(type2);
      break;
    case "FileList":
      dataTransfer = createDataTransfer();
      if (dataTransfer) {
        for (i = 0, length = lengthOfArrayLike(value); i < length; i++) {
          dataTransfer.items.add(structuredCloneInternal(value[i], map2));
        }
        cloned = dataTransfer.files;
      } else
        cloned = tryNativeRestrictedStructuredClone(value, type2);
      break;
    case "ImageData":
      try {
        cloned = new ImageData(
          structuredCloneInternal(value.data, map2),
          value.width,
          value.height,
          { colorSpace: value.colorSpace }
        );
      } catch (error2) {
        cloned = tryNativeRestrictedStructuredClone(value, type2);
      }
      break;
    default:
      if (nativeRestrictedStructuredClone) {
        cloned = nativeRestrictedStructuredClone(value);
      } else
        switch (type2) {
          case "BigInt":
            cloned = Object$1(value.valueOf());
            break;
          case "Boolean":
            cloned = Object$1(thisBooleanValue(value));
            break;
          case "Number":
            cloned = Object$1(thisNumberValue(value));
            break;
          case "String":
            cloned = Object$1(thisStringValue(value));
            break;
          case "Date":
            cloned = new Date$1(thisTimeValue(value));
            break;
          case "ArrayBuffer":
            C = global$2.DataView;
            if (!C && typeof value.slice != "function")
              throwUnpolyfillable(type2);
            try {
              if (typeof value.slice == "function" && !value.resizable) {
                cloned = value.slice(0);
              } else {
                length = value.byteLength;
                options = "maxByteLength" in value ? { maxByteLength: value.maxByteLength } : void 0;
                cloned = new ArrayBuffer(length, options);
                source = new C(value);
                target = new C(cloned);
                for (i = 0; i < length; i++) {
                  target.setUint8(i, source.getUint8(i));
                }
              }
            } catch (error2) {
              throw new DOMException3("ArrayBuffer is detached", DATA_CLONE_ERROR);
            }
            break;
          case "SharedArrayBuffer":
            cloned = value;
            break;
          case "Blob":
            try {
              cloned = value.slice(0, value.size, value.type);
            } catch (error2) {
              throwUnpolyfillable(type2);
            }
            break;
          case "DOMPoint":
          case "DOMPointReadOnly":
            C = global$2[type2];
            try {
              cloned = C.fromPoint ? C.fromPoint(value) : new C(value.x, value.y, value.z, value.w);
            } catch (error2) {
              throwUnpolyfillable(type2);
            }
            break;
          case "DOMRect":
          case "DOMRectReadOnly":
            C = global$2[type2];
            try {
              cloned = C.fromRect ? C.fromRect(value) : new C(value.x, value.y, value.width, value.height);
            } catch (error2) {
              throwUnpolyfillable(type2);
            }
            break;
          case "DOMMatrix":
          case "DOMMatrixReadOnly":
            C = global$2[type2];
            try {
              cloned = C.fromMatrix ? C.fromMatrix(value) : new C(value);
            } catch (error2) {
              throwUnpolyfillable(type2);
            }
            break;
          case "AudioData":
          case "VideoFrame":
            if (!isCallable(value.clone))
              throwUnpolyfillable(type2);
            try {
              cloned = value.clone();
            } catch (error2) {
              throwUncloneable(type2);
            }
            break;
          case "CropTarget":
          case "CryptoKey":
          case "FileSystemDirectoryHandle":
          case "FileSystemFileHandle":
          case "FileSystemHandle":
          case "GPUCompilationInfo":
          case "GPUCompilationMessage":
          case "ImageBitmap":
          case "RTCCertificate":
          case "WebAssembly.Module":
            throwUnpolyfillable(type2);
          default:
            throwUncloneable(type2);
        }
  }
  mapSet(map2, value, cloned);
  if (deep2)
    switch (type2) {
      case "Array":
      case "Object":
        keys4 = objectKeys(value);
        for (i = 0, length = lengthOfArrayLike(keys4); i < length; i++) {
          key = keys4[i];
          createProperty(cloned, key, structuredCloneInternal(value[key], map2));
        }
        break;
      case "Map":
        value.forEach(function(v, k) {
          mapSet(cloned, structuredCloneInternal(k, map2), structuredCloneInternal(v, map2));
        });
        break;
      case "Set":
        value.forEach(function(v) {
          setAdd(cloned, structuredCloneInternal(v, map2));
        });
        break;
      case "Error":
        createNonEnumerableProperty(cloned, "message", structuredCloneInternal(value.message, map2));
        if (hasOwn$1(value, "cause")) {
          createNonEnumerableProperty(cloned, "cause", structuredCloneInternal(value.cause, map2));
        }
        if (name == "AggregateError") {
          cloned.errors = structuredCloneInternal(value.errors, map2);
        }
      case "DOMException":
        if (ERROR_STACK_INSTALLABLE) {
          createNonEnumerableProperty(cloned, "stack", structuredCloneInternal(value.stack, map2));
        }
    }
  return cloned;
};
var tryToTransfer = function(rawTransfer, map2) {
  if (!isObject$5(rawTransfer))
    throw TypeError$1("Transfer option cannot be converted to a sequence");
  var transfer = [];
  iterate(rawTransfer, function(value2) {
    push$1(transfer, anObject(value2));
  });
  var i = 0;
  var length = lengthOfArrayLike(transfer);
  var value, type2, C, transferredArray, transferred, canvas, context;
  if (PROPER_TRANSFER) {
    transferredArray = nativeStructuredClone(transfer, { transfer });
    while (i < length)
      mapSet(map2, transfer[i], transferredArray[i++]);
  } else
    while (i < length) {
      value = transfer[i++];
      if (mapHas(map2, value))
        throw new DOMException3("Duplicate transferable", DATA_CLONE_ERROR);
      type2 = classof(value);
      switch (type2) {
        case "ImageBitmap":
          C = global$2.OffscreenCanvas;
          if (!isConstructor3(C))
            throwUnpolyfillable(type2, TRANSFERRING);
          try {
            canvas = new C(value.width, value.height);
            context = canvas.getContext("bitmaprenderer");
            context.transferFromImageBitmap(value);
            transferred = canvas.transferToImageBitmap();
          } catch (error2) {
          }
          break;
        case "AudioData":
        case "VideoFrame":
          if (!isCallable(value.clone) || !isCallable(value.close))
            throwUnpolyfillable(type2, TRANSFERRING);
          try {
            transferred = value.clone();
            value.close();
          } catch (error2) {
          }
          break;
        case "ArrayBuffer":
          if (!isCallable(value.transfer))
            throwUnpolyfillable(type2, TRANSFERRING);
          transferred = value.transfer();
          break;
        case "MediaSourceHandle":
        case "MessagePort":
        case "OffscreenCanvas":
        case "ReadableStream":
        case "TransformStream":
        case "WritableStream":
          throwUnpolyfillable(type2, TRANSFERRING);
      }
      if (transferred === void 0)
        throw new DOMException3("This object cannot be transferred: " + type2, DATA_CLONE_ERROR);
      mapSet(map2, value, transferred);
    }
};
$({ global: true, enumerable: true, sham: !PROPER_TRANSFER, forced: FORCED_REPLACEMENT }, {
  structuredClone: function structuredClone2(value) {
    var options = validateArgumentsLength(arguments.length, 1) > 1 && !isNullOrUndefined(arguments[1]) ? anObject(arguments[1]) : void 0;
    var transfer = options ? options.transfer : void 0;
    var map2;
    if (transfer !== void 0) {
      map2 = new Map$1();
      tryToTransfer(transfer, map2);
    }
    return structuredCloneInternal(value, map2);
  }
});
var global$1 = global$g;
var path$c = global$1;
var path$b = path$c;
path$b.structuredClone;
var core$1 = {};
var command = {};
var utils$l = {};
Object.defineProperty(utils$l, "__esModule", { value: true });
utils$l.toCommandProperties = utils$l.toCommandValue = void 0;
function toCommandValue(input) {
  if (input === null || input === void 0) {
    return "";
  } else if (typeof input === "string" || input instanceof String) {
    return input;
  }
  return JSON.stringify(input);
}
utils$l.toCommandValue = toCommandValue;
function toCommandProperties(annotationProperties) {
  if (!Object.keys(annotationProperties).length) {
    return {};
  }
  return {
    title: annotationProperties.title,
    file: annotationProperties.file,
    line: annotationProperties.startLine,
    endLine: annotationProperties.endLine,
    col: annotationProperties.startColumn,
    endColumn: annotationProperties.endColumn
  };
}
utils$l.toCommandProperties = toCommandProperties;
var __createBinding$1 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() {
    return m[k];
  } });
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$1 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$1 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.hasOwnProperty.call(mod, k))
        __createBinding$1(result, mod, k);
  }
  __setModuleDefault$1(result, mod);
  return result;
};
Object.defineProperty(command, "__esModule", { value: true });
command.issue = command.issueCommand = void 0;
const os$2 = __importStar$1(require$$0);
const utils_1$1 = utils$l;
function issueCommand(command2, properties, message) {
  const cmd = new Command(command2, properties, message);
  process.stdout.write(cmd.toString() + os$2.EOL);
}
command.issueCommand = issueCommand;
function issue(name, message = "") {
  issueCommand(name, {}, message);
}
command.issue = issue;
const CMD_STRING = "::";
class Command {
  constructor(command2, properties, message) {
    if (!command2) {
      command2 = "missing.command";
    }
    this.command = command2;
    this.properties = properties;
    this.message = message;
  }
  toString() {
    let cmdStr = CMD_STRING + this.command;
    if (this.properties && Object.keys(this.properties).length > 0) {
      cmdStr += " ";
      let first = true;
      for (const key in this.properties) {
        if (this.properties.hasOwnProperty(key)) {
          const val = this.properties[key];
          if (val) {
            if (first) {
              first = false;
            } else {
              cmdStr += ",";
            }
            cmdStr += `${key}=${escapeProperty(val)}`;
          }
        }
      }
    }
    cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
    return cmdStr;
  }
}
function escapeData(s) {
  return utils_1$1.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}
function escapeProperty(s) {
  return utils_1$1.toCommandValue(s).replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A").replace(/:/g, "%3A").replace(/,/g, "%2C");
}
var fileCommand = {};
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
const REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === "string" && REGEX.test(uuid);
}
var byteToHex = [];
for (var i$1 = 0; i$1 < 256; ++i$1) {
  byteToHex.push((i$1 + 256).toString(16).substr(1));
}
function stringify$5(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var _nodeId;
var _clockseq;
var _lastMSecs = 0;
var _lastNSecs = 0;
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== void 0 ? options.clockseq : _clockseq;
  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();
    if (node == null) {
      node = _nodeId = [seedBytes[0] | 1, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 16383;
    }
  }
  var msecs = options.msecs !== void 0 ? options.msecs : Date.now();
  var nsecs = options.nsecs !== void 0 ? options.nsecs : _lastNSecs + 1;
  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 1e4;
  if (dt < 0 && options.clockseq === void 0) {
    clockseq = clockseq + 1 & 16383;
  }
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === void 0) {
    nsecs = 0;
  }
  if (nsecs >= 1e4) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }
  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;
  msecs += 122192928e5;
  var tl = ((msecs & 268435455) * 1e4 + nsecs) % 4294967296;
  b[i++] = tl >>> 24 & 255;
  b[i++] = tl >>> 16 & 255;
  b[i++] = tl >>> 8 & 255;
  b[i++] = tl & 255;
  var tmh = msecs / 4294967296 * 1e4 & 268435455;
  b[i++] = tmh >>> 8 & 255;
  b[i++] = tmh & 255;
  b[i++] = tmh >>> 24 & 15 | 16;
  b[i++] = tmh >>> 16 & 255;
  b[i++] = clockseq >>> 8 | 128;
  b[i++] = clockseq & 255;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }
  return buf || stringify$5(b);
}
function parse$b(uuid) {
  if (!validate(uuid)) {
    throw TypeError("Invalid UUID");
  }
  var v;
  var arr = new Uint8Array(16);
  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 255;
  arr[2] = v >>> 8 & 255;
  arr[3] = v & 255;
  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 255;
  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 255;
  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 255;
  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
  arr[11] = v / 4294967296 & 255;
  arr[12] = v >>> 24 & 255;
  arr[13] = v >>> 16 & 255;
  arr[14] = v >>> 8 & 255;
  arr[15] = v & 255;
  return arr;
}
function stringToBytes(str2) {
  str2 = unescape(encodeURIComponent(str2));
  var bytes = [];
  for (var i = 0; i < str2.length; ++i) {
    bytes.push(str2.charCodeAt(i));
  }
  return bytes;
}
var DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
var URL$1 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function v35(name, version2, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === "string") {
      value = stringToBytes(value);
    }
    if (typeof namespace === "string") {
      namespace = parse$b(namespace);
    }
    if (namespace.length !== 16) {
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    }
    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 15 | version2;
    bytes[8] = bytes[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }
      return buf;
    }
    return stringify$5(bytes);
  }
  try {
    generateUUID.name = name;
  } catch (err) {
  }
  generateUUID.DNS = DNS;
  generateUUID.URL = URL$1;
  return generateUUID;
}
function md5(bytes) {
  if (typeof bytes === "string") {
    var msg = unescape(encodeURIComponent(bytes));
    bytes = new Uint8Array(msg.length);
    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }
  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = "0123456789abcdef";
  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 255;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15), 16);
    output.push(hex);
  }
  return output;
}
function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
function wordsToMd5(x, len) {
  x[len >> 5] |= 128 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }
  return [a, b, c, d];
}
function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }
  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));
  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 255) << i % 32;
  }
  return output;
}
function safeAdd(x, y) {
  var lsw = (x & 65535) + (y & 65535);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q, a, b, x, s, t2) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t2)), s), b);
}
function md5ff(a, b, c, d, x, s, t2) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t2);
}
function md5gg(a, b, c, d, x, s, t2) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t2);
}
function md5hh(a, b, c, d, x, s, t2) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t2);
}
function md5ii(a, b, c, d, x, s, t2) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t2);
}
var v3 = v35("v3", 48, md5);
const v3$1 = v3;
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify$5(rnds);
}
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;
    case 1:
      return x ^ y ^ z;
    case 2:
      return x & y ^ x & z ^ y & z;
    case 3:
      return x ^ y ^ z;
  }
}
function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}
function sha1(bytes) {
  var K = [1518500249, 1859775393, 2400959708, 3395469782];
  var H = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof bytes === "string") {
    var msg = unescape(encodeURIComponent(bytes));
    bytes = [];
    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    bytes = Array.prototype.slice.call(bytes);
  }
  bytes.push(128);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);
  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);
    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }
    M[_i] = arr;
  }
  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 4294967295;
  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);
    for (var t2 = 0; t2 < 16; ++t2) {
      W[t2] = M[_i2][t2];
    }
    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }
    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];
    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }
    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }
  return [H[0] >> 24 & 255, H[0] >> 16 & 255, H[0] >> 8 & 255, H[0] & 255, H[1] >> 24 & 255, H[1] >> 16 & 255, H[1] >> 8 & 255, H[1] & 255, H[2] >> 24 & 255, H[2] >> 16 & 255, H[2] >> 8 & 255, H[2] & 255, H[3] >> 24 & 255, H[3] >> 16 & 255, H[3] >> 8 & 255, H[3] & 255, H[4] >> 24 & 255, H[4] >> 16 & 255, H[4] >> 8 & 255, H[4] & 255];
}
var v5 = v35("v5", 80, sha1);
const v5$1 = v5;
const nil = "00000000-0000-0000-0000-000000000000";
function version(uuid) {
  if (!validate(uuid)) {
    throw TypeError("Invalid UUID");
  }
  return parseInt(uuid.substr(14, 1), 16);
}
const esmBrowser = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NIL: nil,
  parse: parse$b,
  stringify: stringify$5,
  v1,
  v3: v3$1,
  v4,
  v5: v5$1,
  validate,
  version
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(esmBrowser);
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() {
    return m[k];
  } });
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(fileCommand, "__esModule", { value: true });
fileCommand.prepareKeyValueMessage = fileCommand.issueFileCommand = void 0;
const fs$9 = __importStar(require$$0$1);
const os$1 = __importStar(require$$0);
const uuid_1 = require$$2;
const utils_1 = utils$l;
function issueFileCommand(command2, message) {
  const filePath = process.env[`GITHUB_${command2}`];
  if (!filePath) {
    throw new Error(`Unable to find environment variable for file command ${command2}`);
  }
  if (!fs$9.existsSync(filePath)) {
    throw new Error(`Missing file at path: ${filePath}`);
  }
  fs$9.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os$1.EOL}`, {
    encoding: "utf8"
  });
}
fileCommand.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
  const delimiter = `ghadelimiter_${uuid_1.v4()}`;
  const convertedValue = utils_1.toCommandValue(value);
  if (key.includes(delimiter)) {
    throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
  }
  if (convertedValue.includes(delimiter)) {
    throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
  }
  return `${key}<<${delimiter}${os$1.EOL}${convertedValue}${os$1.EOL}${delimiter}`;
}
fileCommand.prepareKeyValueMessage = prepareKeyValueMessage;
var oidcUtils = {};
var lib = {};
var proxy = {};
Object.defineProperty(proxy, "__esModule", { value: true });
proxy.checkBypass = proxy.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
  const usingSsl = reqUrl.protocol === "https:";
  if (checkBypass(reqUrl)) {
    return void 0;
  }
  const proxyVar = (() => {
    if (usingSsl) {
      return process.env["https_proxy"] || process.env["HTTPS_PROXY"];
    } else {
      return process.env["http_proxy"] || process.env["HTTP_PROXY"];
    }
  })();
  if (proxyVar) {
    return new URL(proxyVar);
  } else {
    return void 0;
  }
}
proxy.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
  if (!reqUrl.hostname) {
    return false;
  }
  const reqHost = reqUrl.hostname;
  if (isLoopbackAddress(reqHost)) {
    return true;
  }
  const noProxy = process.env["no_proxy"] || process.env["NO_PROXY"] || "";
  if (!noProxy) {
    return false;
  }
  let reqPort;
  if (reqUrl.port) {
    reqPort = Number(reqUrl.port);
  } else if (reqUrl.protocol === "http:") {
    reqPort = 80;
  } else if (reqUrl.protocol === "https:") {
    reqPort = 443;
  }
  const upperReqHosts = [reqUrl.hostname.toUpperCase()];
  if (typeof reqPort === "number") {
    upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
  }
  for (const upperNoProxyItem of noProxy.split(",").map((x) => x.trim().toUpperCase()).filter((x) => x)) {
    if (upperNoProxyItem === "*" || upperReqHosts.some((x) => x === upperNoProxyItem || x.endsWith(`.${upperNoProxyItem}`) || upperNoProxyItem.startsWith(".") && x.endsWith(`${upperNoProxyItem}`))) {
      return true;
    }
  }
  return false;
}
proxy.checkBypass = checkBypass;
function isLoopbackAddress(host) {
  const hostLower = host.toLowerCase();
  return hostLower === "localhost" || hostLower.startsWith("127.") || hostLower.startsWith("[::1]") || hostLower.startsWith("[0:0:0:0:0:0:0:1]");
}
var tunnel$1 = {};
var tls = require$$1;
var http = require$$2$1;
var https = require$$3;
var events = require$$4;
var util$2 = require$$0$2;
tunnel$1.httpOverHttp = httpOverHttp;
tunnel$1.httpsOverHttp = httpsOverHttp;
tunnel$1.httpOverHttps = httpOverHttps;
tunnel$1.httpsOverHttps = httpsOverHttps;
function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}
function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}
function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}
function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}
function TunnelingAgent(options) {
  var self2 = this;
  self2.options = options || {};
  self2.proxyOptions = self2.options.proxy || {};
  self2.maxSockets = self2.options.maxSockets || http.Agent.defaultMaxSockets;
  self2.requests = [];
  self2.sockets = [];
  self2.on("free", function onFree(socket, host, port, localAddress) {
    var options2 = toOptions(host, port, localAddress);
    for (var i = 0, len = self2.requests.length; i < len; ++i) {
      var pending = self2.requests[i];
      if (pending.host === options2.host && pending.port === options2.port) {
        self2.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self2.removeSocket(socket);
  });
}
util$2.inherits(TunnelingAgent, events.EventEmitter);
TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self2 = this;
  var options = mergeOptions({ request: req }, self2.options, toOptions(host, port, localAddress));
  if (self2.sockets.length >= this.maxSockets) {
    self2.requests.push(options);
    return;
  }
  self2.createSocket(options, function(socket) {
    socket.on("free", onFree);
    socket.on("close", onCloseOrRemove);
    socket.on("agentRemove", onCloseOrRemove);
    req.onSocket(socket);
    function onFree() {
      self2.emit("free", socket, options);
    }
    function onCloseOrRemove(err) {
      self2.removeSocket(socket);
      socket.removeListener("free", onFree);
      socket.removeListener("close", onCloseOrRemove);
      socket.removeListener("agentRemove", onCloseOrRemove);
    }
  });
};
TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self2 = this;
  var placeholder = {};
  self2.sockets.push(placeholder);
  var connectOptions = mergeOptions({}, self2.proxyOptions, {
    method: "CONNECT",
    path: options.host + ":" + options.port,
    agent: false,
    headers: {
      host: options.host + ":" + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers["Proxy-Authorization"] = "Basic " + new Buffer(connectOptions.proxyAuth).toString("base64");
  }
  debug$2("making CONNECT request");
  var connectReq = self2.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false;
  connectReq.once("response", onResponse);
  connectReq.once("upgrade", onUpgrade);
  connectReq.once("connect", onConnect);
  connectReq.once("error", onError);
  connectReq.end();
  function onResponse(res) {
    res.upgrade = true;
  }
  function onUpgrade(res, socket, head) {
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }
  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();
    if (res.statusCode !== 200) {
      debug$2(
        "tunneling socket could not be established, statusCode=%d",
        res.statusCode
      );
      socket.destroy();
      var error2 = new Error("tunneling socket could not be established, statusCode=" + res.statusCode);
      error2.code = "ECONNRESET";
      options.request.emit("error", error2);
      self2.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug$2("got illegal response body from proxy");
      socket.destroy();
      var error2 = new Error("got illegal response body from proxy");
      error2.code = "ECONNRESET";
      options.request.emit("error", error2);
      self2.removeSocket(placeholder);
      return;
    }
    debug$2("tunneling connection has established");
    self2.sockets[self2.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }
  function onError(cause) {
    connectReq.removeAllListeners();
    debug$2(
      "tunneling socket could not be established, cause=%s\n",
      cause.message,
      cause.stack
    );
    var error2 = new Error("tunneling socket could not be established, cause=" + cause.message);
    error2.code = "ECONNRESET";
    options.request.emit("error", error2);
    self2.removeSocket(placeholder);
  }
};
TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket);
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);
  var pending = this.requests.shift();
  if (pending) {
    this.createSocket(pending, function(socket2) {
      pending.request.onSocket(socket2);
    });
  }
};
function createSecureSocket(options, cb) {
  var self2 = this;
  TunnelingAgent.prototype.createSocket.call(self2, options, function(socket) {
    var hostHeader = options.request.getHeader("host");
    var tlsOptions = mergeOptions({}, self2.options, {
      socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, "") : options.host
    });
    var secureSocket = tls.connect(0, tlsOptions);
    self2.sockets[self2.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}
function toOptions(host, port, localAddress) {
  if (typeof host === "string") {
    return {
      host,
      port,
      localAddress
    };
  }
  return host;
}
function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === "object") {
      var keys4 = Object.keys(overrides);
      for (var j = 0, keyLen = keys4.length; j < keyLen; ++j) {
        var k = keys4[j];
        if (overrides[k] !== void 0) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}
var debug$2;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug$2 = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === "string") {
      args[0] = "TUNNEL: " + args[0];
    } else {
      args.unshift("TUNNEL:");
    }
    console.error.apply(console, args);
  };
} else {
  debug$2 = function() {
  };
}
tunnel$1.debug = debug$2;
var tunnel = tunnel$1;
(function(exports) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar2 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k))
          __createBinding2(result, mod, k);
    }
    __setModuleDefault2(result, mod);
    return result;
  };
  var __awaiter2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
  const http2 = __importStar2(require$$2$1);
  const https2 = __importStar2(require$$3);
  const pm = __importStar2(proxy);
  const tunnel$12 = __importStar2(tunnel);
  var HttpCodes;
  (function(HttpCodes2) {
    HttpCodes2[HttpCodes2["OK"] = 200] = "OK";
    HttpCodes2[HttpCodes2["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes2[HttpCodes2["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes2[HttpCodes2["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes2[HttpCodes2["SeeOther"] = 303] = "SeeOther";
    HttpCodes2[HttpCodes2["NotModified"] = 304] = "NotModified";
    HttpCodes2[HttpCodes2["UseProxy"] = 305] = "UseProxy";
    HttpCodes2[HttpCodes2["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes2[HttpCodes2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes2[HttpCodes2["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes2[HttpCodes2["BadRequest"] = 400] = "BadRequest";
    HttpCodes2[HttpCodes2["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes2[HttpCodes2["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes2[HttpCodes2["Forbidden"] = 403] = "Forbidden";
    HttpCodes2[HttpCodes2["NotFound"] = 404] = "NotFound";
    HttpCodes2[HttpCodes2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes2[HttpCodes2["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes2[HttpCodes2["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes2[HttpCodes2["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes2[HttpCodes2["Conflict"] = 409] = "Conflict";
    HttpCodes2[HttpCodes2["Gone"] = 410] = "Gone";
    HttpCodes2[HttpCodes2["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes2[HttpCodes2["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes2[HttpCodes2["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes2[HttpCodes2["BadGateway"] = 502] = "BadGateway";
    HttpCodes2[HttpCodes2["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes2[HttpCodes2["GatewayTimeout"] = 504] = "GatewayTimeout";
  })(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
  var Headers;
  (function(Headers2) {
    Headers2["Accept"] = "accept";
    Headers2["ContentType"] = "content-type";
  })(Headers = exports.Headers || (exports.Headers = {}));
  var MediaTypes;
  (function(MediaTypes2) {
    MediaTypes2["ApplicationJson"] = "application/json";
  })(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
  function getProxyUrl2(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : "";
  }
  exports.getProxyUrl = getProxyUrl2;
  const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
  ];
  const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
  ];
  const RetryableHttpVerbs = ["OPTIONS", "GET", "DELETE", "HEAD"];
  const ExponentialBackoffCeiling = 10;
  const ExponentialBackoffTimeSlice = 5;
  class HttpClientError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.name = "HttpClientError";
      this.statusCode = statusCode;
      Object.setPrototypeOf(this, HttpClientError.prototype);
    }
  }
  exports.HttpClientError = HttpClientError;
  class HttpClientResponse {
    constructor(message) {
      this.message = message;
    }
    readBody() {
      return __awaiter2(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter2(this, void 0, void 0, function* () {
          let output = Buffer.alloc(0);
          this.message.on("data", (chunk) => {
            output = Buffer.concat([output, chunk]);
          });
          this.message.on("end", () => {
            resolve(output.toString());
          });
        }));
      });
    }
  }
  exports.HttpClientResponse = HttpClientResponse;
  function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === "https:";
  }
  exports.isHttps = isHttps;
  class HttpClient {
    constructor(userAgent2, handlers, requestOptions) {
      this._ignoreSslError = false;
      this._allowRedirects = true;
      this._allowRedirectDowngrade = false;
      this._maxRedirects = 50;
      this._allowRetries = false;
      this._maxRetries = 1;
      this._keepAlive = false;
      this._disposed = false;
      this.userAgent = userAgent2;
      this.handlers = handlers || [];
      this.requestOptions = requestOptions;
      if (requestOptions) {
        if (requestOptions.ignoreSslError != null) {
          this._ignoreSslError = requestOptions.ignoreSslError;
        }
        this._socketTimeout = requestOptions.socketTimeout;
        if (requestOptions.allowRedirects != null) {
          this._allowRedirects = requestOptions.allowRedirects;
        }
        if (requestOptions.allowRedirectDowngrade != null) {
          this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
        }
        if (requestOptions.maxRedirects != null) {
          this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
        }
        if (requestOptions.keepAlive != null) {
          this._keepAlive = requestOptions.keepAlive;
        }
        if (requestOptions.allowRetries != null) {
          this._allowRetries = requestOptions.allowRetries;
        }
        if (requestOptions.maxRetries != null) {
          this._maxRetries = requestOptions.maxRetries;
        }
      }
    }
    options(requestUrl, additionalHeaders) {
      return __awaiter2(this, void 0, void 0, function* () {
        return this.request("OPTIONS", requestUrl, null, additionalHeaders || {});
      });
    }
    get(requestUrl, additionalHeaders) {
      return __awaiter2(this, void 0, void 0, function* () {
        return this.request("GET", requestUrl, null, additionalHeaders || {});
      });
    }
    del(requestUrl, additionalHeaders) {
      return __awaiter2(this, void 0, void 0, function* () {
        return this.request("DELETE", requestUrl, null, additionalHeaders || {});
      });
    }
    post(requestUrl, data2, additionalHeaders) {
      return __awaiter2(this, void 0, void 0, function* () {
        return this.request("POST", requestUrl, data2, additionalHeaders || {});
      });
    }
    patch(requestUrl, data2, additionalHeaders) {
      return __awaiter2(this, void 0, void 0, function* () {
        return this.request("PATCH", requestUrl, data2, additionalHeaders || {});
      });
    }
    put(requestUrl, data2, additionalHeaders) {
      return __awaiter2(this, void 0, void 0, function* () {
        return this.request("PUT", requestUrl, data2, additionalHeaders || {});
      });
    }
    head(requestUrl, additionalHeaders) {
      return __awaiter2(this, void 0, void 0, function* () {
        return this.request("HEAD", requestUrl, null, additionalHeaders || {});
      });
    }
    sendStream(verb, requestUrl, stream2, additionalHeaders) {
      return __awaiter2(this, void 0, void 0, function* () {
        return this.request(verb, requestUrl, stream2, additionalHeaders);
      });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
      return __awaiter2(this, void 0, void 0, function* () {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        const res = yield this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
      });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
      return __awaiter2(this, void 0, void 0, function* () {
        const data2 = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        const res = yield this.post(requestUrl, data2, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
      });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
      return __awaiter2(this, void 0, void 0, function* () {
        const data2 = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        const res = yield this.put(requestUrl, data2, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
      });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
      return __awaiter2(this, void 0, void 0, function* () {
        const data2 = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        const res = yield this.patch(requestUrl, data2, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
      });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data2, headers) {
      return __awaiter2(this, void 0, void 0, function* () {
        if (this._disposed) {
          throw new Error("Client has already been disposed.");
        }
        const parsedUrl = new URL(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb) ? this._maxRetries + 1 : 1;
        let numTries = 0;
        let response;
        do {
          response = yield this.requestRaw(info, data2);
          if (response && response.message && response.message.statusCode === HttpCodes.Unauthorized) {
            let authenticationHandler;
            for (const handler of this.handlers) {
              if (handler.canHandleAuthentication(response)) {
                authenticationHandler = handler;
                break;
              }
            }
            if (authenticationHandler) {
              return authenticationHandler.handleAuthentication(this, info, data2);
            } else {
              return response;
            }
          }
          let redirectsRemaining = this._maxRedirects;
          while (response.message.statusCode && HttpRedirectCodes.includes(response.message.statusCode) && this._allowRedirects && redirectsRemaining > 0) {
            const redirectUrl = response.message.headers["location"];
            if (!redirectUrl) {
              break;
            }
            const parsedRedirectUrl = new URL(redirectUrl);
            if (parsedUrl.protocol === "https:" && parsedUrl.protocol !== parsedRedirectUrl.protocol && !this._allowRedirectDowngrade) {
              throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");
            }
            yield response.readBody();
            if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
              for (const header in headers) {
                if (header.toLowerCase() === "authorization") {
                  delete headers[header];
                }
              }
            }
            info = this._prepareRequest(verb, parsedRedirectUrl, headers);
            response = yield this.requestRaw(info, data2);
            redirectsRemaining--;
          }
          if (!response.message.statusCode || !HttpResponseRetryCodes.includes(response.message.statusCode)) {
            return response;
          }
          numTries += 1;
          if (numTries < maxTries) {
            yield response.readBody();
            yield this._performExponentialBackoff(numTries);
          }
        } while (numTries < maxTries);
        return response;
      });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
      if (this._agent) {
        this._agent.destroy();
      }
      this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data2) {
      return __awaiter2(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
          function callbackForResult(err, res) {
            if (err) {
              reject(err);
            } else if (!res) {
              reject(new Error("Unknown error"));
            } else {
              resolve(res);
            }
          }
          this.requestRawWithCallback(info, data2, callbackForResult);
        });
      });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data2, onResult) {
      if (typeof data2 === "string") {
        if (!info.options.headers) {
          info.options.headers = {};
        }
        info.options.headers["Content-Length"] = Buffer.byteLength(data2, "utf8");
      }
      let callbackCalled = false;
      function handleResult(err, res) {
        if (!callbackCalled) {
          callbackCalled = true;
          onResult(err, res);
        }
      }
      const req = info.httpModule.request(info.options, (msg) => {
        const res = new HttpClientResponse(msg);
        handleResult(void 0, res);
      });
      let socket;
      req.on("socket", (sock) => {
        socket = sock;
      });
      req.setTimeout(this._socketTimeout || 3 * 6e4, () => {
        if (socket) {
          socket.end();
        }
        handleResult(new Error(`Request timeout: ${info.options.path}`));
      });
      req.on("error", function(err) {
        handleResult(err);
      });
      if (data2 && typeof data2 === "string") {
        req.write(data2, "utf8");
      }
      if (data2 && typeof data2 !== "string") {
        data2.on("close", function() {
          req.end();
        });
        data2.pipe(req);
      } else {
        req.end();
      }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
      const parsedUrl = new URL(serverUrl);
      return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
      const info = {};
      info.parsedUrl = requestUrl;
      const usingSsl = info.parsedUrl.protocol === "https:";
      info.httpModule = usingSsl ? https2 : http2;
      const defaultPort = usingSsl ? 443 : 80;
      info.options = {};
      info.options.host = info.parsedUrl.hostname;
      info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
      info.options.path = (info.parsedUrl.pathname || "") + (info.parsedUrl.search || "");
      info.options.method = method;
      info.options.headers = this._mergeHeaders(headers);
      if (this.userAgent != null) {
        info.options.headers["user-agent"] = this.userAgent;
      }
      info.options.agent = this._getAgent(info.parsedUrl);
      if (this.handlers) {
        for (const handler of this.handlers) {
          handler.prepareRequest(info.options);
        }
      }
      return info;
    }
    _mergeHeaders(headers) {
      if (this.requestOptions && this.requestOptions.headers) {
        return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
      }
      return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default2) {
      let clientHeader;
      if (this.requestOptions && this.requestOptions.headers) {
        clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
      }
      return additionalHeaders[header] || clientHeader || _default2;
    }
    _getAgent(parsedUrl) {
      let agent;
      const proxyUrl = pm.getProxyUrl(parsedUrl);
      const useProxy = proxyUrl && proxyUrl.hostname;
      if (this._keepAlive && useProxy) {
        agent = this._proxyAgent;
      }
      if (this._keepAlive && !useProxy) {
        agent = this._agent;
      }
      if (agent) {
        return agent;
      }
      const usingSsl = parsedUrl.protocol === "https:";
      let maxSockets = 100;
      if (this.requestOptions) {
        maxSockets = this.requestOptions.maxSockets || http2.globalAgent.maxSockets;
      }
      if (proxyUrl && proxyUrl.hostname) {
        const agentOptions = {
          maxSockets,
          keepAlive: this._keepAlive,
          proxy: Object.assign(Object.assign({}, (proxyUrl.username || proxyUrl.password) && {
            proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
          }), { host: proxyUrl.hostname, port: proxyUrl.port })
        };
        let tunnelAgent;
        const overHttps = proxyUrl.protocol === "https:";
        if (usingSsl) {
          tunnelAgent = overHttps ? tunnel$12.httpsOverHttps : tunnel$12.httpsOverHttp;
        } else {
          tunnelAgent = overHttps ? tunnel$12.httpOverHttps : tunnel$12.httpOverHttp;
        }
        agent = tunnelAgent(agentOptions);
        this._proxyAgent = agent;
      }
      if (this._keepAlive && !agent) {
        const options = { keepAlive: this._keepAlive, maxSockets };
        agent = usingSsl ? new https2.Agent(options) : new http2.Agent(options);
        this._agent = agent;
      }
      if (!agent) {
        agent = usingSsl ? https2.globalAgent : http2.globalAgent;
      }
      if (usingSsl && this._ignoreSslError) {
        agent.options = Object.assign(agent.options || {}, {
          rejectUnauthorized: false
        });
      }
      return agent;
    }
    _performExponentialBackoff(retryNumber) {
      return __awaiter2(this, void 0, void 0, function* () {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise((resolve) => setTimeout(() => resolve(), ms));
      });
    }
    _processResponse(res, options) {
      return __awaiter2(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter2(this, void 0, void 0, function* () {
          const statusCode = res.message.statusCode || 0;
          const response = {
            statusCode,
            result: null,
            headers: {}
          };
          if (statusCode === HttpCodes.NotFound) {
            resolve(response);
          }
          function dateTimeDeserializer(key, value) {
            if (typeof value === "string") {
              const a = new Date(value);
              if (!isNaN(a.valueOf())) {
                return a;
              }
            }
            return value;
          }
          let obj;
          let contents;
          try {
            contents = yield res.readBody();
            if (contents && contents.length > 0) {
              if (options && options.deserializeDates) {
                obj = JSON.parse(contents, dateTimeDeserializer);
              } else {
                obj = JSON.parse(contents);
              }
              response.result = obj;
            }
            response.headers = res.message.headers;
          } catch (err) {
          }
          if (statusCode > 299) {
            let msg;
            if (obj && obj.message) {
              msg = obj.message;
            } else if (contents && contents.length > 0) {
              msg = contents;
            } else {
              msg = `Failed request: (${statusCode})`;
            }
            const err = new HttpClientError(msg, statusCode);
            err.result = response.result;
            reject(err);
          } else {
            resolve(response);
          }
        }));
      });
    }
  }
  exports.HttpClient = HttpClient;
  const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => (c[k.toLowerCase()] = obj[k], c), {});
})(lib);
var auth = {};
var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(auth, "__esModule", { value: true });
auth.PersonalAccessTokenCredentialHandler = auth.BearerCredentialHandler = auth.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  prepareRequest(options) {
    if (!options.headers) {
      throw Error("The request has no headers");
    }
    options.headers["Authorization"] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`;
  }
  // This handler cannot handle 401
  canHandleAuthentication() {
    return false;
  }
  handleAuthentication() {
    return __awaiter(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
auth.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
  constructor(token) {
    this.token = token;
  }
  // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401
  prepareRequest(options) {
    if (!options.headers) {
      throw Error("The request has no headers");
    }
    options.headers["Authorization"] = `Bearer ${this.token}`;
  }
  // This handler cannot handle 401
  canHandleAuthentication() {
    return false;
  }
  handleAuthentication() {
    return __awaiter(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
auth.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
  constructor(token) {
    this.token = token;
  }
  // currently implements pre-authorization
  // TODO: support preAuth = false where it hooks on 401
  prepareRequest(options) {
    if (!options.headers) {
      throw Error("The request has no headers");
    }
    options.headers["Authorization"] = `Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`;
  }
  // This handler cannot handle 401
  canHandleAuthentication() {
    return false;
  }
  handleAuthentication() {
    return __awaiter(this, void 0, void 0, function* () {
      throw new Error("not implemented");
    });
  }
}
auth.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
var hasRequiredOidcUtils;
function requireOidcUtils() {
  if (hasRequiredOidcUtils)
    return oidcUtils;
  hasRequiredOidcUtils = 1;
  var __awaiter2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(oidcUtils, "__esModule", { value: true });
  oidcUtils.OidcClient = void 0;
  const http_client_1 = lib;
  const auth_1 = auth;
  const core_1 = requireCore();
  class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
      const requestOptions = {
        allowRetries: allowRetry,
        maxRetries: maxRetry
      };
      return new http_client_1.HttpClient("actions/oidc-client", [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
      const token = process.env["ACTIONS_ID_TOKEN_REQUEST_TOKEN"];
      if (!token) {
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");
      }
      return token;
    }
    static getIDTokenUrl() {
      const runtimeUrl = process.env["ACTIONS_ID_TOKEN_REQUEST_URL"];
      if (!runtimeUrl) {
        throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");
      }
      return runtimeUrl;
    }
    static getCall(id_token_url) {
      var _a;
      return __awaiter2(this, void 0, void 0, function* () {
        const httpclient = OidcClient.createHttpClient();
        const res = yield httpclient.getJson(id_token_url).catch((error2) => {
          throw new Error(`Failed to get ID Token. 
 
        Error Code : ${error2.statusCode}
 
        Error Message: ${error2.result.message}`);
        });
        const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
        if (!id_token) {
          throw new Error("Response json body do not have ID Token field");
        }
        return id_token;
      });
    }
    static getIDToken(audience) {
      return __awaiter2(this, void 0, void 0, function* () {
        try {
          let id_token_url = OidcClient.getIDTokenUrl();
          if (audience) {
            const encodedAudience = encodeURIComponent(audience);
            id_token_url = `${id_token_url}&audience=${encodedAudience}`;
          }
          core_1.debug(`ID token url is ${id_token_url}`);
          const id_token = yield OidcClient.getCall(id_token_url);
          core_1.setSecret(id_token);
          return id_token;
        } catch (error2) {
          throw new Error(`Error message: ${error2.message}`);
        }
      });
    }
  }
  oidcUtils.OidcClient = OidcClient;
  return oidcUtils;
}
var summary = {};
var hasRequiredSummary;
function requireSummary() {
  if (hasRequiredSummary)
    return summary;
  hasRequiredSummary = 1;
  (function(exports) {
    var __awaiter2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
    const os_1 = require$$0;
    const fs_1 = require$$0$1;
    const { access, appendFile, writeFile } = fs_1.promises;
    exports.SUMMARY_ENV_VAR = "GITHUB_STEP_SUMMARY";
    exports.SUMMARY_DOCS_URL = "https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";
    class Summary {
      constructor() {
        this._buffer = "";
      }
      /**
       * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
       * Also checks r/w permissions.
       *
       * @returns step summary file path
       */
      filePath() {
        return __awaiter2(this, void 0, void 0, function* () {
          if (this._filePath) {
            return this._filePath;
          }
          const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
          if (!pathFromEnv) {
            throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
          }
          try {
            yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
          } catch (_a) {
            throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
          }
          this._filePath = pathFromEnv;
          return this._filePath;
        });
      }
      /**
       * Wraps content in an HTML tag, adding any HTML attributes
       *
       * @param {string} tag HTML tag to wrap
       * @param {string | null} content content within the tag
       * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
       *
       * @returns {string} content wrapped in HTML element
       */
      wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs).map(([key, value]) => ` ${key}="${value}"`).join("");
        if (!content) {
          return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
      }
      /**
       * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
       *
       * @param {SummaryWriteOptions} [options] (optional) options for write operation
       *
       * @returns {Promise<Summary>} summary instance
       */
      write(options) {
        return __awaiter2(this, void 0, void 0, function* () {
          const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
          const filePath = yield this.filePath();
          const writeFunc = overwrite ? writeFile : appendFile;
          yield writeFunc(filePath, this._buffer, { encoding: "utf8" });
          return this.emptyBuffer();
        });
      }
      /**
       * Clears the summary buffer and wipes the summary file
       *
       * @returns {Summary} summary instance
       */
      clear() {
        return __awaiter2(this, void 0, void 0, function* () {
          return this.emptyBuffer().write({ overwrite: true });
        });
      }
      /**
       * Returns the current summary buffer as a string
       *
       * @returns {string} string of summary buffer
       */
      stringify() {
        return this._buffer;
      }
      /**
       * If the summary buffer is empty
       *
       * @returns {boolen} true if the buffer is empty
       */
      isEmptyBuffer() {
        return this._buffer.length === 0;
      }
      /**
       * Resets the summary buffer without writing to summary file
       *
       * @returns {Summary} summary instance
       */
      emptyBuffer() {
        this._buffer = "";
        return this;
      }
      /**
       * Adds raw text to the summary buffer
       *
       * @param {string} text content to add
       * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
       *
       * @returns {Summary} summary instance
       */
      addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
      }
      /**
       * Adds the operating system-specific end-of-line marker to the buffer
       *
       * @returns {Summary} summary instance
       */
      addEOL() {
        return this.addRaw(os_1.EOL);
      }
      /**
       * Adds an HTML codeblock to the summary buffer
       *
       * @param {string} code content to render within fenced code block
       * @param {string} lang (optional) language to syntax highlight code
       *
       * @returns {Summary} summary instance
       */
      addCodeBlock(code, lang) {
        const attrs = Object.assign({}, lang && { lang });
        const element = this.wrap("pre", this.wrap("code", code), attrs);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML list to the summary buffer
       *
       * @param {string[]} items list of items to render
       * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
       *
       * @returns {Summary} summary instance
       */
      addList(items, ordered = false) {
        const tag = ordered ? "ol" : "ul";
        const listItems = items.map((item) => this.wrap("li", item)).join("");
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML table to the summary buffer
       *
       * @param {SummaryTableCell[]} rows table rows
       *
       * @returns {Summary} summary instance
       */
      addTable(rows) {
        const tableBody = rows.map((row) => {
          const cells = row.map((cell) => {
            if (typeof cell === "string") {
              return this.wrap("td", cell);
            }
            const { header, data: data2, colspan, rowspan } = cell;
            const tag = header ? "th" : "td";
            const attrs = Object.assign(Object.assign({}, colspan && { colspan }), rowspan && { rowspan });
            return this.wrap(tag, data2, attrs);
          }).join("");
          return this.wrap("tr", cells);
        }).join("");
        const element = this.wrap("table", tableBody);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds a collapsable HTML details element to the summary buffer
       *
       * @param {string} label text for the closed state
       * @param {string} content collapsable content
       *
       * @returns {Summary} summary instance
       */
      addDetails(label, content) {
        const element = this.wrap("details", this.wrap("summary", label) + content);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML image tag to the summary buffer
       *
       * @param {string} src path to the image you to embed
       * @param {string} alt text description of the image
       * @param {SummaryImageOptions} options (optional) addition image attributes
       *
       * @returns {Summary} summary instance
       */
      addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, width && { width }), height && { height });
        const element = this.wrap("img", null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML section heading element
       *
       * @param {string} text heading text
       * @param {number | string} [level=1] (optional) the heading level, default: 1
       *
       * @returns {Summary} summary instance
       */
      addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag) ? tag : "h1";
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML thematic break (<hr>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addSeparator() {
        const element = this.wrap("hr", null);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML line break (<br>) to the summary buffer
       *
       * @returns {Summary} summary instance
       */
      addBreak() {
        const element = this.wrap("br", null);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML blockquote to the summary buffer
       *
       * @param {string} text quote text
       * @param {string} cite (optional) citation url
       *
       * @returns {Summary} summary instance
       */
      addQuote(text, cite) {
        const attrs = Object.assign({}, cite && { cite });
        const element = this.wrap("blockquote", text, attrs);
        return this.addRaw(element).addEOL();
      }
      /**
       * Adds an HTML anchor tag to the summary buffer
       *
       * @param {string} text link text/content
       * @param {string} href hyperlink
       *
       * @returns {Summary} summary instance
       */
      addLink(text, href) {
        const element = this.wrap("a", text, { href });
        return this.addRaw(element).addEOL();
      }
    }
    const _summary = new Summary();
    exports.markdownSummary = _summary;
    exports.summary = _summary;
  })(summary);
  return summary;
}
var pathUtils = {};
var hasRequiredPathUtils;
function requirePathUtils() {
  if (hasRequiredPathUtils)
    return pathUtils;
  hasRequiredPathUtils = 1;
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar2 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k))
          __createBinding2(result, mod, k);
    }
    __setModuleDefault2(result, mod);
    return result;
  };
  Object.defineProperty(pathUtils, "__esModule", { value: true });
  pathUtils.toPlatformPath = pathUtils.toWin32Path = pathUtils.toPosixPath = void 0;
  const path2 = __importStar2(require$$0$3);
  function toPosixPath(pth) {
    return pth.replace(/[\\]/g, "/");
  }
  pathUtils.toPosixPath = toPosixPath;
  function toWin32Path(pth) {
    return pth.replace(/[/]/g, "\\");
  }
  pathUtils.toWin32Path = toWin32Path;
  function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path2.sep);
  }
  pathUtils.toPlatformPath = toPlatformPath;
  return pathUtils;
}
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore)
    return core$1;
  hasRequiredCore = 1;
  (function(exports) {
    var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar2 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.hasOwnProperty.call(mod, k))
            __createBinding2(result, mod, k);
      }
      __setModuleDefault2(result, mod);
      return result;
    };
    var __awaiter2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
    const command_1 = command;
    const file_command_1 = fileCommand;
    const utils_12 = utils$l;
    const os2 = __importStar2(require$$0);
    const path2 = __importStar2(require$$0$3);
    const oidc_utils_1 = requireOidcUtils();
    var ExitCode;
    (function(ExitCode2) {
      ExitCode2[ExitCode2["Success"] = 0] = "Success";
      ExitCode2[ExitCode2["Failure"] = 1] = "Failure";
    })(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
    function exportVariable(name, val) {
      const convertedVal = utils_12.toCommandValue(val);
      process.env[name] = convertedVal;
      const filePath = process.env["GITHUB_ENV"] || "";
      if (filePath) {
        return file_command_1.issueFileCommand("ENV", file_command_1.prepareKeyValueMessage(name, val));
      }
      command_1.issueCommand("set-env", { name }, convertedVal);
    }
    exports.exportVariable = exportVariable;
    function setSecret(secret) {
      command_1.issueCommand("add-mask", {}, secret);
    }
    exports.setSecret = setSecret;
    function addPath(inputPath) {
      const filePath = process.env["GITHUB_PATH"] || "";
      if (filePath) {
        file_command_1.issueFileCommand("PATH", inputPath);
      } else {
        command_1.issueCommand("add-path", {}, inputPath);
      }
      process.env["PATH"] = `${inputPath}${path2.delimiter}${process.env["PATH"]}`;
    }
    exports.addPath = addPath;
    function getInput(name, options) {
      const val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
      if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
      }
      if (options && options.trimWhitespace === false) {
        return val;
      }
      return val.trim();
    }
    exports.getInput = getInput;
    function getMultilineInput(name, options) {
      const inputs = getInput(name, options).split("\n").filter((x) => x !== "");
      if (options && options.trimWhitespace === false) {
        return inputs;
      }
      return inputs.map((input) => input.trim());
    }
    exports.getMultilineInput = getMultilineInput;
    function getBooleanInput(name, options) {
      const trueValue = ["true", "True", "TRUE"];
      const falseValue = ["false", "False", "FALSE"];
      const val = getInput(name, options);
      if (trueValue.includes(val))
        return true;
      if (falseValue.includes(val))
        return false;
      throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
    }
    exports.getBooleanInput = getBooleanInput;
    function setOutput(name, value) {
      const filePath = process.env["GITHUB_OUTPUT"] || "";
      if (filePath) {
        return file_command_1.issueFileCommand("OUTPUT", file_command_1.prepareKeyValueMessage(name, value));
      }
      process.stdout.write(os2.EOL);
      command_1.issueCommand("set-output", { name }, utils_12.toCommandValue(value));
    }
    exports.setOutput = setOutput;
    function setCommandEcho(enabled) {
      command_1.issue("echo", enabled ? "on" : "off");
    }
    exports.setCommandEcho = setCommandEcho;
    function setFailed(message) {
      process.exitCode = ExitCode.Failure;
      error2(message);
    }
    exports.setFailed = setFailed;
    function isDebug() {
      return process.env["RUNNER_DEBUG"] === "1";
    }
    exports.isDebug = isDebug;
    function debug2(message) {
      command_1.issueCommand("debug", {}, message);
    }
    exports.debug = debug2;
    function error2(message, properties = {}) {
      command_1.issueCommand("error", utils_12.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports.error = error2;
    function warning(message, properties = {}) {
      command_1.issueCommand("warning", utils_12.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports.warning = warning;
    function notice(message, properties = {}) {
      command_1.issueCommand("notice", utils_12.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
    }
    exports.notice = notice;
    function info(message) {
      process.stdout.write(message + os2.EOL);
    }
    exports.info = info;
    function startGroup(name) {
      command_1.issue("group", name);
    }
    exports.startGroup = startGroup;
    function endGroup() {
      command_1.issue("endgroup");
    }
    exports.endGroup = endGroup;
    function group(name, fn) {
      return __awaiter2(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
          result = yield fn();
        } finally {
          endGroup();
        }
        return result;
      });
    }
    exports.group = group;
    function saveState(name, value) {
      const filePath = process.env["GITHUB_STATE"] || "";
      if (filePath) {
        return file_command_1.issueFileCommand("STATE", file_command_1.prepareKeyValueMessage(name, value));
      }
      command_1.issueCommand("save-state", { name }, utils_12.toCommandValue(value));
    }
    exports.saveState = saveState;
    function getState(name) {
      return process.env[`STATE_${name}`] || "";
    }
    exports.getState = getState;
    function getIDToken(aud) {
      return __awaiter2(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
      });
    }
    exports.getIDToken = getIDToken;
    var summary_1 = requireSummary();
    Object.defineProperty(exports, "summary", { enumerable: true, get: function() {
      return summary_1.summary;
    } });
    var summary_2 = requireSummary();
    Object.defineProperty(exports, "markdownSummary", { enumerable: true, get: function() {
      return summary_2.markdownSummary;
    } });
    var path_utils_1 = requirePathUtils();
    Object.defineProperty(exports, "toPosixPath", { enumerable: true, get: function() {
      return path_utils_1.toPosixPath;
    } });
    Object.defineProperty(exports, "toWin32Path", { enumerable: true, get: function() {
      return path_utils_1.toWin32Path;
    } });
    Object.defineProperty(exports, "toPlatformPath", { enumerable: true, get: function() {
      return path_utils_1.toPlatformPath;
    } });
  })(core$1);
  return core$1;
}
var coreExports = requireCore();
const isPromiseFulfilled = (promiseResult) => {
  return promiseResult.status === "fulfilled";
};
const asyncFilterMap = async (array2, map2) => {
  const checks = await Promise.allSettled(array2.map(map2));
  return checks.filter(isPromiseFulfilled).map((item) => item.value).filter(isNotNullish);
};
const normalizeRegExpLikeToRegExp = (regExpLike) => {
  return typeof regExpLike === "string" ? new RegExp(regExpLike) : regExpLike;
};
function isObject$4(item) {
  return item !== null && item !== void 0 && typeof item === "object" && !Array.isArray(item);
}
const defaultDropKeyMatcher = (value, _key) => value === void 0;
const dropKeys = (t2, matcher2 = defaultDropKeyMatcher) => {
  for (const key in t2) {
    if (matcher2(t2[key], key)) {
      delete t2[key];
    }
    if (isObject$4(t2[key])) {
      dropKeys(t2[key], matcher2);
    }
  }
  return t2;
};
const deepMergeInternal = (sources, options, visited = /* @__PURE__ */ new Set()) => {
  const firstSource = sources.shift();
  visited.add(firstSource);
  const merged = structuredClone(firstSource);
  for (const source of sources) {
    visited.add(source);
    if (Array.isArray(source) && Array.isArray(merged)) {
      for (const element of source) {
        if (!merged.includes(element)) {
          merged.push(element);
        }
      }
    } else if (isObject$4(source) && isObject$4(merged)) {
      for (const key in source) {
        const sourceValue = source[key];
        if (Object.hasOwn(merged, key) && merged[key] === void 0 && (options == null ? void 0 : options.preferUndefined)) {
          continue;
        }
        if (isObject$4(sourceValue)) {
          if (merged[key]) {
            merged[key] = deepMergeInternal(
              [merged[key], structuredClone(sourceValue)],
              options,
              visited
            );
          } else {
            Object.assign(merged, { [key]: structuredClone(sourceValue) });
          }
        } else {
          Object.assign(merged, { [key]: structuredClone(sourceValue) });
        }
      }
    }
  }
  if (options == null ? void 0 : options.dropKeys) {
    const matcher2 = typeof options.dropKeys === "function" ? options.dropKeys : defaultDropKeyMatcher;
    dropKeys(merged, matcher2);
  }
  return merged;
};
const deepMerge = (sources, options) => {
  return deepMergeInternal(sources, options);
};
const isNotNullish = (o) => o !== void 0 && o !== null;
const prettyLogStyles = {
  reset: [0, 0],
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  overline: [53, 55],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
};
function formatTemplate(settings2, template, values2, hideUnsetPlaceholder = false) {
  const templateString = String(template);
  const ansiColorWrap = (placeholderValue, code) => `\x1B[${code[0]}m${placeholderValue}\x1B[${code[1]}m`;
  const styleWrap = (value, style) => {
    if (style != null && typeof style === "string") {
      return ansiColorWrap(value, prettyLogStyles[style]);
    } else if (style != null && Array.isArray(style)) {
      return style.reduce((prevValue, thisStyle) => styleWrap(prevValue, thisStyle), value);
    } else {
      if (style != null && style[value.trim()] != null) {
        return styleWrap(value, style[value.trim()]);
      } else if (style != null && style["*"] != null) {
        return styleWrap(value, style["*"]);
      } else {
        return value;
      }
    }
  };
  return templateString.replace(/{{(.+?)}}/g, (_, placeholder) => {
    const value = values2[placeholder] != null ? values2[placeholder] : hideUnsetPlaceholder ? "" : _;
    return settings2.stylePrettyLogs ? styleWrap(value, settings2?.prettyLogStyles?.[placeholder]) + ansiColorWrap("", prettyLogStyles.reset) : value;
  });
}
function jsonStringifyRecursive(obj) {
  const cache = /* @__PURE__ */ new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (cache.has(value)) {
        return "[Circular]";
      }
      cache.add(value);
    }
    return value;
  });
}
function inspect(obj, opts) {
  const ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (opts != null) {
    _extend(ctx, opts);
  }
  if (isUndefined(ctx.showHidden))
    ctx.showHidden = false;
  if (isUndefined(ctx.depth))
    ctx.depth = 2;
  if (isUndefined(ctx.colors))
    ctx.colors = true;
  if (isUndefined(ctx.customInspect))
    ctx.customInspect = true;
  if (ctx.colors)
    ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
inspect.colors = prettyLogStyles;
inspect.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
};
function isBoolean$1(arg) {
  return typeof arg === "boolean";
}
function isUndefined(arg) {
  return arg == null;
}
function stylizeNoColor(str2) {
  return str2;
}
function stylizeWithColor(str2, styleType) {
  const style = inspect.styles[styleType];
  if (style != null && inspect?.colors?.[style]?.[0] != null && inspect?.colors?.[style]?.[1] != null) {
    return "\x1B[" + inspect.colors[style][0] + "m" + str2 + "\x1B[" + inspect.colors[style][1] + "m";
  } else {
    return str2;
  }
}
function isFunction(arg) {
  return typeof arg === "function";
}
function isString$2(arg) {
  return typeof arg === "string";
}
function isNumber$3(arg) {
  return typeof arg === "number";
}
function isNull$1(arg) {
  return arg === null;
}
function hasOwn2(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function isRegExp(re2) {
  return isObject$3(re2) && objectToString(re2) === "[object RegExp]";
}
function isObject$3(arg) {
  return typeof arg === "object" && arg !== null;
}
function isError$1(e) {
  return isObject$3(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isDate(d) {
  return isObject$3(d) && objectToString(d) === "[object Date]";
}
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
function arrayToHash(array2) {
  const hash = {};
  array2.forEach((val) => {
    hash[val] = true;
  });
  return hash;
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys4) {
  const output = [];
  for (let i = 0, l = value.length; i < l; ++i) {
    if (hasOwn2(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push("");
    }
  }
  keys4.forEach((key) => {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}
function formatError$1(value) {
  return "[" + Error.prototype.toString.call(value) + "]";
}
function formatValue(ctx, value, recurseTimes = 0) {
  if (ctx.customInspect && value != null && isFunction(value) && value?.inspect !== inspect && !(value?.constructor && value?.constructor.prototype === value)) {
    if (typeof value.inspect !== "function" && value.toString != null) {
      return value.toString();
    }
    let ret = value?.inspect(recurseTimes, ctx);
    if (!isString$2(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }
  const primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }
  let keys4 = Object.keys(value);
  const visibleKeys = arrayToHash(keys4);
  try {
    if (ctx.showHidden && Object.getOwnPropertyNames) {
      keys4 = Object.getOwnPropertyNames(value);
    }
  } catch (e) {
  }
  if (isError$1(value) && (keys4.indexOf("message") >= 0 || keys4.indexOf("description") >= 0)) {
    return formatError$1(value);
  }
  if (keys4.length === 0) {
    if (isFunction(ctx.stylize)) {
      if (isFunction(value)) {
        const name = value.name ? ": " + value.name : "";
        return ctx.stylize("[Function" + name + "]", "special");
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), "date");
      }
      if (isError$1(value)) {
        return formatError$1(value);
      }
    } else {
      return value;
    }
  }
  let base = "";
  let array2 = false;
  let braces2 = ["{\n", "\n}"];
  if (Array.isArray(value)) {
    array2 = true;
    braces2 = ["[\n", "\n]"];
  }
  if (isFunction(value)) {
    const n = value.name ? ": " + value.name : "";
    base = " [Function" + n + "]";
  }
  if (isRegExp(value)) {
    base = " " + RegExp.prototype.toString.call(value);
  }
  if (isDate(value)) {
    base = " " + Date.prototype.toUTCString.call(value);
  }
  if (isError$1(value)) {
    base = " " + formatError$1(value);
  }
  if (keys4.length === 0 && (!array2 || value.length == 0)) {
    return braces2[0] + base + braces2[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    } else {
      return ctx.stylize("[Object]", "special");
    }
  }
  ctx.seen.push(value);
  let output;
  if (array2) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys4);
  } else {
    output = keys4.map((key) => {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array2);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString(output, base, braces2);
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array2) {
  let name, str2, desc;
  desc = { value: void 0 };
  try {
    desc.value = value[key];
  } catch (e) {
  }
  try {
    if (Object.getOwnPropertyDescriptor) {
      desc = Object.getOwnPropertyDescriptor(value, key) || desc;
    }
  } catch (e) {
  }
  if (desc.get) {
    if (desc.set) {
      str2 = ctx.stylize("[Getter/Setter]", "special");
    } else {
      str2 = ctx.stylize("[Getter]", "special");
    }
  } else {
    if (desc.set) {
      str2 = ctx.stylize("[Setter]", "special");
    }
  }
  if (!hasOwn2(visibleKeys, key)) {
    name = "[" + key + "]";
  }
  if (!str2) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull$1(recurseTimes)) {
        str2 = formatValue(ctx, desc.value, void 0);
      } else {
        str2 = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str2.indexOf("\n") > -1) {
        if (array2) {
          str2 = str2.split("\n").map((line) => {
            return "  " + line;
          }).join("\n").substr(2);
        } else {
          str2 = "\n" + str2.split("\n").map((line) => {
            return "   " + line;
          }).join("\n");
        }
      }
    } else {
      str2 = ctx.stylize("[Circular]", "special");
    }
  }
  if (isUndefined(name)) {
    if (array2 && key.match(/^\d+$/)) {
      return str2;
    }
    name = JSON.stringify("" + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, "name");
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, "\\'").replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, "string");
    }
  }
  return name + ": " + str2;
}
function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize("undefined", "undefined");
  if (isString$2(value)) {
    const simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\\'") + "'";
    return ctx.stylize(simple, "string");
  }
  if (isNumber$3(value))
    return ctx.stylize("" + value, "number");
  if (isBoolean$1(value))
    return ctx.stylize("" + value, "boolean");
  if (isNull$1(value))
    return ctx.stylize("null", "null");
}
function reduceToSingleString(output, base, braces2) {
  return braces2[0] + (base === "" ? "" : base + "\n") + "  " + output.join(",\n  ") + " " + braces2[1];
}
function _extend(origin, add) {
  if (!add || !isObject$3(add))
    return origin;
  const keys4 = Object.keys(add);
  let i = keys4.length;
  while (i--) {
    origin[keys4[i]] = add[keys4[i]];
  }
  return origin;
}
function formatWithOptions(inspectOptions, ...args) {
  const ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (inspectOptions != null) {
    _extend(ctx, inspectOptions);
  }
  const first = args[0];
  let a = 0;
  let str2 = "";
  let join2 = "";
  if (typeof first === "string") {
    if (args.length === 1) {
      return first;
    }
    let tempStr;
    let lastPos = 0;
    for (let i = 0; i < first.length - 1; i++) {
      if (first.charCodeAt(i) === 37) {
        const nextChar = first.charCodeAt(++i);
        if (a + 1 !== args.length) {
          switch (nextChar) {
            case 115: {
              const tempArg = args[++a];
              if (typeof tempArg === "number") {
                tempStr = formatPrimitive(ctx, tempArg);
              } else if (typeof tempArg === "bigint") {
                tempStr = formatPrimitive(ctx, tempArg);
              } else if (typeof tempArg !== "object" || tempArg === null) {
                tempStr = String(tempArg);
              } else {
                tempStr = inspect(tempArg, {
                  ...inspectOptions,
                  compact: 3,
                  colors: false,
                  depth: 0
                });
              }
              break;
            }
            case 106:
              tempStr = jsonStringifyRecursive(args[++a]);
              break;
            case 100: {
              const tempNum = args[++a];
              if (typeof tempNum === "bigint") {
                tempStr = formatPrimitive(ctx, tempNum);
              } else if (typeof tempNum === "symbol") {
                tempStr = "NaN";
              } else {
                tempStr = formatPrimitive(ctx, tempNum);
              }
              break;
            }
            case 79:
              tempStr = inspect(args[++a], inspectOptions);
              break;
            case 111:
              tempStr = inspect(args[++a], {
                ...inspectOptions,
                showHidden: true,
                showProxy: true,
                depth: 4
              });
              break;
            case 105: {
              const tempInteger = args[++a];
              if (typeof tempInteger === "bigint") {
                tempStr = formatPrimitive(ctx, tempInteger);
              } else if (typeof tempInteger === "symbol") {
                tempStr = "NaN";
              } else {
                tempStr = formatPrimitive(ctx, parseInt(tempStr));
              }
              break;
            }
            case 102: {
              const tempFloat = args[++a];
              if (typeof tempFloat === "symbol") {
                tempStr = "NaN";
              } else {
                tempStr = formatPrimitive(ctx, parseInt(tempFloat));
              }
              break;
            }
            case 99:
              a += 1;
              tempStr = "";
              break;
            case 37:
              str2 += first.slice(lastPos, i);
              lastPos = i + 1;
              continue;
            default:
              continue;
          }
          if (lastPos !== i - 1) {
            str2 += first.slice(lastPos, i - 1);
          }
          str2 += tempStr;
          lastPos = i + 1;
        } else if (nextChar === 37) {
          str2 += first.slice(lastPos, i);
          lastPos = i + 1;
        }
      }
    }
    if (lastPos !== 0) {
      a++;
      join2 = " ";
      if (lastPos < first.length) {
        str2 += first.slice(lastPos);
      }
    }
  }
  while (a < args.length) {
    const value = args[a];
    str2 += join2;
    str2 += typeof value !== "string" ? inspect(value, inspectOptions) : value;
    join2 = " ";
    a++;
  }
  return str2;
}
const meta = {
  runtime: ![typeof window, typeof document].includes("undefined") ? "Browser" : "Generic",
  browser: globalThis?.["navigator"]?.userAgent
};
const pathRegex = /(?:(?:file|https?|global code|[^@]+)@)?(?:file:)?((?:\/[^:/]+){2,})(?::(\d+))?(?::(\d+))?/;
function getMeta(logLevelId, logLevelName, stackDepthLevel, hideLogPositionForPerformance, name, parentNames) {
  return Object.assign({}, meta, {
    name,
    parentNames,
    date: /* @__PURE__ */ new Date(),
    logLevelId,
    logLevelName,
    path: !hideLogPositionForPerformance ? getCallerStackFrame(stackDepthLevel) : void 0
  });
}
function getCallerStackFrame(stackDepthLevel, error2 = Error()) {
  return stackLineToStackFrame(error2?.stack?.split("\n")?.filter((line) => !line.includes("Error: "))?.[stackDepthLevel]);
}
function getErrorTrace(error2) {
  return error2?.stack?.split("\n")?.filter((line) => !line.includes("Error: "))?.reduce((result, line) => {
    result.push(stackLineToStackFrame(line));
    return result;
  }, []);
}
function stackLineToStackFrame(line) {
  const href = globalThis.location.origin;
  const pathResult = {
    fullFilePath: void 0,
    fileName: void 0,
    fileNameWithLine: void 0,
    fileColumn: void 0,
    fileLine: void 0,
    filePath: void 0,
    filePathWithLine: void 0,
    method: void 0
  };
  if (line != null) {
    const match2 = line.match(pathRegex);
    if (match2) {
      pathResult.filePath = match2[1].replace(/\?.*$/, "");
      pathResult.fullFilePath = `${href}${pathResult.filePath}`;
      const pathParts = pathResult.filePath.split("/");
      pathResult.fileName = pathParts[pathParts.length - 1];
      pathResult.fileLine = match2[2];
      pathResult.fileColumn = match2[3];
      pathResult.filePathWithLine = `${pathResult.filePath}:${pathResult.fileLine}`;
      pathResult.fileNameWithLine = `${pathResult.fileName}:${pathResult.fileLine}`;
    }
  }
  return pathResult;
}
function isError(e) {
  return e instanceof Error;
}
function prettyFormatLogObj(maskedArgs, settings2) {
  return maskedArgs.reduce((result, arg) => {
    isError(arg) ? result.errors.push(prettyFormatErrorObj(arg, settings2)) : result.args.push(arg);
    return result;
  }, { args: [], errors: [] });
}
function prettyFormatErrorObj(error2, settings2) {
  const errorStackStr = getErrorTrace(error2).map((stackFrame) => {
    return formatTemplate(settings2, settings2.prettyErrorStackTemplate, { ...stackFrame }, true);
  });
  const placeholderValuesError = {
    errorName: ` ${error2.name} `,
    errorMessage: error2.message,
    errorStack: errorStackStr.join("\n")
  };
  return formatTemplate(settings2, settings2.prettyErrorTemplate, placeholderValuesError);
}
function transportFormatted(logMetaMarkup, logArgs, logErrors, settings2) {
  const logErrorsStr = (logErrors.length > 0 && logArgs.length > 0 ? "\n" : "") + logErrors.join("\n");
  settings2.prettyInspectOptions.colors = settings2.stylePrettyLogs;
  console.log(logMetaMarkup + formatWithOptions(settings2.prettyInspectOptions, ...logArgs) + logErrorsStr);
}
function transportJSON(json2) {
  console.log(jsonStringifyRecursive(json2));
}
function isBuffer(arg) {
  return arg ? void 0 : void 0;
}
function formatNumberAddZeros(value, digits = 2, addNumber = 0) {
  if (value != null && isNaN(value)) {
    return "";
  }
  value = value != null ? value + addNumber : value;
  return digits === 2 ? value == null ? "--" : value < 10 ? "0" + value : value.toString() : value == null ? "---" : value < 10 ? "00" + value : value < 100 ? "0" + value : value.toString();
}
class BaseLogger {
  constructor(settings2, logObj, stackDepthLevel = 4) {
    this.logObj = logObj;
    this.stackDepthLevel = stackDepthLevel;
    const isBrowser = ![typeof window, typeof document].includes("undefined");
    const isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
    this.runtime = isBrowser ? "browser" : isNode ? "nodejs" : "unknown";
    const isBrowserBlinkEngine = isBrowser ? ((window?.["chrome"] || window.Intl && Intl?.["v8BreakIterator"]) && "CSS" in window) != null : false;
    const isSafari = isBrowser ? /^((?!chrome|android).)*safari/i.test(navigator?.userAgent) : false;
    this.stackDepthLevel = isSafari ? 4 : this.stackDepthLevel;
    this.settings = {
      type: settings2?.type ?? "pretty",
      name: settings2?.name,
      parentNames: settings2?.parentNames,
      minLevel: settings2?.minLevel ?? 0,
      argumentsArrayName: settings2?.argumentsArrayName,
      hideLogPositionForProduction: settings2?.hideLogPositionForProduction ?? false,
      prettyLogTemplate: settings2?.prettyLogTemplate ?? "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}	{{logLevelName}}	{{filePathWithLine}}{{nameWithDelimiterPrefix}}	",
      prettyErrorTemplate: settings2?.prettyErrorTemplate ?? "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
      prettyErrorStackTemplate: settings2?.prettyErrorStackTemplate ?? "  • {{fileName}}	{{method}}\n	{{filePathWithLine}}",
      prettyErrorParentNamesSeparator: settings2?.prettyErrorParentNamesSeparator ?? ":",
      prettyErrorLoggerNameDelimiter: settings2?.prettyErrorLoggerNameDelimiter ?? "	",
      stylePrettyLogs: settings2?.stylePrettyLogs ?? true,
      prettyLogTimeZone: settings2?.prettyLogTimeZone ?? "UTC",
      prettyLogStyles: settings2?.prettyLogStyles ?? {
        logLevelName: {
          "*": ["bold", "black", "bgWhiteBright", "dim"],
          SILLY: ["bold", "white"],
          TRACE: ["bold", "whiteBright"],
          DEBUG: ["bold", "green"],
          INFO: ["bold", "blue"],
          WARN: ["bold", "yellow"],
          ERROR: ["bold", "red"],
          FATAL: ["bold", "redBright"]
        },
        dateIsoStr: "white",
        filePathWithLine: "white",
        name: ["white", "bold"],
        nameWithDelimiterPrefix: ["white", "bold"],
        nameWithDelimiterSuffix: ["white", "bold"],
        errorName: ["bold", "bgRedBright", "whiteBright"],
        fileName: ["yellow"],
        fileNameWithLine: "white"
      },
      prettyInspectOptions: settings2?.prettyInspectOptions ?? {
        colors: true,
        compact: false,
        depth: Infinity
      },
      metaProperty: settings2?.metaProperty ?? "_meta",
      maskPlaceholder: settings2?.maskPlaceholder ?? "[***]",
      maskValuesOfKeys: settings2?.maskValuesOfKeys ?? ["password"],
      maskValuesOfKeysCaseInsensitive: settings2?.maskValuesOfKeysCaseInsensitive ?? false,
      maskValuesRegEx: settings2?.maskValuesRegEx,
      prefix: [...settings2?.prefix ?? []],
      attachedTransports: [...settings2?.attachedTransports ?? []],
      overwrite: {
        mask: settings2?.overwrite?.mask,
        toLogObj: settings2?.overwrite?.toLogObj,
        addMeta: settings2?.overwrite?.addMeta,
        formatMeta: settings2?.overwrite?.formatMeta,
        formatLogObj: settings2?.overwrite?.formatLogObj,
        transportFormatted: settings2?.overwrite?.transportFormatted,
        transportJSON: settings2?.overwrite?.transportJSON
      }
    };
    this.settings.stylePrettyLogs = this.settings.stylePrettyLogs && isBrowser && !isBrowserBlinkEngine ? false : this.settings.stylePrettyLogs;
  }
  log(logLevelId, logLevelName, ...args) {
    if (logLevelId < this.settings.minLevel) {
      return;
    }
    const logArgs = [...this.settings.prefix, ...args];
    const maskedArgs = this.settings.overwrite?.mask != null ? this.settings.overwrite?.mask(logArgs) : this.settings.maskValuesOfKeys != null && this.settings.maskValuesOfKeys.length > 0 ? this._mask(logArgs) : logArgs;
    const thisLogObj = this.logObj != null ? this._recursiveCloneAndExecuteFunctions(this.logObj) : void 0;
    const logObj = this.settings.overwrite?.toLogObj != null ? this.settings.overwrite?.toLogObj(maskedArgs, thisLogObj) : this._toLogObj(maskedArgs, thisLogObj);
    const logObjWithMeta = this.settings.overwrite?.addMeta != null ? this.settings.overwrite?.addMeta(logObj, logLevelId, logLevelName) : this._addMetaToLogObj(logObj, logLevelId, logLevelName);
    let logMetaMarkup;
    let logArgsAndErrorsMarkup = void 0;
    if (this.settings.overwrite?.formatMeta != null) {
      logMetaMarkup = this.settings.overwrite?.formatMeta(logObjWithMeta?.[this.settings.metaProperty]);
    }
    if (this.settings.overwrite?.formatLogObj != null) {
      logArgsAndErrorsMarkup = this.settings.overwrite?.formatLogObj(maskedArgs, this.settings);
    }
    if (this.settings.type === "pretty") {
      logMetaMarkup = logMetaMarkup ?? this._prettyFormatLogObjMeta(logObjWithMeta?.[this.settings.metaProperty]);
      logArgsAndErrorsMarkup = logArgsAndErrorsMarkup ?? prettyFormatLogObj(maskedArgs, this.settings);
    }
    if (logMetaMarkup != null && logArgsAndErrorsMarkup != null) {
      this.settings.overwrite?.transportFormatted != null ? this.settings.overwrite?.transportFormatted(logMetaMarkup, logArgsAndErrorsMarkup.args, logArgsAndErrorsMarkup.errors, this.settings) : transportFormatted(logMetaMarkup, logArgsAndErrorsMarkup.args, logArgsAndErrorsMarkup.errors, this.settings);
    } else {
      this.settings.overwrite?.transportJSON != null ? this.settings.overwrite?.transportJSON(logObjWithMeta) : this.settings.type !== "hidden" ? transportJSON(logObjWithMeta) : void 0;
    }
    if (this.settings.attachedTransports != null && this.settings.attachedTransports.length > 0) {
      this.settings.attachedTransports.forEach((transportLogger) => {
        transportLogger(logObjWithMeta);
      });
    }
    return logObjWithMeta;
  }
  attachTransport(transportLogger) {
    this.settings.attachedTransports.push(transportLogger);
  }
  getSubLogger(settings2, logObj) {
    const subLoggerSettings = {
      ...this.settings,
      ...settings2,
      parentNames: this.settings?.parentNames != null && this.settings?.name != null ? [...this.settings.parentNames, this.settings.name] : this.settings?.name != null ? [this.settings.name] : void 0,
      prefix: [...this.settings.prefix, ...settings2?.prefix ?? []]
    };
    const subLogger = new this.constructor(subLoggerSettings, logObj ?? this.logObj, this.stackDepthLevel);
    return subLogger;
  }
  _mask(args) {
    const maskValuesOfKeys = this.settings.maskValuesOfKeysCaseInsensitive !== true ? this.settings.maskValuesOfKeys : this.settings.maskValuesOfKeys.map((key) => key.toLowerCase());
    return args?.map((arg) => {
      return this._recursiveCloneAndMaskValuesOfKeys(arg, maskValuesOfKeys);
    });
  }
  _recursiveCloneAndMaskValuesOfKeys(source, keys4, seen = []) {
    if (seen.includes(source)) {
      return { ...source };
    }
    if (typeof source === "object" && source != null) {
      seen.push(source);
    }
    return isBuffer(source) ? source : source instanceof Map ? new Map(source) : source instanceof Set ? new Set(source) : Array.isArray(source) ? source.map((item) => this._recursiveCloneAndMaskValuesOfKeys(item, keys4, seen)) : source instanceof Date ? new Date(source.getTime()) : isError(source) ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
      o[prop] = keys4.includes(this.settings?.maskValuesOfKeysCaseInsensitive !== true ? prop : prop.toLowerCase()) ? this.settings.maskPlaceholder : this._recursiveCloneAndMaskValuesOfKeys(source[prop], keys4, seen);
      return o;
    }, this._cloneError(source)) : source != null && typeof source === "object" ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
      o[prop] = keys4.includes(this.settings?.maskValuesOfKeysCaseInsensitive !== true ? prop : prop.toLowerCase()) ? this.settings.maskPlaceholder : this._recursiveCloneAndMaskValuesOfKeys(source[prop], keys4, seen);
      return o;
    }, Object.create(Object.getPrototypeOf(source))) : ((source2) => {
      this.settings?.maskValuesRegEx?.forEach((regEx) => {
        source2 = source2?.toString()?.replace(regEx, this.settings.maskPlaceholder);
      });
      return source2;
    })(source);
  }
  _recursiveCloneAndExecuteFunctions(source, seen = []) {
    if (seen.includes(source)) {
      return { ...source };
    }
    if (typeof source === "object") {
      seen.push(source);
    }
    return Array.isArray(source) ? source.map((item) => this._recursiveCloneAndExecuteFunctions(item, seen)) : source instanceof Date ? new Date(source.getTime()) : source && typeof source === "object" ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
      Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(source, prop));
      o[prop] = typeof source[prop] === "function" ? source[prop]() : this._recursiveCloneAndExecuteFunctions(source[prop], seen);
      return o;
    }, Object.create(Object.getPrototypeOf(source))) : source;
  }
  _toLogObj(args, clonedLogObj = {}) {
    args = args?.map((arg) => isError(arg) ? this._toErrorObject(arg) : arg);
    if (this.settings.argumentsArrayName == null) {
      if (args.length === 1 && !Array.isArray(args[0]) && isBuffer(args[0]) !== true && !(args[0] instanceof Date)) {
        clonedLogObj = typeof args[0] === "object" && args[0] != null ? { ...args[0], ...clonedLogObj } : { 0: args[0], ...clonedLogObj };
      } else {
        clonedLogObj = { ...clonedLogObj, ...args };
      }
    } else {
      clonedLogObj = {
        ...clonedLogObj,
        [this.settings.argumentsArrayName]: args
      };
    }
    return clonedLogObj;
  }
  _cloneError(error2) {
    const ErrorConstructor = error2.constructor;
    const newError = new ErrorConstructor(error2.message);
    Object.assign(newError, error2);
    const propertyNames = Object.getOwnPropertyNames(newError);
    for (const propName of propertyNames) {
      const propDesc = Object.getOwnPropertyDescriptor(newError, propName);
      if (propDesc) {
        propDesc.writable = true;
        Object.defineProperty(newError, propName, propDesc);
      }
    }
    return newError;
  }
  _toErrorObject(error2) {
    return {
      nativeError: error2,
      name: error2.name ?? "Error",
      message: error2.message,
      stack: getErrorTrace(error2)
    };
  }
  _addMetaToLogObj(logObj, logLevelId, logLevelName) {
    return {
      ...logObj,
      [this.settings.metaProperty]: getMeta(logLevelId, logLevelName, this.stackDepthLevel, this.settings.hideLogPositionForProduction, this.settings.name, this.settings.parentNames)
    };
  }
  _prettyFormatLogObjMeta(logObjMeta) {
    if (logObjMeta == null) {
      return "";
    }
    let template = this.settings.prettyLogTemplate;
    const placeholderValues = {};
    if (template.includes("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}")) {
      template = template.replace("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}", "{{dateIsoStr}}");
    } else {
      if (this.settings.prettyLogTimeZone === "UTC") {
        placeholderValues["yyyy"] = logObjMeta?.date?.getUTCFullYear() ?? "----";
        placeholderValues["mm"] = formatNumberAddZeros(logObjMeta?.date?.getUTCMonth(), 2, 1);
        placeholderValues["dd"] = formatNumberAddZeros(logObjMeta?.date?.getUTCDate(), 2);
        placeholderValues["hh"] = formatNumberAddZeros(logObjMeta?.date?.getUTCHours(), 2);
        placeholderValues["MM"] = formatNumberAddZeros(logObjMeta?.date?.getUTCMinutes(), 2);
        placeholderValues["ss"] = formatNumberAddZeros(logObjMeta?.date?.getUTCSeconds(), 2);
        placeholderValues["ms"] = formatNumberAddZeros(logObjMeta?.date?.getUTCMilliseconds(), 3);
      } else {
        placeholderValues["yyyy"] = logObjMeta?.date?.getFullYear() ?? "----";
        placeholderValues["mm"] = formatNumberAddZeros(logObjMeta?.date?.getMonth(), 2, 1);
        placeholderValues["dd"] = formatNumberAddZeros(logObjMeta?.date?.getDate(), 2);
        placeholderValues["hh"] = formatNumberAddZeros(logObjMeta?.date?.getHours(), 2);
        placeholderValues["MM"] = formatNumberAddZeros(logObjMeta?.date?.getMinutes(), 2);
        placeholderValues["ss"] = formatNumberAddZeros(logObjMeta?.date?.getSeconds(), 2);
        placeholderValues["ms"] = formatNumberAddZeros(logObjMeta?.date?.getMilliseconds(), 3);
      }
    }
    const dateInSettingsTimeZone = this.settings.prettyLogTimeZone === "UTC" ? logObjMeta?.date : new Date(logObjMeta?.date?.getTime() - logObjMeta?.date?.getTimezoneOffset() * 6e4);
    placeholderValues["rawIsoStr"] = dateInSettingsTimeZone?.toISOString();
    placeholderValues["dateIsoStr"] = dateInSettingsTimeZone?.toISOString().replace("T", " ").replace("Z", "");
    placeholderValues["logLevelName"] = logObjMeta?.logLevelName;
    placeholderValues["fileNameWithLine"] = logObjMeta?.path?.fileNameWithLine ?? "";
    placeholderValues["filePathWithLine"] = logObjMeta?.path?.filePathWithLine ?? "";
    placeholderValues["fullFilePath"] = logObjMeta?.path?.fullFilePath ?? "";
    let parentNamesString = this.settings.parentNames?.join(this.settings.prettyErrorParentNamesSeparator);
    parentNamesString = parentNamesString != null && logObjMeta?.name != null ? parentNamesString + this.settings.prettyErrorParentNamesSeparator : void 0;
    placeholderValues["name"] = logObjMeta?.name != null || parentNamesString != null ? (parentNamesString ?? "") + logObjMeta?.name : "";
    placeholderValues["nameWithDelimiterPrefix"] = placeholderValues["name"].length > 0 ? this.settings.prettyErrorLoggerNameDelimiter + placeholderValues["name"] : "";
    placeholderValues["nameWithDelimiterSuffix"] = placeholderValues["name"].length > 0 ? placeholderValues["name"] + this.settings.prettyErrorLoggerNameDelimiter : "";
    return formatTemplate(this.settings, template, placeholderValues);
  }
}
class Logger extends BaseLogger {
  constructor(settings2, logObj) {
    super(settings2, logObj, 5);
  }
  log(logLevelId, logLevelName, ...args) {
    return super.log(logLevelId, logLevelName, ...args);
  }
  silly(...args) {
    return super.log(0, "SILLY", ...args);
  }
  trace(...args) {
    return super.log(1, "TRACE", ...args);
  }
  debug(...args) {
    return super.log(2, "DEBUG", ...args);
  }
  info(...args) {
    return super.log(3, "INFO", ...args);
  }
  warn(...args) {
    return super.log(4, "WARN", ...args);
  }
  error(...args) {
    return super.log(5, "ERROR", ...args);
  }
  fatal(...args) {
    return super.log(6, "FATAL", ...args);
  }
  getSubLogger(settings2, logObj) {
    return super.getSubLogger(settings2, logObj);
  }
}
const prettyLogTemplateTimestamp = "{{dateIsoStr}}	";
const prettyLogTemplateBody = "{{logLevelName}}:{{nameWithDelimiterPrefix}}	";
const normalizeLoggerOptions = (options) => {
  const timestamps = options?.timestamps ?? false;
  return deepMerge([
    {
      name: "log",
      timestamps,
      prettyLogTemplate: timestamps ? prettyLogTemplateTimestamp + prettyLogTemplateBody : prettyLogTemplateBody
    },
    options
  ]);
};
const createLogger = (options) => {
  return new Logger(normalizeLoggerOptions(options));
};
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2[LogLevel2["OFF"] = 1e6] = "OFF";
  LogLevel2[LogLevel2["FATAL"] = 6] = "FATAL";
  LogLevel2[LogLevel2["ERROR"] = 5] = "ERROR";
  LogLevel2[LogLevel2["WARN"] = 4] = "WARN";
  LogLevel2[LogLevel2["INFO"] = 3] = "INFO";
  LogLevel2[LogLevel2["DEBUG"] = 2] = "DEBUG";
  LogLevel2[LogLevel2["TRACE"] = 1] = "TRACE";
  LogLevel2[LogLevel2["SILLY"] = 0] = "SILLY";
  return LogLevel2;
})(LogLevel || {});
Object.values(LogLevel).filter(
  (valueOrKey) => typeof valueOrKey === "string"
);
Object.values(LogLevel).filter(
  (valueOrKey) => typeof valueOrKey === "number"
);
const noopLogger = createLogger({ type: "hidden", minLevel: LogLevel.OFF });
const normalizeLoggerOption = (options) => {
  return {
    logger: options?.logger ?? noopLogger
  };
};
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return typeof subject === "undefined" || subject === null;
}
function isObject$2(subject) {
  return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
  if (Array.isArray(sequence))
    return sequence;
  else if (isNothing(sequence))
    return [];
  return [sequence];
}
function extend(target, source) {
  var index, length, key, sourceKeys;
  if (source) {
    sourceKeys = Object.keys(source);
    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }
  return target;
}
function repeat(string2, count) {
  var result = "", cycle;
  for (cycle = 0; cycle < count; cycle += 1) {
    result += string2;
  }
  return result;
}
function isNegativeZero(number) {
  return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject$2;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend;
var common$7 = {
  isNothing: isNothing_1,
  isObject: isObject_1,
  toArray: toArray_1,
  repeat: repeat_1,
  isNegativeZero: isNegativeZero_1,
  extend: extend_1
};
function formatError(exception2, compact) {
  var where = "", message = exception2.reason || "(unknown reason)";
  if (!exception2.mark)
    return message;
  if (exception2.mark.name) {
    where += 'in "' + exception2.mark.name + '" ';
  }
  where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
  if (!compact && exception2.mark.snippet) {
    where += "\n\n" + exception2.mark.snippet;
  }
  return message + " " + where;
}
function YAMLException$1(reason, mark) {
  Error.call(this);
  this.name = "YAMLException";
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack || "";
  }
}
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString5(compact) {
  return this.name + ": " + formatError(this, compact);
};
var exception = YAMLException$1;
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = "";
  var tail = "";
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
  if (position - lineStart > maxHalfLength) {
    head = " ... ";
    lineStart = position - maxHalfLength + head.length;
  }
  if (lineEnd - position > maxHalfLength) {
    tail = " ...";
    lineEnd = position + maxHalfLength - tail.length;
  }
  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "→") + tail,
    pos: position - lineStart + head.length
    // relative position
  };
}
function padStart(string2, max2) {
  return common$7.repeat(" ", max2 - string2.length) + string2;
}
function makeSnippet(mark, options) {
  options = Object.create(options || null);
  if (!mark.buffer)
    return null;
  if (!options.maxLength)
    options.maxLength = 79;
  if (typeof options.indent !== "number")
    options.indent = 1;
  if (typeof options.linesBefore !== "number")
    options.linesBefore = 3;
  if (typeof options.linesAfter !== "number")
    options.linesAfter = 2;
  var re2 = /\r?\n|\r|\0/g;
  var lineStarts = [0];
  var lineEnds = [];
  var match2;
  var foundLineNo = -1;
  while (match2 = re2.exec(mark.buffer)) {
    lineEnds.push(match2.index);
    lineStarts.push(match2.index + match2[0].length);
    if (mark.position <= match2.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }
  if (foundLineNo < 0)
    foundLineNo = lineStarts.length - 1;
  var result = "", i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0)
      break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common$7.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
  }
  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common$7.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  result += common$7.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length)
      break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common$7.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  }
  return result.replace(/\n$/, "");
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
function compileStyleAliases(map2) {
  var result = {};
  if (map2 !== null) {
    Object.keys(map2).forEach(function(style) {
      map2[style].forEach(function(alias) {
        result[String(alias)] = style;
      });
    });
  }
  return result;
}
function Type$1(tag, options) {
  options = options || {};
  Object.keys(options).forEach(function(name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });
  this.options = options;
  this.tag = tag;
  this.kind = options["kind"] || null;
  this.resolve = options["resolve"] || function() {
    return true;
  };
  this.construct = options["construct"] || function(data2) {
    return data2;
  };
  this.instanceOf = options["instanceOf"] || null;
  this.predicate = options["predicate"] || null;
  this.represent = options["represent"] || null;
  this.representName = options["representName"] || null;
  this.defaultStyle = options["defaultStyle"] || null;
  this.multi = options["multi"] || false;
  this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}
var type = Type$1;
function compileList(schema2, name) {
  var result = [];
  schema2[name].forEach(function(currentType) {
    var newIndex = result.length;
    result.forEach(function(previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
        newIndex = previousIndex;
      }
    });
    result[newIndex] = currentType;
  });
  return result;
}
function compileMap() {
  var result = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, index, length;
  function collectType(type2) {
    if (type2.multi) {
      result.multi[type2.kind].push(type2);
      result.multi["fallback"].push(type2);
    } else {
      result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
    }
  }
  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}
function Schema$1(definition) {
  return this.extend(definition);
}
Schema$1.prototype.extend = function extend2(definition) {
  var implicit = [];
  var explicit = [];
  if (definition instanceof type) {
    explicit.push(definition);
  } else if (Array.isArray(definition)) {
    explicit = explicit.concat(definition);
  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    if (definition.implicit)
      implicit = implicit.concat(definition.implicit);
    if (definition.explicit)
      explicit = explicit.concat(definition.explicit);
  } else {
    throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  }
  implicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
    if (type$1.loadKind && type$1.loadKind !== "scalar") {
      throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }
    if (type$1.multi) {
      throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }
  });
  explicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
  });
  var result = Object.create(Schema$1.prototype);
  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);
  result.compiledImplicit = compileList(result, "implicit");
  result.compiledExplicit = compileList(result, "explicit");
  result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
  return result;
};
var schema = Schema$1;
var str = new type("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(data2) {
    return data2 !== null ? data2 : "";
  }
});
var seq = new type("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(data2) {
    return data2 !== null ? data2 : [];
  }
});
var map = new type("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(data2) {
    return data2 !== null ? data2 : {};
  }
});
var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});
function resolveYamlNull(data2) {
  if (data2 === null)
    return true;
  var max2 = data2.length;
  return max2 === 1 && data2 === "~" || max2 === 4 && (data2 === "null" || data2 === "Null" || data2 === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull(object) {
  return object === null;
}
var _null = new type("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function resolveYamlBoolean(data2) {
  if (data2 === null)
    return false;
  var max2 = data2.length;
  return max2 === 4 && (data2 === "true" || data2 === "True" || data2 === "TRUE") || max2 === 5 && (data2 === "false" || data2 === "False" || data2 === "FALSE");
}
function constructYamlBoolean(data2) {
  return data2 === "true" || data2 === "True" || data2 === "TRUE";
}
function isBoolean(object) {
  return Object.prototype.toString.call(object) === "[object Boolean]";
}
var bool = new type("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function(object) {
      return object ? "true" : "false";
    },
    uppercase: function(object) {
      return object ? "TRUE" : "FALSE";
    },
    camelcase: function(object) {
      return object ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function isHexCode(c) {
  return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function isOctCode(c) {
  return 48 <= c && c <= 55;
}
function isDecCode(c) {
  return 48 <= c && c <= 57;
}
function resolveYamlInteger(data2) {
  if (data2 === null)
    return false;
  var max2 = data2.length, index = 0, hasDigits = false, ch;
  if (!max2)
    return false;
  ch = data2[index];
  if (ch === "-" || ch === "+") {
    ch = data2[++index];
  }
  if (ch === "0") {
    if (index + 1 === max2)
      return true;
    ch = data2[++index];
    if (ch === "b") {
      index++;
      for (; index < max2; index++) {
        ch = data2[index];
        if (ch === "_")
          continue;
        if (ch !== "0" && ch !== "1")
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "x") {
      index++;
      for (; index < max2; index++) {
        ch = data2[index];
        if (ch === "_")
          continue;
        if (!isHexCode(data2.charCodeAt(index)))
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "o") {
      index++;
      for (; index < max2; index++) {
        ch = data2[index];
        if (ch === "_")
          continue;
        if (!isOctCode(data2.charCodeAt(index)))
          return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
  }
  if (ch === "_")
    return false;
  for (; index < max2; index++) {
    ch = data2[index];
    if (ch === "_")
      continue;
    if (!isDecCode(data2.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }
  if (!hasDigits || ch === "_")
    return false;
  return true;
}
function constructYamlInteger(data2) {
  var value = data2, sign = 1, ch;
  if (value.indexOf("_") !== -1) {
    value = value.replace(/_/g, "");
  }
  ch = value[0];
  if (ch === "-" || ch === "+") {
    if (ch === "-")
      sign = -1;
    value = value.slice(1);
    ch = value[0];
  }
  if (value === "0")
    return 0;
  if (ch === "0") {
    if (value[1] === "b")
      return sign * parseInt(value.slice(2), 2);
    if (value[1] === "x")
      return sign * parseInt(value.slice(2), 16);
    if (value[1] === "o")
      return sign * parseInt(value.slice(2), 8);
  }
  return sign * parseInt(value, 10);
}
function isInteger(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common$7.isNegativeZero(object));
}
var int = new type("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(obj) {
      return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
    },
    octal: function(obj) {
      return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
    },
    decimal: function(obj) {
      return obj.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(obj) {
      return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function resolveYamlFloat(data2) {
  if (data2 === null)
    return false;
  if (!YAML_FLOAT_PATTERN.test(data2) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  data2[data2.length - 1] === "_") {
    return false;
  }
  return true;
}
function constructYamlFloat(data2) {
  var value, sign;
  value = data2.replace(/_/g, "").toLowerCase();
  sign = value[0] === "-" ? -1 : 1;
  if ("+-".indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }
  if (value === ".inf") {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value === ".nan") {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
  var res;
  if (isNaN(object)) {
    switch (style) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  } else if (common$7.isNegativeZero(object)) {
    return "-0.0";
  }
  res = object.toString(10);
  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common$7.isNegativeZero(object));
}
var float = new type("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: "lowercase"
});
var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var YAML_TIMESTAMP_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function resolveYamlTimestamp(data2) {
  if (data2 === null)
    return false;
  if (YAML_DATE_REGEXP.exec(data2) !== null)
    return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data2) !== null)
    return true;
  return false;
}
function constructYamlTimestamp(data2) {
  var match2, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
  match2 = YAML_DATE_REGEXP.exec(data2);
  if (match2 === null)
    match2 = YAML_TIMESTAMP_REGEXP.exec(data2);
  if (match2 === null)
    throw new Error("Date resolve error");
  year = +match2[1];
  month = +match2[2] - 1;
  day = +match2[3];
  if (!match2[4]) {
    return new Date(Date.UTC(year, month, day));
  }
  hour = +match2[4];
  minute = +match2[5];
  second = +match2[6];
  if (match2[7]) {
    fraction = match2[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += "0";
    }
    fraction = +fraction;
  }
  if (match2[9]) {
    tz_hour = +match2[10];
    tz_minute = +(match2[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 6e4;
    if (match2[9] === "-")
      delta = -delta;
  }
  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta)
    date.setTime(date.getTime() - delta);
  return date;
}
function representYamlTimestamp(object) {
  return object.toISOString();
}
var timestamp = new type("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});
function resolveYamlMerge(data2) {
  return data2 === "<<" || data2 === null;
}
var merge$1 = new type("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data2) {
  if (data2 === null)
    return false;
  var code, idx, bitlen = 0, max2 = data2.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max2; idx++) {
    code = map2.indexOf(data2.charAt(idx));
    if (code > 64)
      continue;
    if (code < 0)
      return false;
    bitlen += 6;
  }
  return bitlen % 8 === 0;
}
function constructYamlBinary(data2) {
  var idx, tailbits, input = data2.replace(/[\r\n=]/g, ""), max2 = input.length, map2 = BASE64_MAP, bits = 0, result = [];
  for (idx = 0; idx < max2; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 255);
      result.push(bits >> 8 & 255);
      result.push(bits & 255);
    }
    bits = bits << 6 | map2.indexOf(input.charAt(idx));
  }
  tailbits = max2 % 4 * 6;
  if (tailbits === 0) {
    result.push(bits >> 16 & 255);
    result.push(bits >> 8 & 255);
    result.push(bits & 255);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 255);
    result.push(bits >> 2 & 255);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 255);
  }
  return new Uint8Array(result);
}
function representYamlBinary(object) {
  var result = "", bits = 0, idx, tail, max2 = object.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max2; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map2[bits >> 18 & 63];
      result += map2[bits >> 12 & 63];
      result += map2[bits >> 6 & 63];
      result += map2[bits & 63];
    }
    bits = (bits << 8) + object[idx];
  }
  tail = max2 % 3;
  if (tail === 0) {
    result += map2[bits >> 18 & 63];
    result += map2[bits >> 12 & 63];
    result += map2[bits >> 6 & 63];
    result += map2[bits & 63];
  } else if (tail === 2) {
    result += map2[bits >> 10 & 63];
    result += map2[bits >> 4 & 63];
    result += map2[bits << 2 & 63];
    result += map2[64];
  } else if (tail === 1) {
    result += map2[bits >> 2 & 63];
    result += map2[bits << 4 & 63];
    result += map2[64];
    result += map2[64];
  }
  return result;
}
function isBinary(obj) {
  return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var binary = new type("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data2) {
  if (data2 === null)
    return true;
  var objectKeys2 = [], index, length, pair, pairKey, pairHasKey, object = data2;
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;
    if (_toString$2.call(pair) !== "[object Object]")
      return false;
    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey)
          pairHasKey = true;
        else
          return false;
      }
    }
    if (!pairHasKey)
      return false;
    if (objectKeys2.indexOf(pairKey) === -1)
      objectKeys2.push(pairKey);
    else
      return false;
  }
  return true;
}
function constructYamlOmap(data2) {
  return data2 !== null ? data2 : [];
}
var omap = new type("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data2) {
  if (data2 === null)
    return true;
  var index, length, pair, keys4, result, object = data2;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    if (_toString$1.call(pair) !== "[object Object]")
      return false;
    keys4 = Object.keys(pair);
    if (keys4.length !== 1)
      return false;
    result[index] = [keys4[0], pair[keys4[0]]];
  }
  return true;
}
function constructYamlPairs(data2) {
  if (data2 === null)
    return [];
  var index, length, pair, keys4, result, object = data2;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    keys4 = Object.keys(pair);
    result[index] = [keys4[0], pair[keys4[0]]];
  }
  return result;
}
var pairs = new type("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data2) {
  if (data2 === null)
    return true;
  var key, object = data2;
  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null)
        return false;
    }
  }
  return true;
}
function constructYamlSet(data2) {
  return data2 !== null ? data2 : {};
}
var set = new type("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: resolveYamlSet,
  construct: constructYamlSet
});
var _default = core.extend({
  implicit: [
    timestamp,
    merge$1
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
  return c === 10 || c === 13;
}
function is_WHITE_SPACE(c) {
  return c === 9 || c === 32;
}
function is_WS_OR_EOL(c) {
  return c === 9 || c === 32 || c === 10 || c === 13;
}
function is_FLOW_INDICATOR(c) {
  return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
  var lc;
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  lc = c | 32;
  if (97 <= lc && lc <= 102) {
    return lc - 97 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 120) {
    return 2;
  }
  if (c === 117) {
    return 4;
  }
  if (c === 85) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "" : c === 95 ? " " : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
  if (c <= 65535) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode(
    (c - 65536 >> 10) + 55296,
    (c - 65536 & 1023) + 56320
  );
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function State$1(input, options) {
  this.input = input;
  this.filename = options["filename"] || null;
  this.schema = options["schema"] || _default;
  this.onWarning = options["onWarning"] || null;
  this.legacy = options["legacy"] || false;
  this.json = options["json"] || false;
  this.listener = options["listener"] || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.firstTabInLine = -1;
  this.documents = [];
}
function generateError(state, message) {
  var mark = {
    name: state.filename,
    buffer: state.input.slice(0, -1),
    // omit trailing \0
    position: state.position,
    line: state.line,
    column: state.position - state.lineStart
  };
  mark.snippet = snippet(mark);
  return new exception(message, mark);
}
function throwError$1(state, message) {
  throw generateError(state, message);
}
function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}
var directiveHandlers = {
  YAML: function handleYamlDirective(state, name, args) {
    var match2, major2, minor2;
    if (state.version !== null) {
      throwError$1(state, "duplication of %YAML directive");
    }
    if (args.length !== 1) {
      throwError$1(state, "YAML directive accepts exactly one argument");
    }
    match2 = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match2 === null) {
      throwError$1(state, "ill-formed argument of the YAML directive");
    }
    major2 = parseInt(match2[1], 10);
    minor2 = parseInt(match2[2], 10);
    if (major2 !== 1) {
      throwError$1(state, "unacceptable YAML version of the document");
    }
    state.version = args[0];
    state.checkLineBreaks = minor2 < 2;
    if (minor2 !== 1 && minor2 !== 2) {
      throwWarning(state, "unsupported YAML version of the document");
    }
  },
  TAG: function handleTagDirective(state, name, args) {
    var handle, prefix;
    if (args.length !== 2) {
      throwError$1(state, "TAG directive accepts exactly two arguments");
    }
    handle = args[0];
    prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError$1(state, "ill-formed tag handle (first argument) of the TAG directive");
    }
    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError$1(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError$1(state, "ill-formed tag prefix (second argument) of the TAG directive");
    }
    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError$1(state, "tag prefix is malformed: " + prefix);
    }
    state.tagMap[handle] = prefix;
  }
};
function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;
  if (start < end) {
    _result = state.input.slice(start, end);
    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
          throwError$1(state, "expected valid JSON character");
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError$1(state, "the stream contains non-printable characters");
    }
    state.result += _result;
  }
}
function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;
  if (!common$7.isObject(source)) {
    throwError$1(state, "cannot merge mappings; the provided source object is unacceptable");
  }
  sourceKeys = Object.keys(source);
  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];
    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
  var index, quantity;
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);
    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError$1(state, "nested arrays are not supported inside keys");
      }
      if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
        keyNode[index] = "[object Object]";
      }
    }
  }
  if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
    keyNode = "[object Object]";
  }
  keyNode = String(keyNode);
  if (_result === null) {
    _result = {};
  }
  if (keyTag === "tag:yaml.org,2002:merge") {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError$1(state, "duplicated mapping key");
    }
    if (keyNode === "__proto__") {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }
  return _result;
}
function readLineBreak(state) {
  var ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 10) {
    state.position++;
  } else if (ch === 13) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 10) {
      state.position++;
    }
  } else {
    throwError$1(state, "a line break is expected");
  }
  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 9 && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 10 && ch !== 13 && ch !== 0);
    }
    if (is_EOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;
      while (ch === 32) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }
  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, "deficient indentation");
  }
  return lineBreaks;
}
function testDocumentSeparator(state) {
  var _position = state.position, ch;
  ch = state.input.charCodeAt(_position);
  if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state.input.charCodeAt(_position);
    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += " ";
  } else if (count > 1) {
    state.result += common$7.repeat("\n", count - 1);
  }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
  ch = state.input.charCodeAt(state.position);
  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
    return false;
  }
  if (ch === 63 || ch === 45) {
    following = state.input.charCodeAt(state.position + 1);
    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }
  state.kind = "scalar";
  state.result = "";
  captureStart = captureEnd = state.position;
  hasPendingContent = false;
  while (ch !== 0) {
    if (ch === 58) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }
    } else if (ch === 35) {
      preceding = state.input.charCodeAt(state.position - 1);
      if (is_WS_OR_EOL(preceding)) {
        break;
      }
    } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);
      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }
    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }
    ch = state.input.charCodeAt(++state.position);
  }
  captureSegment(state, captureStart, captureEnd, false);
  if (state.result) {
    return true;
  }
  state.kind = _kind;
  state.result = _result;
  return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
  var ch, captureStart, captureEnd;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 39) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 39) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (ch === 39) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError$1(state, "unexpected end of the document within a single quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError$1(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 34) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 34) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;
    } else if (ch === 92) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            throwError$1(state, "expected hexadecimal character");
          }
        }
        state.result += charFromCodepoint(hexResult);
        state.position++;
      } else {
        throwError$1(state, "unknown escape sequence");
      }
      captureStart = captureEnd = state.position;
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError$1(state, "unexpected end of the document within a double quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError$1(state, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state, nodeIndent) {
  var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 91) {
    terminator = 93;
    isMapping = false;
    _result = [];
  } else if (ch === 123) {
    terminator = 125;
    isMapping = true;
    _result = {};
  } else {
    return false;
  }
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(++state.position);
  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? "mapping" : "sequence";
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError$1(state, "missed comma between flow collection entries");
    } else if (ch === 44) {
      throwError$1(state, "expected the node content, but found ','");
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (ch === 63) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }
    _line = state.line;
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if ((isExplicitPair || state.line === _line) && ch === 58) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }
    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === 44) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }
  throwError$1(state, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state, nodeIndent) {
  var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 124) {
    folding = false;
  } else if (ch === 62) {
    folding = true;
  } else {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);
    if (ch === 43 || ch === 45) {
      if (CHOMPING_CLIP === chomping) {
        chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError$1(state, "repeat of a chomping mode identifier");
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError$1(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError$1(state, "repeat of an indentation width identifier");
      }
    } else {
      break;
    }
  }
  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));
    if (ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (!is_EOL(ch) && ch !== 0);
    }
  }
  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);
    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }
    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }
    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += common$7.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state.result += "\n";
        }
      }
      break;
    }
    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common$7.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common$7.repeat("\n", emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) {
          state.result += " ";
        }
      } else {
        state.result += common$7.repeat("\n", emptyLines);
      }
    } else {
      state.result += common$7.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
    }
    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;
    while (!is_EOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, state.position, false);
  }
  return true;
}
function readBlockSequence(state, nodeIndent) {
  var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
  if (state.firstTabInLine !== -1)
    return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError$1(state, "tab characters must not be used in indentation");
    }
    if (ch !== 45) {
      break;
    }
    following = state.input.charCodeAt(state.position + 1);
    if (!is_WS_OR_EOL(following)) {
      break;
    }
    detected = true;
    state.position++;
    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError$1(state, "bad indentation of a sequence entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "sequence";
    state.result = _result;
    return true;
  }
  return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
  var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
  if (state.firstTabInLine !== -1)
    return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError$1(state, "tab characters must not be used in indentation");
    }
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line;
    if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
      if (ch === 63) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError$1(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
      }
      state.position += 1;
      ch = following;
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;
      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        break;
      }
      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 58) {
          ch = state.input.charCodeAt(++state.position);
          if (!is_WS_OR_EOL(ch)) {
            throwError$1(state, "a whitespace character is expected after the key-value separator within a block mapping");
          }
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;
        } else if (detected) {
          throwError$1(state, "can not read an implicit mapping pair; a colon is missed");
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError$1(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true;
      }
    }
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError$1(state, "bad indentation of a mapping entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "mapping";
    state.result = _result;
  }
  return detected;
}
function readTagProperty(state) {
  var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 33)
    return false;
  if (state.tag !== null) {
    throwError$1(state, "duplication of a tag property");
  }
  ch = state.input.charCodeAt(++state.position);
  if (ch === 60) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (ch === 33) {
    isNamed = true;
    tagHandle = "!!";
    ch = state.input.charCodeAt(++state.position);
  } else {
    tagHandle = "!";
  }
  _position = state.position;
  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 62);
    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError$1(state, "unexpected end of the stream within a verbatim tag");
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      if (ch === 33) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError$1(state, "named tag handle cannot contain such characters");
          }
          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError$1(state, "tag suffix cannot contain exclamation marks");
        }
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(_position, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError$1(state, "tag suffix cannot contain flow indicator characters");
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError$1(state, "tag name cannot contain such characters: " + tagName);
  }
  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError$1(state, "tag name is malformed: " + tagName);
  }
  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === "!") {
    state.tag = "!" + tagName;
  } else if (tagHandle === "!!") {
    state.tag = "tag:yaml.org,2002:" + tagName;
  } else {
    throwError$1(state, 'undeclared tag handle "' + tagHandle + '"');
  }
  return true;
}
function readAnchorProperty(state) {
  var _position, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 38)
    return false;
  if (state.anchor !== null) {
    throwError$1(state, "duplication of an anchor property");
  }
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError$1(state, "name of an anchor node must contain at least one character");
  }
  state.anchor = state.input.slice(_position, state.position);
  return true;
}
function readAlias(state) {
  var _position, alias, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 42)
    return false;
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError$1(state, "name of an alias node must contain at least one character");
  }
  alias = state.input.slice(_position, state.position);
  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError$1(state, 'unidentified alias "' + alias + '"');
  }
  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
  if (state.listener !== null) {
    state.listener("open", state);
  }
  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;
      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }
  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }
    blockIndent = state.position - state.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;
          if (state.tag !== null || state.anchor !== null) {
            throwError$1(state, "alias node should not have any properties");
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (state.tag === null) {
            state.tag = "?";
          }
        }
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }
  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }
  } else if (state.tag === "?") {
    if (state.result !== null && state.kind !== "scalar") {
      throwError$1(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }
    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type2 = state.implicitTypes[typeIndex];
      if (type2.resolve(state.result)) {
        state.result = type2.construct(state.result);
        state.tag = type2.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== "!") {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
      type2 = state.typeMap[state.kind || "fallback"][state.tag];
    } else {
      type2 = null;
      typeList = state.typeMap.multi[state.kind || "fallback"];
      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type2 = typeList[typeIndex];
          break;
        }
      }
    }
    if (!type2) {
      throwError$1(state, "unknown tag !<" + state.tag + ">");
    }
    if (state.result !== null && type2.kind !== state.kind) {
      throwError$1(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
    }
    if (!type2.resolve(state.result, state.tag)) {
      throwError$1(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
    } else {
      state.result = type2.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }
  if (state.listener !== null) {
    state.listener("close", state);
  }
  return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
  var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = /* @__PURE__ */ Object.create(null);
  state.anchorMap = /* @__PURE__ */ Object.create(null);
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if (state.lineIndent > 0 || ch !== 37) {
      break;
    }
    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      throwError$1(state, "directive name must not be less than one character in length");
    }
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && !is_EOL(ch));
        break;
      }
      if (is_EOL(ch))
        break;
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveArgs.push(state.input.slice(_position, state.position));
    }
    if (ch !== 0)
      readLineBreak(state);
    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }
  skipSeparationSpace(state, true, -1);
  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);
  } else if (hasDirectives) {
    throwError$1(state, "directives end mark is expected");
  }
  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);
  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, "non-ASCII line breaks are interpreted as content");
  }
  state.documents.push(state.result);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 46) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }
  if (state.position < state.length - 1) {
    throwError$1(state, "end of the stream or a document separator is expected");
  } else {
    return;
  }
}
function loadDocuments(input, options) {
  input = String(input);
  options = options || {};
  if (input.length !== 0) {
    if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
      input += "\n";
    }
    if (input.charCodeAt(0) === 65279) {
      input = input.slice(1);
    }
  }
  var state = new State$1(input, options);
  var nullpos = input.indexOf("\0");
  if (nullpos !== -1) {
    state.position = nullpos;
    throwError$1(state, "null byte is not allowed in input");
  }
  state.input += "\0";
  while (state.input.charCodeAt(state.position) === 32) {
    state.lineIndent += 1;
    state.position += 1;
  }
  while (state.position < state.length - 1) {
    readDocument(state);
  }
  return state.documents;
}
function loadAll$1(input, iterator2, options) {
  if (iterator2 !== null && typeof iterator2 === "object" && typeof options === "undefined") {
    options = iterator2;
    iterator2 = null;
  }
  var documents = loadDocuments(input, options);
  if (typeof iterator2 !== "function") {
    return documents;
  }
  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator2(documents[index]);
  }
}
function load$1(input, options) {
  var documents = loadDocuments(input, options);
  if (documents.length === 0) {
    return void 0;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception("expected a single document in the stream, but found more");
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
  loadAll: loadAll_1,
  load: load_1
};
var load = loader.load;
const normalizeCwdOption = (options) => {
  return {
    cwd: (options == null ? void 0 : options.cwd) ?? process.cwd()
  };
};
const readJson = async (path2, options) => {
  var _a;
  if (path2 === void 0) {
    return void 0;
  }
  const rawJson = await readFile(path2, {
    encoding: "utf8"
  }).catch((error2) => {
    var _a2;
    (_a2 = options == null ? void 0 : options.logger) == null ? void 0 : _a2.error("error reading json", error2);
    return void 0;
  });
  if (!rawJson) {
    return void 0;
  }
  try {
    return JSON.parse(rawJson);
  } catch {
    (_a = options == null ? void 0 : options.logger) == null ? void 0 : _a.error("error parsing json");
    return void 0;
  }
};
const readYaml = async (path2) => {
  if (path2 === void 0) {
    return void 0;
  }
  const rawYaml = await readFile(path2, {
    encoding: "utf8"
  }).catch((error2) => {
    console.error("error reading yaml", error2);
    return void 0;
  });
  if (!rawYaml) {
    return void 0;
  }
  const result = load(rawYaml);
  if (typeof result === "string") {
    return void 0;
  }
  return result;
};
const isCustomJsonValueMatcher = (t2) => {
  return typeof t2 === "function";
};
const match = (target, matcher2) => {
  if (typeof matcher2 === "string") {
    return typeof target === "string" && new RegExp(matcher2).test(target);
  } else if (typeof matcher2 === "number") {
    return typeof target === "number" && target === matcher2;
  } else if (typeof matcher2 === "boolean") {
    return typeof target === "boolean" && target === matcher2;
  } else if (matcher2 === void 0) {
    return target === void 0 || target === null;
  } else if (matcher2 === null) {
    return target === null;
  } else if (isCustomJsonValueMatcher(matcher2)) {
    return matcher2(target) ?? false;
  } else if (matcher2 instanceof RegExp) {
    return typeof target === "string" && matcher2.test(target);
  } else if (Array.isArray(matcher2)) {
    return Array.isArray(target) ? matcher2.every((itemMatcher, i) => match(target[i], itemMatcher)) : false;
  } else {
    return Object.entries(matcher2).every(([filterKey, filter]) => {
      return typeof target === "object" && target !== null && // typeof null === 'object'
      !Array.isArray(target) && match(target[filterKey], filter);
    });
  }
};
const Stream = require$$0$4;
const PassThrough = Stream.PassThrough;
const slice = Array.prototype.slice;
var merge2_1 = merge2$1;
function merge2$1() {
  const streamsQueue = [];
  const args = slice.call(arguments);
  let merging = false;
  let options = args[args.length - 1];
  if (options && !Array.isArray(options) && options.pipe == null) {
    args.pop();
  } else {
    options = {};
  }
  const doEnd = options.end !== false;
  const doPipeError = options.pipeError === true;
  if (options.objectMode == null) {
    options.objectMode = true;
  }
  if (options.highWaterMark == null) {
    options.highWaterMark = 64 * 1024;
  }
  const mergedStream = PassThrough(options);
  function addStream() {
    for (let i = 0, len = arguments.length; i < len; i++) {
      streamsQueue.push(pauseStreams(arguments[i], options));
    }
    mergeStream();
    return this;
  }
  function mergeStream() {
    if (merging) {
      return;
    }
    merging = true;
    let streams = streamsQueue.shift();
    if (!streams) {
      process.nextTick(endStream);
      return;
    }
    if (!Array.isArray(streams)) {
      streams = [streams];
    }
    let pipesCount = streams.length + 1;
    function next() {
      if (--pipesCount > 0) {
        return;
      }
      merging = false;
      mergeStream();
    }
    function pipe(stream2) {
      function onend() {
        stream2.removeListener("merge2UnpipeEnd", onend);
        stream2.removeListener("end", onend);
        if (doPipeError) {
          stream2.removeListener("error", onerror);
        }
        next();
      }
      function onerror(err) {
        mergedStream.emit("error", err);
      }
      if (stream2._readableState.endEmitted) {
        return next();
      }
      stream2.on("merge2UnpipeEnd", onend);
      stream2.on("end", onend);
      if (doPipeError) {
        stream2.on("error", onerror);
      }
      stream2.pipe(mergedStream, { end: false });
      stream2.resume();
    }
    for (let i = 0; i < streams.length; i++) {
      pipe(streams[i]);
    }
    next();
  }
  function endStream() {
    merging = false;
    mergedStream.emit("queueDrain");
    if (doEnd) {
      mergedStream.end();
    }
  }
  mergedStream.setMaxListeners(0);
  mergedStream.add = addStream;
  mergedStream.on("unpipe", function(stream2) {
    stream2.emit("merge2UnpipeEnd");
  });
  if (args.length) {
    addStream.apply(null, args);
  }
  return mergedStream;
}
function pauseStreams(streams, options) {
  if (!Array.isArray(streams)) {
    if (!streams._readableState && streams.pipe) {
      streams = streams.pipe(PassThrough(options));
    }
    if (!streams._readableState || !streams.pause || !streams.pipe) {
      throw new Error("Only readable stream can be merged.");
    }
    streams.pause();
  } else {
    for (let i = 0, len = streams.length; i < len; i++) {
      streams[i] = pauseStreams(streams[i], options);
    }
  }
  return streams;
}
var tasks = {};
var utils$k = {};
var array$1 = {};
Object.defineProperty(array$1, "__esModule", { value: true });
array$1.splitWhen = array$1.flatten = void 0;
function flatten(items) {
  return items.reduce((collection2, item) => [].concat(collection2, item), []);
}
array$1.flatten = flatten;
function splitWhen(items, predicate) {
  const result = [[]];
  let groupIndex = 0;
  for (const item of items) {
    if (predicate(item)) {
      groupIndex++;
      result[groupIndex] = [];
    } else {
      result[groupIndex].push(item);
    }
  }
  return result;
}
array$1.splitWhen = splitWhen;
var errno$1 = {};
Object.defineProperty(errno$1, "__esModule", { value: true });
errno$1.isEnoentCodeError = void 0;
function isEnoentCodeError(error2) {
  return error2.code === "ENOENT";
}
errno$1.isEnoentCodeError = isEnoentCodeError;
var fs$8 = {};
Object.defineProperty(fs$8, "__esModule", { value: true });
fs$8.createDirentFromStats = void 0;
let DirentFromStats$1 = class DirentFromStats {
  constructor(name, stats) {
    this.name = name;
    this.isBlockDevice = stats.isBlockDevice.bind(stats);
    this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
    this.isDirectory = stats.isDirectory.bind(stats);
    this.isFIFO = stats.isFIFO.bind(stats);
    this.isFile = stats.isFile.bind(stats);
    this.isSocket = stats.isSocket.bind(stats);
    this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
  }
};
function createDirentFromStats$1(name, stats) {
  return new DirentFromStats$1(name, stats);
}
fs$8.createDirentFromStats = createDirentFromStats$1;
var path$a = {};
Object.defineProperty(path$a, "__esModule", { value: true });
path$a.convertPosixPathToPattern = path$a.convertWindowsPathToPattern = path$a.convertPathToPattern = path$a.escapePosixPath = path$a.escapeWindowsPath = path$a.escape = path$a.removeLeadingDotSegment = path$a.makeAbsolute = path$a.unixify = void 0;
const os = require$$0;
const path$9 = require$$0$3;
const IS_WINDOWS_PLATFORM = os.platform() === "win32";
const LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
const POSIX_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g;
const WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([(){}]|^!|[!+@](?=\())/g;
const DOS_DEVICE_PATH_RE = /^\\\\([.?])/;
const WINDOWS_BACKSLASHES_RE = /\\(?![!()+@{}])/g;
function unixify(filepath) {
  return filepath.replace(/\\/g, "/");
}
path$a.unixify = unixify;
function makeAbsolute(cwd, filepath) {
  return path$9.resolve(cwd, filepath);
}
path$a.makeAbsolute = makeAbsolute;
function removeLeadingDotSegment(entry2) {
  if (entry2.charAt(0) === ".") {
    const secondCharactery = entry2.charAt(1);
    if (secondCharactery === "/" || secondCharactery === "\\") {
      return entry2.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
    }
  }
  return entry2;
}
path$a.removeLeadingDotSegment = removeLeadingDotSegment;
path$a.escape = IS_WINDOWS_PLATFORM ? escapeWindowsPath : escapePosixPath;
function escapeWindowsPath(pattern2) {
  return pattern2.replace(WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
}
path$a.escapeWindowsPath = escapeWindowsPath;
function escapePosixPath(pattern2) {
  return pattern2.replace(POSIX_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
}
path$a.escapePosixPath = escapePosixPath;
path$a.convertPathToPattern = IS_WINDOWS_PLATFORM ? convertWindowsPathToPattern : convertPosixPathToPattern;
function convertWindowsPathToPattern(filepath) {
  return escapeWindowsPath(filepath).replace(DOS_DEVICE_PATH_RE, "//$1").replace(WINDOWS_BACKSLASHES_RE, "/");
}
path$a.convertWindowsPathToPattern = convertWindowsPathToPattern;
function convertPosixPathToPattern(filepath) {
  return escapePosixPath(filepath);
}
path$a.convertPosixPathToPattern = convertPosixPathToPattern;
var pattern$1 = {};
/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var isExtglob$1 = function isExtglob(str2) {
  if (typeof str2 !== "string" || str2 === "") {
    return false;
  }
  var match2;
  while (match2 = /(\\).|([@?!+*]\(.*\))/g.exec(str2)) {
    if (match2[2])
      return true;
    str2 = str2.slice(match2.index + match2[0].length);
  }
  return false;
};
/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var isExtglob2 = isExtglob$1;
var chars = { "{": "}", "(": ")", "[": "]" };
var strictCheck = function(str2) {
  if (str2[0] === "!") {
    return true;
  }
  var index = 0;
  var pipeIndex = -2;
  var closeSquareIndex = -2;
  var closeCurlyIndex = -2;
  var closeParenIndex = -2;
  var backSlashIndex = -2;
  while (index < str2.length) {
    if (str2[index] === "*") {
      return true;
    }
    if (str2[index + 1] === "?" && /[\].+)]/.test(str2[index])) {
      return true;
    }
    if (closeSquareIndex !== -1 && str2[index] === "[" && str2[index + 1] !== "]") {
      if (closeSquareIndex < index) {
        closeSquareIndex = str2.indexOf("]", index);
      }
      if (closeSquareIndex > index) {
        if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
          return true;
        }
        backSlashIndex = str2.indexOf("\\", index);
        if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
          return true;
        }
      }
    }
    if (closeCurlyIndex !== -1 && str2[index] === "{" && str2[index + 1] !== "}") {
      closeCurlyIndex = str2.indexOf("}", index);
      if (closeCurlyIndex > index) {
        backSlashIndex = str2.indexOf("\\", index);
        if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
          return true;
        }
      }
    }
    if (closeParenIndex !== -1 && str2[index] === "(" && str2[index + 1] === "?" && /[:!=]/.test(str2[index + 2]) && str2[index + 3] !== ")") {
      closeParenIndex = str2.indexOf(")", index);
      if (closeParenIndex > index) {
        backSlashIndex = str2.indexOf("\\", index);
        if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
          return true;
        }
      }
    }
    if (pipeIndex !== -1 && str2[index] === "(" && str2[index + 1] !== "|") {
      if (pipeIndex < index) {
        pipeIndex = str2.indexOf("|", index);
      }
      if (pipeIndex !== -1 && str2[pipeIndex + 1] !== ")") {
        closeParenIndex = str2.indexOf(")", pipeIndex);
        if (closeParenIndex > pipeIndex) {
          backSlashIndex = str2.indexOf("\\", pipeIndex);
          if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
            return true;
          }
        }
      }
    }
    if (str2[index] === "\\") {
      var open = str2[index + 1];
      index += 2;
      var close = chars[open];
      if (close) {
        var n = str2.indexOf(close, index);
        if (n !== -1) {
          index = n + 1;
        }
      }
      if (str2[index] === "!") {
        return true;
      }
    } else {
      index++;
    }
  }
  return false;
};
var relaxedCheck = function(str2) {
  if (str2[0] === "!") {
    return true;
  }
  var index = 0;
  while (index < str2.length) {
    if (/[*?{}()[\]]/.test(str2[index])) {
      return true;
    }
    if (str2[index] === "\\") {
      var open = str2[index + 1];
      index += 2;
      var close = chars[open];
      if (close) {
        var n = str2.indexOf(close, index);
        if (n !== -1) {
          index = n + 1;
        }
      }
      if (str2[index] === "!") {
        return true;
      }
    } else {
      index++;
    }
  }
  return false;
};
var isGlob$1 = function isGlob(str2, options) {
  if (typeof str2 !== "string" || str2 === "") {
    return false;
  }
  if (isExtglob2(str2)) {
    return true;
  }
  var check2 = strictCheck;
  if (options && options.strict === false) {
    check2 = relaxedCheck;
  }
  return check2(str2);
};
var isGlob2 = isGlob$1;
var pathPosixDirname = require$$0$3.posix.dirname;
var isWin32 = require$$0.platform() === "win32";
var slash$1 = "/";
var backslash = /\\/g;
var enclosure = /[\{\[].*[\}\]]$/;
var globby$1 = /(^|[^\\])([\{\[]|\([^\)]+$)/;
var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
var globParent$1 = function globParent(str2, opts) {
  var options = Object.assign({ flipBackslashes: true }, opts);
  if (options.flipBackslashes && isWin32 && str2.indexOf(slash$1) < 0) {
    str2 = str2.replace(backslash, slash$1);
  }
  if (enclosure.test(str2)) {
    str2 += slash$1;
  }
  str2 += "a";
  do {
    str2 = pathPosixDirname(str2);
  } while (isGlob2(str2) || globby$1.test(str2));
  return str2.replace(escaped, "$1");
};
var utils$j = {};
(function(exports) {
  exports.isInteger = (num) => {
    if (typeof num === "number") {
      return Number.isInteger(num);
    }
    if (typeof num === "string" && num.trim() !== "") {
      return Number.isInteger(Number(num));
    }
    return false;
  };
  exports.find = (node, type2) => node.nodes.find((node2) => node2.type === type2);
  exports.exceedsLimit = (min2, max2, step = 1, limit) => {
    if (limit === false)
      return false;
    if (!exports.isInteger(min2) || !exports.isInteger(max2))
      return false;
    return (Number(max2) - Number(min2)) / Number(step) >= limit;
  };
  exports.escapeNode = (block, n = 0, type2) => {
    let node = block.nodes[n];
    if (!node)
      return;
    if (type2 && node.type === type2 || node.type === "open" || node.type === "close") {
      if (node.escaped !== true) {
        node.value = "\\" + node.value;
        node.escaped = true;
      }
    }
  };
  exports.encloseBrace = (node) => {
    if (node.type !== "brace")
      return false;
    if (node.commas >> 0 + node.ranges >> 0 === 0) {
      node.invalid = true;
      return true;
    }
    return false;
  };
  exports.isInvalidBrace = (block) => {
    if (block.type !== "brace")
      return false;
    if (block.invalid === true || block.dollar)
      return true;
    if (block.commas >> 0 + block.ranges >> 0 === 0) {
      block.invalid = true;
      return true;
    }
    if (block.open !== true || block.close !== true) {
      block.invalid = true;
      return true;
    }
    return false;
  };
  exports.isOpenOrClose = (node) => {
    if (node.type === "open" || node.type === "close") {
      return true;
    }
    return node.open === true || node.close === true;
  };
  exports.reduce = (nodes) => nodes.reduce((acc, node) => {
    if (node.type === "text")
      acc.push(node.value);
    if (node.type === "range")
      node.type = "text";
    return acc;
  }, []);
  exports.flatten = (...args) => {
    const result = [];
    const flat = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        Array.isArray(ele) ? flat(ele) : ele !== void 0 && result.push(ele);
      }
      return result;
    };
    flat(args);
    return result;
  };
})(utils$j);
const utils$i = utils$j;
var stringify$4 = (ast, options = {}) => {
  let stringify2 = (node, parent = {}) => {
    let invalidBlock = options.escapeInvalid && utils$i.isInvalidBrace(parent);
    let invalidNode = node.invalid === true && options.escapeInvalid === true;
    let output = "";
    if (node.value) {
      if ((invalidBlock || invalidNode) && utils$i.isOpenOrClose(node)) {
        return "\\" + node.value;
      }
      return node.value;
    }
    if (node.value) {
      return node.value;
    }
    if (node.nodes) {
      for (let child of node.nodes) {
        output += stringify2(child);
      }
    }
    return output;
  };
  return stringify2(ast);
};
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */
var isNumber$2 = function(num) {
  if (typeof num === "number") {
    return num - num === 0;
  }
  if (typeof num === "string" && num.trim() !== "") {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
};
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
const isNumber$1 = isNumber$2;
const toRegexRange$1 = (min2, max2, options) => {
  if (isNumber$1(min2) === false) {
    throw new TypeError("toRegexRange: expected the first argument to be a number");
  }
  if (max2 === void 0 || min2 === max2) {
    return String(min2);
  }
  if (isNumber$1(max2) === false) {
    throw new TypeError("toRegexRange: expected the second argument to be a number.");
  }
  let opts = { relaxZeros: true, ...options };
  if (typeof opts.strictZeros === "boolean") {
    opts.relaxZeros = opts.strictZeros === false;
  }
  let relax = String(opts.relaxZeros);
  let shorthand = String(opts.shorthand);
  let capture = String(opts.capture);
  let wrap = String(opts.wrap);
  let cacheKey = min2 + ":" + max2 + "=" + relax + shorthand + capture + wrap;
  if (toRegexRange$1.cache.hasOwnProperty(cacheKey)) {
    return toRegexRange$1.cache[cacheKey].result;
  }
  let a = Math.min(min2, max2);
  let b = Math.max(min2, max2);
  if (Math.abs(a - b) === 1) {
    let result = min2 + "|" + max2;
    if (opts.capture) {
      return `(${result})`;
    }
    if (opts.wrap === false) {
      return result;
    }
    return `(?:${result})`;
  }
  let isPadded = hasPadding(min2) || hasPadding(max2);
  let state = { min: min2, max: max2, a, b };
  let positives = [];
  let negatives = [];
  if (isPadded) {
    state.isPadded = isPadded;
    state.maxLen = String(state.max).length;
  }
  if (a < 0) {
    let newMin = b < 0 ? Math.abs(b) : 1;
    negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
    a = state.a = 0;
  }
  if (b >= 0) {
    positives = splitToPatterns(a, b, state, opts);
  }
  state.negatives = negatives;
  state.positives = positives;
  state.result = collatePatterns(negatives, positives);
  if (opts.capture === true) {
    state.result = `(${state.result})`;
  } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
    state.result = `(?:${state.result})`;
  }
  toRegexRange$1.cache[cacheKey] = state;
  return state.result;
};
function collatePatterns(neg, pos, options) {
  let onlyNegative = filterPatterns(neg, pos, "-", false) || [];
  let onlyPositive = filterPatterns(pos, neg, "", false) || [];
  let intersected = filterPatterns(neg, pos, "-?", true) || [];
  let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
  return subpatterns.join("|");
}
function splitToRanges(min2, max2) {
  let nines = 1;
  let zeros2 = 1;
  let stop = countNines(min2, nines);
  let stops = /* @__PURE__ */ new Set([max2]);
  while (min2 <= stop && stop <= max2) {
    stops.add(stop);
    nines += 1;
    stop = countNines(min2, nines);
  }
  stop = countZeros(max2 + 1, zeros2) - 1;
  while (min2 < stop && stop <= max2) {
    stops.add(stop);
    zeros2 += 1;
    stop = countZeros(max2 + 1, zeros2) - 1;
  }
  stops = [...stops];
  stops.sort(compare$c);
  return stops;
}
function rangeToPattern(start, stop, options) {
  if (start === stop) {
    return { pattern: start, count: [], digits: 0 };
  }
  let zipped = zip(start, stop);
  let digits = zipped.length;
  let pattern2 = "";
  let count = 0;
  for (let i = 0; i < digits; i++) {
    let [startDigit, stopDigit] = zipped[i];
    if (startDigit === stopDigit) {
      pattern2 += startDigit;
    } else if (startDigit !== "0" || stopDigit !== "9") {
      pattern2 += toCharacterClass(startDigit, stopDigit);
    } else {
      count++;
    }
  }
  if (count) {
    pattern2 += options.shorthand === true ? "\\d" : "[0-9]";
  }
  return { pattern: pattern2, count: [count], digits };
}
function splitToPatterns(min2, max2, tok, options) {
  let ranges = splitToRanges(min2, max2);
  let tokens = [];
  let start = min2;
  let prev;
  for (let i = 0; i < ranges.length; i++) {
    let max3 = ranges[i];
    let obj = rangeToPattern(String(start), String(max3), options);
    let zeros2 = "";
    if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
      if (prev.count.length > 1) {
        prev.count.pop();
      }
      prev.count.push(obj.count[0]);
      prev.string = prev.pattern + toQuantifier(prev.count);
      start = max3 + 1;
      continue;
    }
    if (tok.isPadded) {
      zeros2 = padZeros(max3, tok, options);
    }
    obj.string = zeros2 + obj.pattern + toQuantifier(obj.count);
    tokens.push(obj);
    start = max3 + 1;
    prev = obj;
  }
  return tokens;
}
function filterPatterns(arr, comparison, prefix, intersection, options) {
  let result = [];
  for (let ele of arr) {
    let { string: string2 } = ele;
    if (!intersection && !contains(comparison, "string", string2)) {
      result.push(prefix + string2);
    }
    if (intersection && contains(comparison, "string", string2)) {
      result.push(prefix + string2);
    }
  }
  return result;
}
function zip(a, b) {
  let arr = [];
  for (let i = 0; i < a.length; i++)
    arr.push([a[i], b[i]]);
  return arr;
}
function compare$c(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}
function contains(arr, key, val) {
  return arr.some((ele) => ele[key] === val);
}
function countNines(min2, len) {
  return Number(String(min2).slice(0, -len) + "9".repeat(len));
}
function countZeros(integer, zeros2) {
  return integer - integer % Math.pow(10, zeros2);
}
function toQuantifier(digits) {
  let [start = 0, stop = ""] = digits;
  if (stop || start > 1) {
    return `{${start + (stop ? "," + stop : "")}}`;
  }
  return "";
}
function toCharacterClass(a, b, options) {
  return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
}
function hasPadding(str2) {
  return /^-?(0+)\d/.test(str2);
}
function padZeros(value, tok, options) {
  if (!tok.isPadded) {
    return value;
  }
  let diff2 = Math.abs(tok.maxLen - String(value).length);
  let relax = options.relaxZeros !== false;
  switch (diff2) {
    case 0:
      return "";
    case 1:
      return relax ? "0?" : "0";
    case 2:
      return relax ? "0{0,2}" : "00";
    default: {
      return relax ? `0{0,${diff2}}` : `0{${diff2}}`;
    }
  }
}
toRegexRange$1.cache = {};
toRegexRange$1.clearCache = () => toRegexRange$1.cache = {};
var toRegexRange_1 = toRegexRange$1;
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */
const util$1 = require$$0$2;
const toRegexRange = toRegexRange_1;
const isObject$1 = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
const transform = (toNumber) => {
  return (value) => toNumber === true ? Number(value) : String(value);
};
const isValidValue = (value) => {
  return typeof value === "number" || typeof value === "string" && value !== "";
};
const isNumber = (num) => Number.isInteger(+num);
const zeros = (input) => {
  let value = `${input}`;
  let index = -1;
  if (value[0] === "-")
    value = value.slice(1);
  if (value === "0")
    return false;
  while (value[++index] === "0")
    ;
  return index > 0;
};
const stringify$3 = (start, end, options) => {
  if (typeof start === "string" || typeof end === "string") {
    return true;
  }
  return options.stringify === true;
};
const pad = (input, maxLength, toNumber) => {
  if (maxLength > 0) {
    let dash = input[0] === "-" ? "-" : "";
    if (dash)
      input = input.slice(1);
    input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
  }
  if (toNumber === false) {
    return String(input);
  }
  return input;
};
const toMaxLen = (input, maxLength) => {
  let negative = input[0] === "-" ? "-" : "";
  if (negative) {
    input = input.slice(1);
    maxLength--;
  }
  while (input.length < maxLength)
    input = "0" + input;
  return negative ? "-" + input : input;
};
const toSequence = (parts, options) => {
  parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  let prefix = options.capture ? "" : "?:";
  let positives = "";
  let negatives = "";
  let result;
  if (parts.positives.length) {
    positives = parts.positives.join("|");
  }
  if (parts.negatives.length) {
    negatives = `-(${prefix}${parts.negatives.join("|")})`;
  }
  if (positives && negatives) {
    result = `${positives}|${negatives}`;
  } else {
    result = positives || negatives;
  }
  if (options.wrap) {
    return `(${prefix}${result})`;
  }
  return result;
};
const toRange = (a, b, isNumbers, options) => {
  if (isNumbers) {
    return toRegexRange(a, b, { wrap: false, ...options });
  }
  let start = String.fromCharCode(a);
  if (a === b)
    return start;
  let stop = String.fromCharCode(b);
  return `[${start}-${stop}]`;
};
const toRegex = (start, end, options) => {
  if (Array.isArray(start)) {
    let wrap = options.wrap === true;
    let prefix = options.capture ? "" : "?:";
    return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
  }
  return toRegexRange(start, end, options);
};
const rangeError = (...args) => {
  return new RangeError("Invalid range arguments: " + util$1.inspect(...args));
};
const invalidRange = (start, end, options) => {
  if (options.strictRanges === true)
    throw rangeError([start, end]);
  return [];
};
const invalidStep = (step, options) => {
  if (options.strictRanges === true) {
    throw new TypeError(`Expected step "${step}" to be a number`);
  }
  return [];
};
const fillNumbers = (start, end, step = 1, options = {}) => {
  let a = Number(start);
  let b = Number(end);
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    if (options.strictRanges === true)
      throw rangeError([start, end]);
    return [];
  }
  if (a === 0)
    a = 0;
  if (b === 0)
    b = 0;
  let descending = a > b;
  let startString = String(start);
  let endString = String(end);
  let stepString = String(step);
  step = Math.max(Math.abs(step), 1);
  let padded = zeros(startString) || zeros(endString) || zeros(stepString);
  let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
  let toNumber = padded === false && stringify$3(start, end, options) === false;
  let format = options.transform || transform(toNumber);
  if (options.toRegex && step === 1) {
    return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
  }
  let parts = { negatives: [], positives: [] };
  let push2 = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
  let range2 = [];
  let index = 0;
  while (descending ? a >= b : a <= b) {
    if (options.toRegex === true && step > 1) {
      push2(a);
    } else {
      range2.push(pad(format(a, index), maxLen, toNumber));
    }
    a = descending ? a - step : a + step;
    index++;
  }
  if (options.toRegex === true) {
    return step > 1 ? toSequence(parts, options) : toRegex(range2, null, { wrap: false, ...options });
  }
  return range2;
};
const fillLetters = (start, end, step = 1, options = {}) => {
  if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
    return invalidRange(start, end, options);
  }
  let format = options.transform || ((val) => String.fromCharCode(val));
  let a = `${start}`.charCodeAt(0);
  let b = `${end}`.charCodeAt(0);
  let descending = a > b;
  let min2 = Math.min(a, b);
  let max2 = Math.max(a, b);
  if (options.toRegex && step === 1) {
    return toRange(min2, max2, false, options);
  }
  let range2 = [];
  let index = 0;
  while (descending ? a >= b : a <= b) {
    range2.push(format(a, index));
    a = descending ? a - step : a + step;
    index++;
  }
  if (options.toRegex === true) {
    return toRegex(range2, null, { wrap: false, options });
  }
  return range2;
};
const fill$2 = (start, end, step, options = {}) => {
  if (end == null && isValidValue(start)) {
    return [start];
  }
  if (!isValidValue(start) || !isValidValue(end)) {
    return invalidRange(start, end, options);
  }
  if (typeof step === "function") {
    return fill$2(start, end, 1, { transform: step });
  }
  if (isObject$1(step)) {
    return fill$2(start, end, 0, step);
  }
  let opts = { ...options };
  if (opts.capture === true)
    opts.wrap = true;
  step = step || opts.step || 1;
  if (!isNumber(step)) {
    if (step != null && !isObject$1(step))
      return invalidStep(step, opts);
    return fill$2(start, end, 1, step);
  }
  if (isNumber(start) && isNumber(end)) {
    return fillNumbers(start, end, step, opts);
  }
  return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
};
var fillRange = fill$2;
const fill$1 = fillRange;
const utils$h = utils$j;
const compile$1 = (ast, options = {}) => {
  let walk2 = (node, parent = {}) => {
    let invalidBlock = utils$h.isInvalidBrace(parent);
    let invalidNode = node.invalid === true && options.escapeInvalid === true;
    let invalid = invalidBlock === true || invalidNode === true;
    let prefix = options.escapeInvalid === true ? "\\" : "";
    let output = "";
    if (node.isOpen === true) {
      return prefix + node.value;
    }
    if (node.isClose === true) {
      return prefix + node.value;
    }
    if (node.type === "open") {
      return invalid ? prefix + node.value : "(";
    }
    if (node.type === "close") {
      return invalid ? prefix + node.value : ")";
    }
    if (node.type === "comma") {
      return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
    }
    if (node.value) {
      return node.value;
    }
    if (node.nodes && node.ranges > 0) {
      let args = utils$h.reduce(node.nodes);
      let range2 = fill$1(...args, { ...options, wrap: false, toRegex: true });
      if (range2.length !== 0) {
        return args.length > 1 && range2.length > 1 ? `(${range2})` : range2;
      }
    }
    if (node.nodes) {
      for (let child of node.nodes) {
        output += walk2(child, node);
      }
    }
    return output;
  };
  return walk2(ast);
};
var compile_1 = compile$1;
const fill = fillRange;
const stringify$2 = stringify$4;
const utils$g = utils$j;
const append = (queue2 = "", stash = "", enclose = false) => {
  let result = [];
  queue2 = [].concat(queue2);
  stash = [].concat(stash);
  if (!stash.length)
    return queue2;
  if (!queue2.length) {
    return enclose ? utils$g.flatten(stash).map((ele) => `{${ele}}`) : stash;
  }
  for (let item of queue2) {
    if (Array.isArray(item)) {
      for (let value of item) {
        result.push(append(value, stash, enclose));
      }
    } else {
      for (let ele of stash) {
        if (enclose === true && typeof ele === "string")
          ele = `{${ele}}`;
        result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
      }
    }
  }
  return utils$g.flatten(result);
};
const expand$1 = (ast, options = {}) => {
  let rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
  let walk2 = (node, parent = {}) => {
    node.queue = [];
    let p = parent;
    let q = parent.queue;
    while (p.type !== "brace" && p.type !== "root" && p.parent) {
      p = p.parent;
      q = p.queue;
    }
    if (node.invalid || node.dollar) {
      q.push(append(q.pop(), stringify$2(node, options)));
      return;
    }
    if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
      q.push(append(q.pop(), ["{}"]));
      return;
    }
    if (node.nodes && node.ranges > 0) {
      let args = utils$g.reduce(node.nodes);
      if (utils$g.exceedsLimit(...args, options.step, rangeLimit)) {
        throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
      }
      let range2 = fill(...args, options);
      if (range2.length === 0) {
        range2 = stringify$2(node, options);
      }
      q.push(append(q.pop(), range2));
      node.nodes = [];
      return;
    }
    let enclose = utils$g.encloseBrace(node);
    let queue2 = node.queue;
    let block = node;
    while (block.type !== "brace" && block.type !== "root" && block.parent) {
      block = block.parent;
      queue2 = block.queue;
    }
    for (let i = 0; i < node.nodes.length; i++) {
      let child = node.nodes[i];
      if (child.type === "comma" && node.type === "brace") {
        if (i === 1)
          queue2.push("");
        queue2.push("");
        continue;
      }
      if (child.type === "close") {
        q.push(append(q.pop(), queue2, enclose));
        continue;
      }
      if (child.value && child.type !== "open") {
        queue2.push(append(queue2.pop(), child.value));
        continue;
      }
      if (child.nodes) {
        walk2(child, node);
      }
    }
    return queue2;
  };
  return utils$g.flatten(walk2(ast));
};
var expand_1 = expand$1;
var constants$6 = {
  MAX_LENGTH: 1024 * 64,
  // Digits
  CHAR_0: "0",
  /* 0 */
  CHAR_9: "9",
  /* 9 */
  // Alphabet chars.
  CHAR_UPPERCASE_A: "A",
  /* A */
  CHAR_LOWERCASE_A: "a",
  /* a */
  CHAR_UPPERCASE_Z: "Z",
  /* Z */
  CHAR_LOWERCASE_Z: "z",
  /* z */
  CHAR_LEFT_PARENTHESES: "(",
  /* ( */
  CHAR_RIGHT_PARENTHESES: ")",
  /* ) */
  CHAR_ASTERISK: "*",
  /* * */
  // Non-alphabetic chars.
  CHAR_AMPERSAND: "&",
  /* & */
  CHAR_AT: "@",
  /* @ */
  CHAR_BACKSLASH: "\\",
  /* \ */
  CHAR_BACKTICK: "`",
  /* ` */
  CHAR_CARRIAGE_RETURN: "\r",
  /* \r */
  CHAR_CIRCUMFLEX_ACCENT: "^",
  /* ^ */
  CHAR_COLON: ":",
  /* : */
  CHAR_COMMA: ",",
  /* , */
  CHAR_DOLLAR: "$",
  /* . */
  CHAR_DOT: ".",
  /* . */
  CHAR_DOUBLE_QUOTE: '"',
  /* " */
  CHAR_EQUAL: "=",
  /* = */
  CHAR_EXCLAMATION_MARK: "!",
  /* ! */
  CHAR_FORM_FEED: "\f",
  /* \f */
  CHAR_FORWARD_SLASH: "/",
  /* / */
  CHAR_HASH: "#",
  /* # */
  CHAR_HYPHEN_MINUS: "-",
  /* - */
  CHAR_LEFT_ANGLE_BRACKET: "<",
  /* < */
  CHAR_LEFT_CURLY_BRACE: "{",
  /* { */
  CHAR_LEFT_SQUARE_BRACKET: "[",
  /* [ */
  CHAR_LINE_FEED: "\n",
  /* \n */
  CHAR_NO_BREAK_SPACE: " ",
  /* \u00A0 */
  CHAR_PERCENT: "%",
  /* % */
  CHAR_PLUS: "+",
  /* + */
  CHAR_QUESTION_MARK: "?",
  /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: ">",
  /* > */
  CHAR_RIGHT_CURLY_BRACE: "}",
  /* } */
  CHAR_RIGHT_SQUARE_BRACKET: "]",
  /* ] */
  CHAR_SEMICOLON: ";",
  /* ; */
  CHAR_SINGLE_QUOTE: "'",
  /* ' */
  CHAR_SPACE: " ",
  /*   */
  CHAR_TAB: "	",
  /* \t */
  CHAR_UNDERSCORE: "_",
  /* _ */
  CHAR_VERTICAL_LINE: "|",
  /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
  /* \uFEFF */
};
const stringify$1 = stringify$4;
const {
  MAX_LENGTH: MAX_LENGTH$3,
  CHAR_BACKSLASH,
  /* \ */
  CHAR_BACKTICK,
  /* ` */
  CHAR_COMMA: CHAR_COMMA$1,
  /* , */
  CHAR_DOT: CHAR_DOT$1,
  /* . */
  CHAR_LEFT_PARENTHESES: CHAR_LEFT_PARENTHESES$1,
  /* ( */
  CHAR_RIGHT_PARENTHESES: CHAR_RIGHT_PARENTHESES$1,
  /* ) */
  CHAR_LEFT_CURLY_BRACE: CHAR_LEFT_CURLY_BRACE$1,
  /* { */
  CHAR_RIGHT_CURLY_BRACE: CHAR_RIGHT_CURLY_BRACE$1,
  /* } */
  CHAR_LEFT_SQUARE_BRACKET: CHAR_LEFT_SQUARE_BRACKET$1,
  /* [ */
  CHAR_RIGHT_SQUARE_BRACKET: CHAR_RIGHT_SQUARE_BRACKET$1,
  /* ] */
  CHAR_DOUBLE_QUOTE,
  /* " */
  CHAR_SINGLE_QUOTE,
  /* ' */
  CHAR_NO_BREAK_SPACE,
  CHAR_ZERO_WIDTH_NOBREAK_SPACE
} = constants$6;
const parse$a = (input, options = {}) => {
  if (typeof input !== "string") {
    throw new TypeError("Expected a string");
  }
  let opts = options || {};
  let max2 = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH$3, opts.maxLength) : MAX_LENGTH$3;
  if (input.length > max2) {
    throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max2})`);
  }
  let ast = { type: "root", input, nodes: [] };
  let stack = [ast];
  let block = ast;
  let prev = ast;
  let brackets = 0;
  let length = input.length;
  let index = 0;
  let depth2 = 0;
  let value;
  const advance = () => input[index++];
  const push2 = (node) => {
    if (node.type === "text" && prev.type === "dot") {
      prev.type = "text";
    }
    if (prev && prev.type === "text" && node.type === "text") {
      prev.value += node.value;
      return;
    }
    block.nodes.push(node);
    node.parent = block;
    node.prev = prev;
    prev = node;
    return node;
  };
  push2({ type: "bos" });
  while (index < length) {
    block = stack[stack.length - 1];
    value = advance();
    if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
      continue;
    }
    if (value === CHAR_BACKSLASH) {
      push2({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
      continue;
    }
    if (value === CHAR_RIGHT_SQUARE_BRACKET$1) {
      push2({ type: "text", value: "\\" + value });
      continue;
    }
    if (value === CHAR_LEFT_SQUARE_BRACKET$1) {
      brackets++;
      let next;
      while (index < length && (next = advance())) {
        value += next;
        if (next === CHAR_LEFT_SQUARE_BRACKET$1) {
          brackets++;
          continue;
        }
        if (next === CHAR_BACKSLASH) {
          value += advance();
          continue;
        }
        if (next === CHAR_RIGHT_SQUARE_BRACKET$1) {
          brackets--;
          if (brackets === 0) {
            break;
          }
        }
      }
      push2({ type: "text", value });
      continue;
    }
    if (value === CHAR_LEFT_PARENTHESES$1) {
      block = push2({ type: "paren", nodes: [] });
      stack.push(block);
      push2({ type: "text", value });
      continue;
    }
    if (value === CHAR_RIGHT_PARENTHESES$1) {
      if (block.type !== "paren") {
        push2({ type: "text", value });
        continue;
      }
      block = stack.pop();
      push2({ type: "text", value });
      block = stack[stack.length - 1];
      continue;
    }
    if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
      let open = value;
      let next;
      if (options.keepQuotes !== true) {
        value = "";
      }
      while (index < length && (next = advance())) {
        if (next === CHAR_BACKSLASH) {
          value += next + advance();
          continue;
        }
        if (next === open) {
          if (options.keepQuotes === true)
            value += next;
          break;
        }
        value += next;
      }
      push2({ type: "text", value });
      continue;
    }
    if (value === CHAR_LEFT_CURLY_BRACE$1) {
      depth2++;
      let dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
      let brace = {
        type: "brace",
        open: true,
        close: false,
        dollar,
        depth: depth2,
        commas: 0,
        ranges: 0,
        nodes: []
      };
      block = push2(brace);
      stack.push(block);
      push2({ type: "open", value });
      continue;
    }
    if (value === CHAR_RIGHT_CURLY_BRACE$1) {
      if (block.type !== "brace") {
        push2({ type: "text", value });
        continue;
      }
      let type2 = "close";
      block = stack.pop();
      block.close = true;
      push2({ type: type2, value });
      depth2--;
      block = stack[stack.length - 1];
      continue;
    }
    if (value === CHAR_COMMA$1 && depth2 > 0) {
      if (block.ranges > 0) {
        block.ranges = 0;
        let open = block.nodes.shift();
        block.nodes = [open, { type: "text", value: stringify$1(block) }];
      }
      push2({ type: "comma", value });
      block.commas++;
      continue;
    }
    if (value === CHAR_DOT$1 && depth2 > 0 && block.commas === 0) {
      let siblings = block.nodes;
      if (depth2 === 0 || siblings.length === 0) {
        push2({ type: "text", value });
        continue;
      }
      if (prev.type === "dot") {
        block.range = [];
        prev.value += value;
        prev.type = "range";
        if (block.nodes.length !== 3 && block.nodes.length !== 5) {
          block.invalid = true;
          block.ranges = 0;
          prev.type = "text";
          continue;
        }
        block.ranges++;
        block.args = [];
        continue;
      }
      if (prev.type === "range") {
        siblings.pop();
        let before = siblings[siblings.length - 1];
        before.value += prev.value + value;
        prev = before;
        block.ranges--;
        continue;
      }
      push2({ type: "dot", value });
      continue;
    }
    push2({ type: "text", value });
  }
  do {
    block = stack.pop();
    if (block.type !== "root") {
      block.nodes.forEach((node) => {
        if (!node.nodes) {
          if (node.type === "open")
            node.isOpen = true;
          if (node.type === "close")
            node.isClose = true;
          if (!node.nodes)
            node.type = "text";
          node.invalid = true;
        }
      });
      let parent = stack[stack.length - 1];
      let index2 = parent.nodes.indexOf(block);
      parent.nodes.splice(index2, 1, ...block.nodes);
    }
  } while (stack.length > 0);
  push2({ type: "eos" });
  return ast;
};
var parse_1$2 = parse$a;
const stringify = stringify$4;
const compile = compile_1;
const expand = expand_1;
const parse$9 = parse_1$2;
const braces$1 = (input, options = {}) => {
  let output = [];
  if (Array.isArray(input)) {
    for (let pattern2 of input) {
      let result = braces$1.create(pattern2, options);
      if (Array.isArray(result)) {
        output.push(...result);
      } else {
        output.push(result);
      }
    }
  } else {
    output = [].concat(braces$1.create(input, options));
  }
  if (options && options.expand === true && options.nodupes === true) {
    output = [...new Set(output)];
  }
  return output;
};
braces$1.parse = (input, options = {}) => parse$9(input, options);
braces$1.stringify = (input, options = {}) => {
  if (typeof input === "string") {
    return stringify(braces$1.parse(input, options), options);
  }
  return stringify(input, options);
};
braces$1.compile = (input, options = {}) => {
  if (typeof input === "string") {
    input = braces$1.parse(input, options);
  }
  return compile(input, options);
};
braces$1.expand = (input, options = {}) => {
  if (typeof input === "string") {
    input = braces$1.parse(input, options);
  }
  let result = expand(input, options);
  if (options.noempty === true) {
    result = result.filter(Boolean);
  }
  if (options.nodupes === true) {
    result = [...new Set(result)];
  }
  return result;
};
braces$1.create = (input, options = {}) => {
  if (input === "" || input.length < 3) {
    return [input];
  }
  return options.expand !== true ? braces$1.compile(input, options) : braces$1.expand(input, options);
};
var braces_1 = braces$1;
var utils$f = {};
const path$8 = require$$0$3;
const WIN_SLASH = "\\\\/";
const WIN_NO_SLASH = `[^${WIN_SLASH}]`;
const DOT_LITERAL = "\\.";
const PLUS_LITERAL = "\\+";
const QMARK_LITERAL = "\\?";
const SLASH_LITERAL = "\\/";
const ONE_CHAR = "(?=.)";
const QMARK = "[^/]";
const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
const NO_DOT = `(?!${DOT_LITERAL})`;
const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
const STAR = `${QMARK}*?`;
const POSIX_CHARS = {
  DOT_LITERAL,
  PLUS_LITERAL,
  QMARK_LITERAL,
  SLASH_LITERAL,
  ONE_CHAR,
  QMARK,
  END_ANCHOR,
  DOTS_SLASH,
  NO_DOT,
  NO_DOTS,
  NO_DOT_SLASH,
  NO_DOTS_SLASH,
  QMARK_NO_DOT,
  STAR,
  START_ANCHOR
};
const WINDOWS_CHARS = {
  ...POSIX_CHARS,
  SLASH_LITERAL: `[${WIN_SLASH}]`,
  QMARK: WIN_NO_SLASH,
  STAR: `${WIN_NO_SLASH}*?`,
  DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
  NO_DOT: `(?!${DOT_LITERAL})`,
  NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
  NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
  NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
  QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
  START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
  END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
};
const POSIX_REGEX_SOURCE$1 = {
  alnum: "a-zA-Z0-9",
  alpha: "a-zA-Z",
  ascii: "\\x00-\\x7F",
  blank: " \\t",
  cntrl: "\\x00-\\x1F\\x7F",
  digit: "0-9",
  graph: "\\x21-\\x7E",
  lower: "a-z",
  print: "\\x20-\\x7E ",
  punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
  space: " \\t\\r\\n\\v\\f",
  upper: "A-Z",
  word: "A-Za-z0-9_",
  xdigit: "A-Fa-f0-9"
};
var constants$5 = {
  MAX_LENGTH: 1024 * 64,
  POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE$1,
  // regular expressions
  REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
  REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
  REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
  REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
  REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
  REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
  // Replace globs with equivalent patterns to reduce parsing time.
  REPLACEMENTS: {
    "***": "*",
    "**/**": "**",
    "**/**/**": "**"
  },
  // Digits
  CHAR_0: 48,
  /* 0 */
  CHAR_9: 57,
  /* 9 */
  // Alphabet chars.
  CHAR_UPPERCASE_A: 65,
  /* A */
  CHAR_LOWERCASE_A: 97,
  /* a */
  CHAR_UPPERCASE_Z: 90,
  /* Z */
  CHAR_LOWERCASE_Z: 122,
  /* z */
  CHAR_LEFT_PARENTHESES: 40,
  /* ( */
  CHAR_RIGHT_PARENTHESES: 41,
  /* ) */
  CHAR_ASTERISK: 42,
  /* * */
  // Non-alphabetic chars.
  CHAR_AMPERSAND: 38,
  /* & */
  CHAR_AT: 64,
  /* @ */
  CHAR_BACKWARD_SLASH: 92,
  /* \ */
  CHAR_CARRIAGE_RETURN: 13,
  /* \r */
  CHAR_CIRCUMFLEX_ACCENT: 94,
  /* ^ */
  CHAR_COLON: 58,
  /* : */
  CHAR_COMMA: 44,
  /* , */
  CHAR_DOT: 46,
  /* . */
  CHAR_DOUBLE_QUOTE: 34,
  /* " */
  CHAR_EQUAL: 61,
  /* = */
  CHAR_EXCLAMATION_MARK: 33,
  /* ! */
  CHAR_FORM_FEED: 12,
  /* \f */
  CHAR_FORWARD_SLASH: 47,
  /* / */
  CHAR_GRAVE_ACCENT: 96,
  /* ` */
  CHAR_HASH: 35,
  /* # */
  CHAR_HYPHEN_MINUS: 45,
  /* - */
  CHAR_LEFT_ANGLE_BRACKET: 60,
  /* < */
  CHAR_LEFT_CURLY_BRACE: 123,
  /* { */
  CHAR_LEFT_SQUARE_BRACKET: 91,
  /* [ */
  CHAR_LINE_FEED: 10,
  /* \n */
  CHAR_NO_BREAK_SPACE: 160,
  /* \u00A0 */
  CHAR_PERCENT: 37,
  /* % */
  CHAR_PLUS: 43,
  /* + */
  CHAR_QUESTION_MARK: 63,
  /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: 62,
  /* > */
  CHAR_RIGHT_CURLY_BRACE: 125,
  /* } */
  CHAR_RIGHT_SQUARE_BRACKET: 93,
  /* ] */
  CHAR_SEMICOLON: 59,
  /* ; */
  CHAR_SINGLE_QUOTE: 39,
  /* ' */
  CHAR_SPACE: 32,
  /*   */
  CHAR_TAB: 9,
  /* \t */
  CHAR_UNDERSCORE: 95,
  /* _ */
  CHAR_VERTICAL_LINE: 124,
  /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
  /* \uFEFF */
  SEP: path$8.sep,
  /**
   * Create EXTGLOB_CHARS
   */
  extglobChars(chars2) {
    return {
      "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars2.STAR})` },
      "?": { type: "qmark", open: "(?:", close: ")?" },
      "+": { type: "plus", open: "(?:", close: ")+" },
      "*": { type: "star", open: "(?:", close: ")*" },
      "@": { type: "at", open: "(?:", close: ")" }
    };
  },
  /**
   * Create GLOB_CHARS
   */
  globChars(win32) {
    return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
  }
};
(function(exports) {
  const path2 = require$$0$3;
  const win32 = process.platform === "win32";
  const {
    REGEX_BACKSLASH,
    REGEX_REMOVE_BACKSLASH,
    REGEX_SPECIAL_CHARS,
    REGEX_SPECIAL_CHARS_GLOBAL
  } = constants$5;
  exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
  exports.hasRegexChars = (str2) => REGEX_SPECIAL_CHARS.test(str2);
  exports.isRegexChar = (str2) => str2.length === 1 && exports.hasRegexChars(str2);
  exports.escapeRegex = (str2) => str2.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
  exports.toPosixSlashes = (str2) => str2.replace(REGEX_BACKSLASH, "/");
  exports.removeBackslashes = (str2) => {
    return str2.replace(REGEX_REMOVE_BACKSLASH, (match2) => {
      return match2 === "\\" ? "" : match2;
    });
  };
  exports.supportsLookbehinds = () => {
    const segs = process.version.slice(1).split(".").map(Number);
    if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
      return true;
    }
    return false;
  };
  exports.isWindows = (options) => {
    if (options && typeof options.windows === "boolean") {
      return options.windows;
    }
    return win32 === true || path2.sep === "\\";
  };
  exports.escapeLast = (input, char, lastIdx) => {
    const idx = input.lastIndexOf(char, lastIdx);
    if (idx === -1)
      return input;
    if (input[idx - 1] === "\\")
      return exports.escapeLast(input, char, idx - 1);
    return `${input.slice(0, idx)}\\${input.slice(idx)}`;
  };
  exports.removePrefix = (input, state = {}) => {
    let output = input;
    if (output.startsWith("./")) {
      output = output.slice(2);
      state.prefix = "./";
    }
    return output;
  };
  exports.wrapOutput = (input, state = {}, options = {}) => {
    const prepend = options.contains ? "" : "^";
    const append2 = options.contains ? "" : "$";
    let output = `${prepend}(?:${input})${append2}`;
    if (state.negated === true) {
      output = `(?:^(?!${output}).*$)`;
    }
    return output;
  };
})(utils$f);
const utils$e = utils$f;
const {
  CHAR_ASTERISK,
  /* * */
  CHAR_AT,
  /* @ */
  CHAR_BACKWARD_SLASH,
  /* \ */
  CHAR_COMMA,
  /* , */
  CHAR_DOT,
  /* . */
  CHAR_EXCLAMATION_MARK,
  /* ! */
  CHAR_FORWARD_SLASH,
  /* / */
  CHAR_LEFT_CURLY_BRACE,
  /* { */
  CHAR_LEFT_PARENTHESES,
  /* ( */
  CHAR_LEFT_SQUARE_BRACKET,
  /* [ */
  CHAR_PLUS,
  /* + */
  CHAR_QUESTION_MARK,
  /* ? */
  CHAR_RIGHT_CURLY_BRACE,
  /* } */
  CHAR_RIGHT_PARENTHESES,
  /* ) */
  CHAR_RIGHT_SQUARE_BRACKET
  /* ] */
} = constants$5;
const isPathSeparator = (code) => {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
};
const depth = (token) => {
  if (token.isPrefix !== true) {
    token.depth = token.isGlobstar ? Infinity : 1;
  }
};
const scan$1 = (input, options) => {
  const opts = options || {};
  const length = input.length - 1;
  const scanToEnd = opts.parts === true || opts.scanToEnd === true;
  const slashes = [];
  const tokens = [];
  const parts = [];
  let str2 = input;
  let index = -1;
  let start = 0;
  let lastIndex = 0;
  let isBrace = false;
  let isBracket = false;
  let isGlob3 = false;
  let isExtglob3 = false;
  let isGlobstar = false;
  let braceEscaped = false;
  let backslashes = false;
  let negated = false;
  let negatedExtglob = false;
  let finished = false;
  let braces2 = 0;
  let prev;
  let code;
  let token = { value: "", depth: 0, isGlob: false };
  const eos = () => index >= length;
  const peek = () => str2.charCodeAt(index + 1);
  const advance = () => {
    prev = code;
    return str2.charCodeAt(++index);
  };
  while (index < length) {
    code = advance();
    let next;
    if (code === CHAR_BACKWARD_SLASH) {
      backslashes = token.backslashes = true;
      code = advance();
      if (code === CHAR_LEFT_CURLY_BRACE) {
        braceEscaped = true;
      }
      continue;
    }
    if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
      braces2++;
      while (eos() !== true && (code = advance())) {
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }
        if (code === CHAR_LEFT_CURLY_BRACE) {
          braces2++;
          continue;
        }
        if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
          isBrace = token.isBrace = true;
          isGlob3 = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (braceEscaped !== true && code === CHAR_COMMA) {
          isBrace = token.isBrace = true;
          isGlob3 = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_RIGHT_CURLY_BRACE) {
          braces2--;
          if (braces2 === 0) {
            braceEscaped = false;
            isBrace = token.isBrace = true;
            finished = true;
            break;
          }
        }
      }
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (code === CHAR_FORWARD_SLASH) {
      slashes.push(index);
      tokens.push(token);
      token = { value: "", depth: 0, isGlob: false };
      if (finished === true)
        continue;
      if (prev === CHAR_DOT && index === start + 1) {
        start += 2;
        continue;
      }
      lastIndex = index + 1;
      continue;
    }
    if (opts.noext !== true) {
      const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
      if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
        isGlob3 = token.isGlob = true;
        isExtglob3 = token.isExtglob = true;
        finished = true;
        if (code === CHAR_EXCLAMATION_MARK && index === start) {
          negatedExtglob = true;
        }
        if (scanToEnd === true) {
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              code = advance();
              continue;
            }
            if (code === CHAR_RIGHT_PARENTHESES) {
              isGlob3 = token.isGlob = true;
              finished = true;
              break;
            }
          }
          continue;
        }
        break;
      }
    }
    if (code === CHAR_ASTERISK) {
      if (prev === CHAR_ASTERISK)
        isGlobstar = token.isGlobstar = true;
      isGlob3 = token.isGlob = true;
      finished = true;
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (code === CHAR_QUESTION_MARK) {
      isGlob3 = token.isGlob = true;
      finished = true;
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (code === CHAR_LEFT_SQUARE_BRACKET) {
      while (eos() !== true && (next = advance())) {
        if (next === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }
        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
          isBracket = token.isBracket = true;
          isGlob3 = token.isGlob = true;
          finished = true;
          break;
        }
      }
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
    if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
      negated = token.negated = true;
      start++;
      continue;
    }
    if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
      isGlob3 = token.isGlob = true;
      if (scanToEnd === true) {
        while (eos() !== true && (code = advance())) {
          if (code === CHAR_LEFT_PARENTHESES) {
            backslashes = token.backslashes = true;
            code = advance();
            continue;
          }
          if (code === CHAR_RIGHT_PARENTHESES) {
            finished = true;
            break;
          }
        }
        continue;
      }
      break;
    }
    if (isGlob3 === true) {
      finished = true;
      if (scanToEnd === true) {
        continue;
      }
      break;
    }
  }
  if (opts.noext === true) {
    isExtglob3 = false;
    isGlob3 = false;
  }
  let base = str2;
  let prefix = "";
  let glob = "";
  if (start > 0) {
    prefix = str2.slice(0, start);
    str2 = str2.slice(start);
    lastIndex -= start;
  }
  if (base && isGlob3 === true && lastIndex > 0) {
    base = str2.slice(0, lastIndex);
    glob = str2.slice(lastIndex);
  } else if (isGlob3 === true) {
    base = "";
    glob = str2;
  } else {
    base = str2;
  }
  if (base && base !== "" && base !== "/" && base !== str2) {
    if (isPathSeparator(base.charCodeAt(base.length - 1))) {
      base = base.slice(0, -1);
    }
  }
  if (opts.unescape === true) {
    if (glob)
      glob = utils$e.removeBackslashes(glob);
    if (base && backslashes === true) {
      base = utils$e.removeBackslashes(base);
    }
  }
  const state = {
    prefix,
    input,
    start,
    base,
    glob,
    isBrace,
    isBracket,
    isGlob: isGlob3,
    isExtglob: isExtglob3,
    isGlobstar,
    negated,
    negatedExtglob
  };
  if (opts.tokens === true) {
    state.maxDepth = 0;
    if (!isPathSeparator(code)) {
      tokens.push(token);
    }
    state.tokens = tokens;
  }
  if (opts.parts === true || opts.tokens === true) {
    let prevIndex;
    for (let idx = 0; idx < slashes.length; idx++) {
      const n = prevIndex ? prevIndex + 1 : start;
      const i = slashes[idx];
      const value = input.slice(n, i);
      if (opts.tokens) {
        if (idx === 0 && start !== 0) {
          tokens[idx].isPrefix = true;
          tokens[idx].value = prefix;
        } else {
          tokens[idx].value = value;
        }
        depth(tokens[idx]);
        state.maxDepth += tokens[idx].depth;
      }
      if (idx !== 0 || value !== "") {
        parts.push(value);
      }
      prevIndex = i;
    }
    if (prevIndex && prevIndex + 1 < input.length) {
      const value = input.slice(prevIndex + 1);
      parts.push(value);
      if (opts.tokens) {
        tokens[tokens.length - 1].value = value;
        depth(tokens[tokens.length - 1]);
        state.maxDepth += tokens[tokens.length - 1].depth;
      }
    }
    state.slashes = slashes;
    state.parts = parts;
  }
  return state;
};
var scan_1 = scan$1;
const constants$4 = constants$5;
const utils$d = utils$f;
const {
  MAX_LENGTH: MAX_LENGTH$2,
  POSIX_REGEX_SOURCE,
  REGEX_NON_SPECIAL_CHARS,
  REGEX_SPECIAL_CHARS_BACKREF,
  REPLACEMENTS
} = constants$4;
const expandRange = (args, options) => {
  if (typeof options.expandRange === "function") {
    return options.expandRange(...args, options);
  }
  args.sort();
  const value = `[${args.join("-")}]`;
  try {
    new RegExp(value);
  } catch (ex) {
    return args.map((v) => utils$d.escapeRegex(v)).join("..");
  }
  return value;
};
const syntaxError = (type2, char) => {
  return `Missing ${type2}: "${char}" - use "\\\\${char}" to match literal characters`;
};
const parse$8 = (input, options) => {
  if (typeof input !== "string") {
    throw new TypeError("Expected a string");
  }
  input = REPLACEMENTS[input] || input;
  const opts = { ...options };
  const max2 = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH$2, opts.maxLength) : MAX_LENGTH$2;
  let len = input.length;
  if (len > max2) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max2}`);
  }
  const bos = { type: "bos", value: "", output: opts.prepend || "" };
  const tokens = [bos];
  const capture = opts.capture ? "" : "?:";
  const win32 = utils$d.isWindows(options);
  const PLATFORM_CHARS = constants$4.globChars(win32);
  const EXTGLOB_CHARS = constants$4.extglobChars(PLATFORM_CHARS);
  const {
    DOT_LITERAL: DOT_LITERAL2,
    PLUS_LITERAL: PLUS_LITERAL2,
    SLASH_LITERAL: SLASH_LITERAL2,
    ONE_CHAR: ONE_CHAR2,
    DOTS_SLASH: DOTS_SLASH2,
    NO_DOT: NO_DOT2,
    NO_DOT_SLASH: NO_DOT_SLASH2,
    NO_DOTS_SLASH: NO_DOTS_SLASH2,
    QMARK: QMARK2,
    QMARK_NO_DOT: QMARK_NO_DOT2,
    STAR: STAR2,
    START_ANCHOR: START_ANCHOR2
  } = PLATFORM_CHARS;
  const globstar = (opts2) => {
    return `(${capture}(?:(?!${START_ANCHOR2}${opts2.dot ? DOTS_SLASH2 : DOT_LITERAL2}).)*?)`;
  };
  const nodot = opts.dot ? "" : NO_DOT2;
  const qmarkNoDot = opts.dot ? QMARK2 : QMARK_NO_DOT2;
  let star = opts.bash === true ? globstar(opts) : STAR2;
  if (opts.capture) {
    star = `(${star})`;
  }
  if (typeof opts.noext === "boolean") {
    opts.noextglob = opts.noext;
  }
  const state = {
    input,
    index: -1,
    start: 0,
    dot: opts.dot === true,
    consumed: "",
    output: "",
    prefix: "",
    backtrack: false,
    negated: false,
    brackets: 0,
    braces: 0,
    parens: 0,
    quotes: 0,
    globstar: false,
    tokens
  };
  input = utils$d.removePrefix(input, state);
  len = input.length;
  const extglobs = [];
  const braces2 = [];
  const stack = [];
  let prev = bos;
  let value;
  const eos = () => state.index === len - 1;
  const peek = state.peek = (n = 1) => input[state.index + n];
  const advance = state.advance = () => input[++state.index] || "";
  const remaining = () => input.slice(state.index + 1);
  const consume = (value2 = "", num = 0) => {
    state.consumed += value2;
    state.index += num;
  };
  const append2 = (token) => {
    state.output += token.output != null ? token.output : token.value;
    consume(token.value);
  };
  const negate = () => {
    let count = 1;
    while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
      advance();
      state.start++;
      count++;
    }
    if (count % 2 === 0) {
      return false;
    }
    state.negated = true;
    state.start++;
    return true;
  };
  const increment = (type2) => {
    state[type2]++;
    stack.push(type2);
  };
  const decrement = (type2) => {
    state[type2]--;
    stack.pop();
  };
  const push2 = (tok) => {
    if (prev.type === "globstar") {
      const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
      const isExtglob3 = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
      if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob3) {
        state.output = state.output.slice(0, -prev.output.length);
        prev.type = "star";
        prev.value = "*";
        prev.output = star;
        state.output += prev.output;
      }
    }
    if (extglobs.length && tok.type !== "paren") {
      extglobs[extglobs.length - 1].inner += tok.value;
    }
    if (tok.value || tok.output)
      append2(tok);
    if (prev && prev.type === "text" && tok.type === "text") {
      prev.value += tok.value;
      prev.output = (prev.output || "") + tok.value;
      return;
    }
    tok.prev = prev;
    tokens.push(tok);
    prev = tok;
  };
  const extglobOpen = (type2, value2) => {
    const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
    token.prev = prev;
    token.parens = state.parens;
    token.output = state.output;
    const output = (opts.capture ? "(" : "") + token.open;
    increment("parens");
    push2({ type: type2, value: value2, output: state.output ? "" : ONE_CHAR2 });
    push2({ type: "paren", extglob: true, value: advance(), output });
    extglobs.push(token);
  };
  const extglobClose = (token) => {
    let output = token.close + (opts.capture ? ")" : "");
    let rest;
    if (token.type === "negate") {
      let extglobStar = star;
      if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
        extglobStar = globstar(opts);
      }
      if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
        output = token.close = `)$))${extglobStar}`;
      }
      if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
        const expression = parse$8(rest, { ...options, fastpaths: false }).output;
        output = token.close = `)${expression})${extglobStar})`;
      }
      if (token.prev.type === "bos") {
        state.negatedExtglob = true;
      }
    }
    push2({ type: "paren", extglob: true, value, output });
    decrement("parens");
  };
  if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
    let backslashes = false;
    let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars2, first, rest, index) => {
      if (first === "\\") {
        backslashes = true;
        return m;
      }
      if (first === "?") {
        if (esc) {
          return esc + first + (rest ? QMARK2.repeat(rest.length) : "");
        }
        if (index === 0) {
          return qmarkNoDot + (rest ? QMARK2.repeat(rest.length) : "");
        }
        return QMARK2.repeat(chars2.length);
      }
      if (first === ".") {
        return DOT_LITERAL2.repeat(chars2.length);
      }
      if (first === "*") {
        if (esc) {
          return esc + first + (rest ? star : "");
        }
        return star;
      }
      return esc ? m : `\\${m}`;
    });
    if (backslashes === true) {
      if (opts.unescape === true) {
        output = output.replace(/\\/g, "");
      } else {
        output = output.replace(/\\+/g, (m) => {
          return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
        });
      }
    }
    if (output === input && opts.contains === true) {
      state.output = input;
      return state;
    }
    state.output = utils$d.wrapOutput(output, state, options);
    return state;
  }
  while (!eos()) {
    value = advance();
    if (value === "\0") {
      continue;
    }
    if (value === "\\") {
      const next = peek();
      if (next === "/" && opts.bash !== true) {
        continue;
      }
      if (next === "." || next === ";") {
        continue;
      }
      if (!next) {
        value += "\\";
        push2({ type: "text", value });
        continue;
      }
      const match2 = /^\\+/.exec(remaining());
      let slashes = 0;
      if (match2 && match2[0].length > 2) {
        slashes = match2[0].length;
        state.index += slashes;
        if (slashes % 2 !== 0) {
          value += "\\";
        }
      }
      if (opts.unescape === true) {
        value = advance();
      } else {
        value += advance();
      }
      if (state.brackets === 0) {
        push2({ type: "text", value });
        continue;
      }
    }
    if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
      if (opts.posix !== false && value === ":") {
        const inner = prev.value.slice(1);
        if (inner.includes("[")) {
          prev.posix = true;
          if (inner.includes(":")) {
            const idx = prev.value.lastIndexOf("[");
            const pre = prev.value.slice(0, idx);
            const rest2 = prev.value.slice(idx + 2);
            const posix = POSIX_REGEX_SOURCE[rest2];
            if (posix) {
              prev.value = pre + posix;
              state.backtrack = true;
              advance();
              if (!bos.output && tokens.indexOf(prev) === 1) {
                bos.output = ONE_CHAR2;
              }
              continue;
            }
          }
        }
      }
      if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
        value = `\\${value}`;
      }
      if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
        value = `\\${value}`;
      }
      if (opts.posix === true && value === "!" && prev.value === "[") {
        value = "^";
      }
      prev.value += value;
      append2({ value });
      continue;
    }
    if (state.quotes === 1 && value !== '"') {
      value = utils$d.escapeRegex(value);
      prev.value += value;
      append2({ value });
      continue;
    }
    if (value === '"') {
      state.quotes = state.quotes === 1 ? 0 : 1;
      if (opts.keepQuotes === true) {
        push2({ type: "text", value });
      }
      continue;
    }
    if (value === "(") {
      increment("parens");
      push2({ type: "paren", value });
      continue;
    }
    if (value === ")") {
      if (state.parens === 0 && opts.strictBrackets === true) {
        throw new SyntaxError(syntaxError("opening", "("));
      }
      const extglob = extglobs[extglobs.length - 1];
      if (extglob && state.parens === extglob.parens + 1) {
        extglobClose(extglobs.pop());
        continue;
      }
      push2({ type: "paren", value, output: state.parens ? ")" : "\\)" });
      decrement("parens");
      continue;
    }
    if (value === "[") {
      if (opts.nobracket === true || !remaining().includes("]")) {
        if (opts.nobracket !== true && opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError("closing", "]"));
        }
        value = `\\${value}`;
      } else {
        increment("brackets");
      }
      push2({ type: "bracket", value });
      continue;
    }
    if (value === "]") {
      if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
        push2({ type: "text", value, output: `\\${value}` });
        continue;
      }
      if (state.brackets === 0) {
        if (opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError("opening", "["));
        }
        push2({ type: "text", value, output: `\\${value}` });
        continue;
      }
      decrement("brackets");
      const prevValue = prev.value.slice(1);
      if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
        value = `/${value}`;
      }
      prev.value += value;
      append2({ value });
      if (opts.literalBrackets === false || utils$d.hasRegexChars(prevValue)) {
        continue;
      }
      const escaped2 = utils$d.escapeRegex(prev.value);
      state.output = state.output.slice(0, -prev.value.length);
      if (opts.literalBrackets === true) {
        state.output += escaped2;
        prev.value = escaped2;
        continue;
      }
      prev.value = `(${capture}${escaped2}|${prev.value})`;
      state.output += prev.value;
      continue;
    }
    if (value === "{" && opts.nobrace !== true) {
      increment("braces");
      const open = {
        type: "brace",
        value,
        output: "(",
        outputIndex: state.output.length,
        tokensIndex: state.tokens.length
      };
      braces2.push(open);
      push2(open);
      continue;
    }
    if (value === "}") {
      const brace = braces2[braces2.length - 1];
      if (opts.nobrace === true || !brace) {
        push2({ type: "text", value, output: value });
        continue;
      }
      let output = ")";
      if (brace.dots === true) {
        const arr = tokens.slice();
        const range2 = [];
        for (let i = arr.length - 1; i >= 0; i--) {
          tokens.pop();
          if (arr[i].type === "brace") {
            break;
          }
          if (arr[i].type !== "dots") {
            range2.unshift(arr[i].value);
          }
        }
        output = expandRange(range2, opts);
        state.backtrack = true;
      }
      if (brace.comma !== true && brace.dots !== true) {
        const out2 = state.output.slice(0, brace.outputIndex);
        const toks = state.tokens.slice(brace.tokensIndex);
        brace.value = brace.output = "\\{";
        value = output = "\\}";
        state.output = out2;
        for (const t2 of toks) {
          state.output += t2.output || t2.value;
        }
      }
      push2({ type: "brace", value, output });
      decrement("braces");
      braces2.pop();
      continue;
    }
    if (value === "|") {
      if (extglobs.length > 0) {
        extglobs[extglobs.length - 1].conditions++;
      }
      push2({ type: "text", value });
      continue;
    }
    if (value === ",") {
      let output = value;
      const brace = braces2[braces2.length - 1];
      if (brace && stack[stack.length - 1] === "braces") {
        brace.comma = true;
        output = "|";
      }
      push2({ type: "comma", value, output });
      continue;
    }
    if (value === "/") {
      if (prev.type === "dot" && state.index === state.start + 1) {
        state.start = state.index + 1;
        state.consumed = "";
        state.output = "";
        tokens.pop();
        prev = bos;
        continue;
      }
      push2({ type: "slash", value, output: SLASH_LITERAL2 });
      continue;
    }
    if (value === ".") {
      if (state.braces > 0 && prev.type === "dot") {
        if (prev.value === ".")
          prev.output = DOT_LITERAL2;
        const brace = braces2[braces2.length - 1];
        prev.type = "dots";
        prev.output += value;
        prev.value += value;
        brace.dots = true;
        continue;
      }
      if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
        push2({ type: "text", value, output: DOT_LITERAL2 });
        continue;
      }
      push2({ type: "dot", value, output: DOT_LITERAL2 });
      continue;
    }
    if (value === "?") {
      const isGroup = prev && prev.value === "(";
      if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
        extglobOpen("qmark", value);
        continue;
      }
      if (prev && prev.type === "paren") {
        const next = peek();
        let output = value;
        if (next === "<" && !utils$d.supportsLookbehinds()) {
          throw new Error("Node.js v10 or higher is required for regex lookbehinds");
        }
        if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
          output = `\\${value}`;
        }
        push2({ type: "text", value, output });
        continue;
      }
      if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
        push2({ type: "qmark", value, output: QMARK_NO_DOT2 });
        continue;
      }
      push2({ type: "qmark", value, output: QMARK2 });
      continue;
    }
    if (value === "!") {
      if (opts.noextglob !== true && peek() === "(") {
        if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
          extglobOpen("negate", value);
          continue;
        }
      }
      if (opts.nonegate !== true && state.index === 0) {
        negate();
        continue;
      }
    }
    if (value === "+") {
      if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
        extglobOpen("plus", value);
        continue;
      }
      if (prev && prev.value === "(" || opts.regex === false) {
        push2({ type: "plus", value, output: PLUS_LITERAL2 });
        continue;
      }
      if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
        push2({ type: "plus", value });
        continue;
      }
      push2({ type: "plus", value: PLUS_LITERAL2 });
      continue;
    }
    if (value === "@") {
      if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
        push2({ type: "at", extglob: true, value, output: "" });
        continue;
      }
      push2({ type: "text", value });
      continue;
    }
    if (value !== "*") {
      if (value === "$" || value === "^") {
        value = `\\${value}`;
      }
      const match2 = REGEX_NON_SPECIAL_CHARS.exec(remaining());
      if (match2) {
        value += match2[0];
        state.index += match2[0].length;
      }
      push2({ type: "text", value });
      continue;
    }
    if (prev && (prev.type === "globstar" || prev.star === true)) {
      prev.type = "star";
      prev.star = true;
      prev.value += value;
      prev.output = star;
      state.backtrack = true;
      state.globstar = true;
      consume(value);
      continue;
    }
    let rest = remaining();
    if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
      extglobOpen("star", value);
      continue;
    }
    if (prev.type === "star") {
      if (opts.noglobstar === true) {
        consume(value);
        continue;
      }
      const prior = prev.prev;
      const before = prior.prev;
      const isStart = prior.type === "slash" || prior.type === "bos";
      const afterStar = before && (before.type === "star" || before.type === "globstar");
      if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
        push2({ type: "star", value, output: "" });
        continue;
      }
      const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
      const isExtglob3 = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
      if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob3) {
        push2({ type: "star", value, output: "" });
        continue;
      }
      while (rest.slice(0, 3) === "/**") {
        const after = input[state.index + 4];
        if (after && after !== "/") {
          break;
        }
        rest = rest.slice(3);
        consume("/**", 3);
      }
      if (prior.type === "bos" && eos()) {
        prev.type = "globstar";
        prev.value += value;
        prev.output = globstar(opts);
        state.output = prev.output;
        state.globstar = true;
        consume(value);
        continue;
      }
      if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;
        prev.type = "globstar";
        prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
        prev.value += value;
        state.globstar = true;
        state.output += prior.output + prev.output;
        consume(value);
        continue;
      }
      if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
        const end = rest[1] !== void 0 ? "|$" : "";
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;
        prev.type = "globstar";
        prev.output = `${globstar(opts)}${SLASH_LITERAL2}|${SLASH_LITERAL2}${end})`;
        prev.value += value;
        state.output += prior.output + prev.output;
        state.globstar = true;
        consume(value + advance());
        push2({ type: "slash", value: "/", output: "" });
        continue;
      }
      if (prior.type === "bos" && rest[0] === "/") {
        prev.type = "globstar";
        prev.value += value;
        prev.output = `(?:^|${SLASH_LITERAL2}|${globstar(opts)}${SLASH_LITERAL2})`;
        state.output = prev.output;
        state.globstar = true;
        consume(value + advance());
        push2({ type: "slash", value: "/", output: "" });
        continue;
      }
      state.output = state.output.slice(0, -prev.output.length);
      prev.type = "globstar";
      prev.output = globstar(opts);
      prev.value += value;
      state.output += prev.output;
      state.globstar = true;
      consume(value);
      continue;
    }
    const token = { type: "star", value, output: star };
    if (opts.bash === true) {
      token.output = ".*?";
      if (prev.type === "bos" || prev.type === "slash") {
        token.output = nodot + token.output;
      }
      push2(token);
      continue;
    }
    if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
      token.output = value;
      push2(token);
      continue;
    }
    if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
      if (prev.type === "dot") {
        state.output += NO_DOT_SLASH2;
        prev.output += NO_DOT_SLASH2;
      } else if (opts.dot === true) {
        state.output += NO_DOTS_SLASH2;
        prev.output += NO_DOTS_SLASH2;
      } else {
        state.output += nodot;
        prev.output += nodot;
      }
      if (peek() !== "*") {
        state.output += ONE_CHAR2;
        prev.output += ONE_CHAR2;
      }
    }
    push2(token);
  }
  while (state.brackets > 0) {
    if (opts.strictBrackets === true)
      throw new SyntaxError(syntaxError("closing", "]"));
    state.output = utils$d.escapeLast(state.output, "[");
    decrement("brackets");
  }
  while (state.parens > 0) {
    if (opts.strictBrackets === true)
      throw new SyntaxError(syntaxError("closing", ")"));
    state.output = utils$d.escapeLast(state.output, "(");
    decrement("parens");
  }
  while (state.braces > 0) {
    if (opts.strictBrackets === true)
      throw new SyntaxError(syntaxError("closing", "}"));
    state.output = utils$d.escapeLast(state.output, "{");
    decrement("braces");
  }
  if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
    push2({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL2}?` });
  }
  if (state.backtrack === true) {
    state.output = "";
    for (const token of state.tokens) {
      state.output += token.output != null ? token.output : token.value;
      if (token.suffix) {
        state.output += token.suffix;
      }
    }
  }
  return state;
};
parse$8.fastpaths = (input, options) => {
  const opts = { ...options };
  const max2 = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH$2, opts.maxLength) : MAX_LENGTH$2;
  const len = input.length;
  if (len > max2) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max2}`);
  }
  input = REPLACEMENTS[input] || input;
  const win32 = utils$d.isWindows(options);
  const {
    DOT_LITERAL: DOT_LITERAL2,
    SLASH_LITERAL: SLASH_LITERAL2,
    ONE_CHAR: ONE_CHAR2,
    DOTS_SLASH: DOTS_SLASH2,
    NO_DOT: NO_DOT2,
    NO_DOTS: NO_DOTS2,
    NO_DOTS_SLASH: NO_DOTS_SLASH2,
    STAR: STAR2,
    START_ANCHOR: START_ANCHOR2
  } = constants$4.globChars(win32);
  const nodot = opts.dot ? NO_DOTS2 : NO_DOT2;
  const slashDot = opts.dot ? NO_DOTS_SLASH2 : NO_DOT2;
  const capture = opts.capture ? "" : "?:";
  const state = { negated: false, prefix: "" };
  let star = opts.bash === true ? ".*?" : STAR2;
  if (opts.capture) {
    star = `(${star})`;
  }
  const globstar = (opts2) => {
    if (opts2.noglobstar === true)
      return star;
    return `(${capture}(?:(?!${START_ANCHOR2}${opts2.dot ? DOTS_SLASH2 : DOT_LITERAL2}).)*?)`;
  };
  const create3 = (str2) => {
    switch (str2) {
      case "*":
        return `${nodot}${ONE_CHAR2}${star}`;
      case ".*":
        return `${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      case "*.*":
        return `${nodot}${star}${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      case "*/*":
        return `${nodot}${star}${SLASH_LITERAL2}${ONE_CHAR2}${slashDot}${star}`;
      case "**":
        return nodot + globstar(opts);
      case "**/*":
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL2})?${slashDot}${ONE_CHAR2}${star}`;
      case "**/*.*":
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL2})?${slashDot}${star}${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      case "**/.*":
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL2})?${DOT_LITERAL2}${ONE_CHAR2}${star}`;
      default: {
        const match2 = /^(.*?)\.(\w+)$/.exec(str2);
        if (!match2)
          return;
        const source2 = create3(match2[1]);
        if (!source2)
          return;
        return source2 + DOT_LITERAL2 + match2[2];
      }
    }
  };
  const output = utils$d.removePrefix(input, state);
  let source = create3(output);
  if (source && opts.strictSlashes !== true) {
    source += `${SLASH_LITERAL2}?`;
  }
  return source;
};
var parse_1$1 = parse$8;
const path$7 = require$$0$3;
const scan = scan_1;
const parse$7 = parse_1$1;
const utils$c = utils$f;
const constants$3 = constants$5;
const isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
const picomatch$2 = (glob, options, returnState = false) => {
  if (Array.isArray(glob)) {
    const fns = glob.map((input) => picomatch$2(input, options, returnState));
    const arrayMatcher = (str2) => {
      for (const isMatch of fns) {
        const state2 = isMatch(str2);
        if (state2)
          return state2;
      }
      return false;
    };
    return arrayMatcher;
  }
  const isState = isObject(glob) && glob.tokens && glob.input;
  if (glob === "" || typeof glob !== "string" && !isState) {
    throw new TypeError("Expected pattern to be a non-empty string");
  }
  const opts = options || {};
  const posix = utils$c.isWindows(options);
  const regex = isState ? picomatch$2.compileRe(glob, options) : picomatch$2.makeRe(glob, options, false, true);
  const state = regex.state;
  delete regex.state;
  let isIgnored = () => false;
  if (opts.ignore) {
    const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
    isIgnored = picomatch$2(opts.ignore, ignoreOpts, returnState);
  }
  const matcher2 = (input, returnObject = false) => {
    const { isMatch, match: match2, output } = picomatch$2.test(input, regex, options, { glob, posix });
    const result = { glob, state, regex, posix, input, output, match: match2, isMatch };
    if (typeof opts.onResult === "function") {
      opts.onResult(result);
    }
    if (isMatch === false) {
      result.isMatch = false;
      return returnObject ? result : false;
    }
    if (isIgnored(input)) {
      if (typeof opts.onIgnore === "function") {
        opts.onIgnore(result);
      }
      result.isMatch = false;
      return returnObject ? result : false;
    }
    if (typeof opts.onMatch === "function") {
      opts.onMatch(result);
    }
    return returnObject ? result : true;
  };
  if (returnState) {
    matcher2.state = state;
  }
  return matcher2;
};
picomatch$2.test = (input, regex, options, { glob, posix } = {}) => {
  if (typeof input !== "string") {
    throw new TypeError("Expected input to be a string");
  }
  if (input === "") {
    return { isMatch: false, output: "" };
  }
  const opts = options || {};
  const format = opts.format || (posix ? utils$c.toPosixSlashes : null);
  let match2 = input === glob;
  let output = match2 && format ? format(input) : input;
  if (match2 === false) {
    output = format ? format(input) : input;
    match2 = output === glob;
  }
  if (match2 === false || opts.capture === true) {
    if (opts.matchBase === true || opts.basename === true) {
      match2 = picomatch$2.matchBase(input, regex, options, posix);
    } else {
      match2 = regex.exec(output);
    }
  }
  return { isMatch: Boolean(match2), match: match2, output };
};
picomatch$2.matchBase = (input, glob, options, posix = utils$c.isWindows(options)) => {
  const regex = glob instanceof RegExp ? glob : picomatch$2.makeRe(glob, options);
  return regex.test(path$7.basename(input));
};
picomatch$2.isMatch = (str2, patterns, options) => picomatch$2(patterns, options)(str2);
picomatch$2.parse = (pattern2, options) => {
  if (Array.isArray(pattern2))
    return pattern2.map((p) => picomatch$2.parse(p, options));
  return parse$7(pattern2, { ...options, fastpaths: false });
};
picomatch$2.scan = (input, options) => scan(input, options);
picomatch$2.compileRe = (state, options, returnOutput = false, returnState = false) => {
  if (returnOutput === true) {
    return state.output;
  }
  const opts = options || {};
  const prepend = opts.contains ? "" : "^";
  const append2 = opts.contains ? "" : "$";
  let source = `${prepend}(?:${state.output})${append2}`;
  if (state && state.negated === true) {
    source = `^(?!${source}).*$`;
  }
  const regex = picomatch$2.toRegex(source, options);
  if (returnState === true) {
    regex.state = state;
  }
  return regex;
};
picomatch$2.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
  if (!input || typeof input !== "string") {
    throw new TypeError("Expected a non-empty string");
  }
  let parsed = { negated: false, fastpaths: true };
  if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
    parsed.output = parse$7.fastpaths(input, options);
  }
  if (!parsed.output) {
    parsed = parse$7(input, options);
  }
  return picomatch$2.compileRe(parsed, options, returnOutput, returnState);
};
picomatch$2.toRegex = (source, options) => {
  try {
    const opts = options || {};
    return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
  } catch (err) {
    if (options && options.debug === true)
      throw err;
    return /$^/;
  }
};
picomatch$2.constants = constants$3;
var picomatch_1 = picomatch$2;
var picomatch$1 = picomatch_1;
const util = require$$0$2;
const braces = braces_1;
const picomatch = picomatch$1;
const utils$b = utils$f;
const isEmptyString = (val) => val === "" || val === "./";
const micromatch$1 = (list, patterns, options) => {
  patterns = [].concat(patterns);
  list = [].concat(list);
  let omit = /* @__PURE__ */ new Set();
  let keep = /* @__PURE__ */ new Set();
  let items = /* @__PURE__ */ new Set();
  let negatives = 0;
  let onResult = (state) => {
    items.add(state.output);
    if (options && options.onResult) {
      options.onResult(state);
    }
  };
  for (let i = 0; i < patterns.length; i++) {
    let isMatch = picomatch(String(patterns[i]), { ...options, onResult }, true);
    let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
    if (negated)
      negatives++;
    for (let item of list) {
      let matched = isMatch(item, true);
      let match2 = negated ? !matched.isMatch : matched.isMatch;
      if (!match2)
        continue;
      if (negated) {
        omit.add(matched.output);
      } else {
        omit.delete(matched.output);
        keep.add(matched.output);
      }
    }
  }
  let result = negatives === patterns.length ? [...items] : [...keep];
  let matches = result.filter((item) => !omit.has(item));
  if (options && matches.length === 0) {
    if (options.failglob === true) {
      throw new Error(`No matches found for "${patterns.join(", ")}"`);
    }
    if (options.nonull === true || options.nullglob === true) {
      return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
    }
  }
  return matches;
};
micromatch$1.match = micromatch$1;
micromatch$1.matcher = (pattern2, options) => picomatch(pattern2, options);
micromatch$1.isMatch = (str2, patterns, options) => picomatch(patterns, options)(str2);
micromatch$1.any = micromatch$1.isMatch;
micromatch$1.not = (list, patterns, options = {}) => {
  patterns = [].concat(patterns).map(String);
  let result = /* @__PURE__ */ new Set();
  let items = [];
  let onResult = (state) => {
    if (options.onResult)
      options.onResult(state);
    items.push(state.output);
  };
  let matches = new Set(micromatch$1(list, patterns, { ...options, onResult }));
  for (let item of items) {
    if (!matches.has(item)) {
      result.add(item);
    }
  }
  return [...result];
};
micromatch$1.contains = (str2, pattern2, options) => {
  if (typeof str2 !== "string") {
    throw new TypeError(`Expected a string: "${util.inspect(str2)}"`);
  }
  if (Array.isArray(pattern2)) {
    return pattern2.some((p) => micromatch$1.contains(str2, p, options));
  }
  if (typeof pattern2 === "string") {
    if (isEmptyString(str2) || isEmptyString(pattern2)) {
      return false;
    }
    if (str2.includes(pattern2) || str2.startsWith("./") && str2.slice(2).includes(pattern2)) {
      return true;
    }
  }
  return micromatch$1.isMatch(str2, pattern2, { ...options, contains: true });
};
micromatch$1.matchKeys = (obj, patterns, options) => {
  if (!utils$b.isObject(obj)) {
    throw new TypeError("Expected the first argument to be an object");
  }
  let keys4 = micromatch$1(Object.keys(obj), patterns, options);
  let res = {};
  for (let key of keys4)
    res[key] = obj[key];
  return res;
};
micromatch$1.some = (list, patterns, options) => {
  let items = [].concat(list);
  for (let pattern2 of [].concat(patterns)) {
    let isMatch = picomatch(String(pattern2), options);
    if (items.some((item) => isMatch(item))) {
      return true;
    }
  }
  return false;
};
micromatch$1.every = (list, patterns, options) => {
  let items = [].concat(list);
  for (let pattern2 of [].concat(patterns)) {
    let isMatch = picomatch(String(pattern2), options);
    if (!items.every((item) => isMatch(item))) {
      return false;
    }
  }
  return true;
};
micromatch$1.all = (str2, patterns, options) => {
  if (typeof str2 !== "string") {
    throw new TypeError(`Expected a string: "${util.inspect(str2)}"`);
  }
  return [].concat(patterns).every((p) => picomatch(p, options)(str2));
};
micromatch$1.capture = (glob, input, options) => {
  let posix = utils$b.isWindows(options);
  let regex = picomatch.makeRe(String(glob), { ...options, capture: true });
  let match2 = regex.exec(posix ? utils$b.toPosixSlashes(input) : input);
  if (match2) {
    return match2.slice(1).map((v) => v === void 0 ? "" : v);
  }
};
micromatch$1.makeRe = (...args) => picomatch.makeRe(...args);
micromatch$1.scan = (...args) => picomatch.scan(...args);
micromatch$1.parse = (patterns, options) => {
  let res = [];
  for (let pattern2 of [].concat(patterns || [])) {
    for (let str2 of braces(String(pattern2), options)) {
      res.push(picomatch.parse(str2, options));
    }
  }
  return res;
};
micromatch$1.braces = (pattern2, options) => {
  if (typeof pattern2 !== "string")
    throw new TypeError("Expected a string");
  if (options && options.nobrace === true || !/\{.*\}/.test(pattern2)) {
    return [pattern2];
  }
  return braces(pattern2, options);
};
micromatch$1.braceExpand = (pattern2, options) => {
  if (typeof pattern2 !== "string")
    throw new TypeError("Expected a string");
  return micromatch$1.braces(pattern2, { ...options, expand: true });
};
var micromatch_1 = micromatch$1;
Object.defineProperty(pattern$1, "__esModule", { value: true });
pattern$1.removeDuplicateSlashes = pattern$1.matchAny = pattern$1.convertPatternsToRe = pattern$1.makeRe = pattern$1.getPatternParts = pattern$1.expandBraceExpansion = pattern$1.expandPatternsWithBraceExpansion = pattern$1.isAffectDepthOfReadingPattern = pattern$1.endsWithSlashGlobStar = pattern$1.hasGlobStar = pattern$1.getBaseDirectory = pattern$1.isPatternRelatedToParentDirectory = pattern$1.getPatternsOutsideCurrentDirectory = pattern$1.getPatternsInsideCurrentDirectory = pattern$1.getPositivePatterns = pattern$1.getNegativePatterns = pattern$1.isPositivePattern = pattern$1.isNegativePattern = pattern$1.convertToNegativePattern = pattern$1.convertToPositivePattern = pattern$1.isDynamicPattern = pattern$1.isStaticPattern = void 0;
const path$6 = require$$0$3;
const globParent2 = globParent$1;
const micromatch = micromatch_1;
const GLOBSTAR = "**";
const ESCAPE_SYMBOL = "\\";
const COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
const REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
const REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
const GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
const BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
const DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
function isStaticPattern(pattern2, options = {}) {
  return !isDynamicPattern(pattern2, options);
}
pattern$1.isStaticPattern = isStaticPattern;
function isDynamicPattern(pattern2, options = {}) {
  if (pattern2 === "") {
    return false;
  }
  if (options.caseSensitiveMatch === false || pattern2.includes(ESCAPE_SYMBOL)) {
    return true;
  }
  if (COMMON_GLOB_SYMBOLS_RE.test(pattern2) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern2) || REGEX_GROUP_SYMBOLS_RE.test(pattern2)) {
    return true;
  }
  if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern2)) {
    return true;
  }
  if (options.braceExpansion !== false && hasBraceExpansion(pattern2)) {
    return true;
  }
  return false;
}
pattern$1.isDynamicPattern = isDynamicPattern;
function hasBraceExpansion(pattern2) {
  const openingBraceIndex = pattern2.indexOf("{");
  if (openingBraceIndex === -1) {
    return false;
  }
  const closingBraceIndex = pattern2.indexOf("}", openingBraceIndex + 1);
  if (closingBraceIndex === -1) {
    return false;
  }
  const braceContent = pattern2.slice(openingBraceIndex, closingBraceIndex);
  return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
}
function convertToPositivePattern(pattern2) {
  return isNegativePattern$1(pattern2) ? pattern2.slice(1) : pattern2;
}
pattern$1.convertToPositivePattern = convertToPositivePattern;
function convertToNegativePattern(pattern2) {
  return "!" + pattern2;
}
pattern$1.convertToNegativePattern = convertToNegativePattern;
function isNegativePattern$1(pattern2) {
  return pattern2.startsWith("!") && pattern2[1] !== "(";
}
pattern$1.isNegativePattern = isNegativePattern$1;
function isPositivePattern(pattern2) {
  return !isNegativePattern$1(pattern2);
}
pattern$1.isPositivePattern = isPositivePattern;
function getNegativePatterns(patterns) {
  return patterns.filter(isNegativePattern$1);
}
pattern$1.getNegativePatterns = getNegativePatterns;
function getPositivePatterns$1(patterns) {
  return patterns.filter(isPositivePattern);
}
pattern$1.getPositivePatterns = getPositivePatterns$1;
function getPatternsInsideCurrentDirectory(patterns) {
  return patterns.filter((pattern2) => !isPatternRelatedToParentDirectory(pattern2));
}
pattern$1.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
function getPatternsOutsideCurrentDirectory(patterns) {
  return patterns.filter(isPatternRelatedToParentDirectory);
}
pattern$1.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
function isPatternRelatedToParentDirectory(pattern2) {
  return pattern2.startsWith("..") || pattern2.startsWith("./..");
}
pattern$1.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
function getBaseDirectory(pattern2) {
  return globParent2(pattern2, { flipBackslashes: false });
}
pattern$1.getBaseDirectory = getBaseDirectory;
function hasGlobStar(pattern2) {
  return pattern2.includes(GLOBSTAR);
}
pattern$1.hasGlobStar = hasGlobStar;
function endsWithSlashGlobStar(pattern2) {
  return pattern2.endsWith("/" + GLOBSTAR);
}
pattern$1.endsWithSlashGlobStar = endsWithSlashGlobStar;
function isAffectDepthOfReadingPattern(pattern2) {
  const basename = path$6.basename(pattern2);
  return endsWithSlashGlobStar(pattern2) || isStaticPattern(basename);
}
pattern$1.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
function expandPatternsWithBraceExpansion(patterns) {
  return patterns.reduce((collection2, pattern2) => {
    return collection2.concat(expandBraceExpansion(pattern2));
  }, []);
}
pattern$1.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
function expandBraceExpansion(pattern2) {
  const patterns = micromatch.braces(pattern2, { expand: true, nodupes: true });
  patterns.sort((a, b) => a.length - b.length);
  return patterns.filter((pattern3) => pattern3 !== "");
}
pattern$1.expandBraceExpansion = expandBraceExpansion;
function getPatternParts(pattern2, options) {
  let { parts } = micromatch.scan(pattern2, Object.assign(Object.assign({}, options), { parts: true }));
  if (parts.length === 0) {
    parts = [pattern2];
  }
  if (parts[0].startsWith("/")) {
    parts[0] = parts[0].slice(1);
    parts.unshift("");
  }
  return parts;
}
pattern$1.getPatternParts = getPatternParts;
function makeRe(pattern2, options) {
  return micromatch.makeRe(pattern2, options);
}
pattern$1.makeRe = makeRe;
function convertPatternsToRe(patterns, options) {
  return patterns.map((pattern2) => makeRe(pattern2, options));
}
pattern$1.convertPatternsToRe = convertPatternsToRe;
function matchAny(entry2, patternsRe) {
  return patternsRe.some((patternRe) => patternRe.test(entry2));
}
pattern$1.matchAny = matchAny;
function removeDuplicateSlashes(pattern2) {
  return pattern2.replace(DOUBLE_SLASH_RE, "/");
}
pattern$1.removeDuplicateSlashes = removeDuplicateSlashes;
var stream$4 = {};
Object.defineProperty(stream$4, "__esModule", { value: true });
stream$4.merge = void 0;
const merge2 = merge2_1;
function merge(streams) {
  const mergedStream = merge2(streams);
  streams.forEach((stream2) => {
    stream2.once("error", (error2) => mergedStream.emit("error", error2));
  });
  mergedStream.once("close", () => propagateCloseEventToSources(streams));
  mergedStream.once("end", () => propagateCloseEventToSources(streams));
  return mergedStream;
}
stream$4.merge = merge;
function propagateCloseEventToSources(streams) {
  streams.forEach((stream2) => stream2.emit("close"));
}
var string$1 = {};
Object.defineProperty(string$1, "__esModule", { value: true });
string$1.isEmpty = string$1.isString = void 0;
function isString$1(input) {
  return typeof input === "string";
}
string$1.isString = isString$1;
function isEmpty(input) {
  return input === "";
}
string$1.isEmpty = isEmpty;
Object.defineProperty(utils$k, "__esModule", { value: true });
utils$k.string = utils$k.stream = utils$k.pattern = utils$k.path = utils$k.fs = utils$k.errno = utils$k.array = void 0;
const array = array$1;
utils$k.array = array;
const errno = errno$1;
utils$k.errno = errno;
const fs$7 = fs$8;
utils$k.fs = fs$7;
const path$5 = path$a;
utils$k.path = path$5;
const pattern = pattern$1;
utils$k.pattern = pattern;
const stream$3 = stream$4;
utils$k.stream = stream$3;
const string = string$1;
utils$k.string = string;
Object.defineProperty(tasks, "__esModule", { value: true });
tasks.convertPatternGroupToTask = tasks.convertPatternGroupsToTasks = tasks.groupPatternsByBaseDirectory = tasks.getNegativePatternsAsPositive = tasks.getPositivePatterns = tasks.convertPatternsToTasks = tasks.generate = void 0;
const utils$a = utils$k;
function generate(input, settings2) {
  const patterns = processPatterns(input, settings2);
  const ignore2 = processPatterns(settings2.ignore, settings2);
  const positivePatterns = getPositivePatterns(patterns);
  const negativePatterns = getNegativePatternsAsPositive(patterns, ignore2);
  const staticPatterns = positivePatterns.filter((pattern2) => utils$a.pattern.isStaticPattern(pattern2, settings2));
  const dynamicPatterns = positivePatterns.filter((pattern2) => utils$a.pattern.isDynamicPattern(pattern2, settings2));
  const staticTasks = convertPatternsToTasks(
    staticPatterns,
    negativePatterns,
    /* dynamic */
    false
  );
  const dynamicTasks = convertPatternsToTasks(
    dynamicPatterns,
    negativePatterns,
    /* dynamic */
    true
  );
  return staticTasks.concat(dynamicTasks);
}
tasks.generate = generate;
function processPatterns(input, settings2) {
  let patterns = input;
  if (settings2.braceExpansion) {
    patterns = utils$a.pattern.expandPatternsWithBraceExpansion(patterns);
  }
  if (settings2.baseNameMatch) {
    patterns = patterns.map((pattern2) => pattern2.includes("/") ? pattern2 : `**/${pattern2}`);
  }
  return patterns.map((pattern2) => utils$a.pattern.removeDuplicateSlashes(pattern2));
}
function convertPatternsToTasks(positive, negative, dynamic) {
  const tasks2 = [];
  const patternsOutsideCurrentDirectory = utils$a.pattern.getPatternsOutsideCurrentDirectory(positive);
  const patternsInsideCurrentDirectory = utils$a.pattern.getPatternsInsideCurrentDirectory(positive);
  const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
  const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
  tasks2.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
  if ("." in insideCurrentDirectoryGroup) {
    tasks2.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
  } else {
    tasks2.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
  }
  return tasks2;
}
tasks.convertPatternsToTasks = convertPatternsToTasks;
function getPositivePatterns(patterns) {
  return utils$a.pattern.getPositivePatterns(patterns);
}
tasks.getPositivePatterns = getPositivePatterns;
function getNegativePatternsAsPositive(patterns, ignore2) {
  const negative = utils$a.pattern.getNegativePatterns(patterns).concat(ignore2);
  const positive = negative.map(utils$a.pattern.convertToPositivePattern);
  return positive;
}
tasks.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
function groupPatternsByBaseDirectory(patterns) {
  const group = {};
  return patterns.reduce((collection2, pattern2) => {
    const base = utils$a.pattern.getBaseDirectory(pattern2);
    if (base in collection2) {
      collection2[base].push(pattern2);
    } else {
      collection2[base] = [pattern2];
    }
    return collection2;
  }, group);
}
tasks.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
function convertPatternGroupsToTasks(positive, negative, dynamic) {
  return Object.keys(positive).map((base) => {
    return convertPatternGroupToTask(base, positive[base], negative, dynamic);
  });
}
tasks.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
function convertPatternGroupToTask(base, positive, negative, dynamic) {
  return {
    dynamic,
    positive,
    negative,
    base,
    patterns: [].concat(positive, negative.map(utils$a.pattern.convertToNegativePattern))
  };
}
tasks.convertPatternGroupToTask = convertPatternGroupToTask;
var async$7 = {};
var async$6 = {};
var out$3 = {};
var async$5 = {};
var async$4 = {};
var out$2 = {};
var async$3 = {};
var out$1 = {};
var async$2 = {};
Object.defineProperty(async$2, "__esModule", { value: true });
async$2.read = void 0;
function read$3(path2, settings2, callback) {
  settings2.fs.lstat(path2, (lstatError, lstat) => {
    if (lstatError !== null) {
      callFailureCallback$2(callback, lstatError);
      return;
    }
    if (!lstat.isSymbolicLink() || !settings2.followSymbolicLink) {
      callSuccessCallback$2(callback, lstat);
      return;
    }
    settings2.fs.stat(path2, (statError, stat2) => {
      if (statError !== null) {
        if (settings2.throwErrorOnBrokenSymbolicLink) {
          callFailureCallback$2(callback, statError);
          return;
        }
        callSuccessCallback$2(callback, lstat);
        return;
      }
      if (settings2.markSymbolicLink) {
        stat2.isSymbolicLink = () => true;
      }
      callSuccessCallback$2(callback, stat2);
    });
  });
}
async$2.read = read$3;
function callFailureCallback$2(callback, error2) {
  callback(error2);
}
function callSuccessCallback$2(callback, result) {
  callback(null, result);
}
var sync$7 = {};
Object.defineProperty(sync$7, "__esModule", { value: true });
sync$7.read = void 0;
function read$2(path2, settings2) {
  const lstat = settings2.fs.lstatSync(path2);
  if (!lstat.isSymbolicLink() || !settings2.followSymbolicLink) {
    return lstat;
  }
  try {
    const stat2 = settings2.fs.statSync(path2);
    if (settings2.markSymbolicLink) {
      stat2.isSymbolicLink = () => true;
    }
    return stat2;
  } catch (error2) {
    if (!settings2.throwErrorOnBrokenSymbolicLink) {
      return lstat;
    }
    throw error2;
  }
}
sync$7.read = read$2;
var settings$3 = {};
var fs$6 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
  const fs2 = require$$0$1;
  exports.FILE_SYSTEM_ADAPTER = {
    lstat: fs2.lstat,
    stat: fs2.stat,
    lstatSync: fs2.lstatSync,
    statSync: fs2.statSync
  };
  function createFileSystemAdapter(fsMethods) {
    if (fsMethods === void 0) {
      return exports.FILE_SYSTEM_ADAPTER;
    }
    return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
  }
  exports.createFileSystemAdapter = createFileSystemAdapter;
})(fs$6);
Object.defineProperty(settings$3, "__esModule", { value: true });
const fs$5 = fs$6;
let Settings$2 = class Settings {
  constructor(_options = {}) {
    this._options = _options;
    this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
    this.fs = fs$5.createFileSystemAdapter(this._options.fs);
    this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
    this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
  }
  _getValue(option, value) {
    return option !== null && option !== void 0 ? option : value;
  }
};
settings$3.default = Settings$2;
Object.defineProperty(out$1, "__esModule", { value: true });
out$1.statSync = out$1.stat = out$1.Settings = void 0;
const async$1 = async$2;
const sync$6 = sync$7;
const settings_1$3 = settings$3;
out$1.Settings = settings_1$3.default;
function stat(path2, optionsOrSettingsOrCallback, callback) {
  if (typeof optionsOrSettingsOrCallback === "function") {
    async$1.read(path2, getSettings$2(), optionsOrSettingsOrCallback);
    return;
  }
  async$1.read(path2, getSettings$2(optionsOrSettingsOrCallback), callback);
}
out$1.stat = stat;
function statSync(path2, optionsOrSettings) {
  const settings2 = getSettings$2(optionsOrSettings);
  return sync$6.read(path2, settings2);
}
out$1.statSync = statSync;
function getSettings$2(settingsOrOptions = {}) {
  if (settingsOrOptions instanceof settings_1$3.default) {
    return settingsOrOptions;
  }
  return new settings_1$3.default(settingsOrOptions);
}
/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let promise;
var queueMicrotask_1 = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : commonjsGlobal) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
  throw err;
}, 0));
/*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var runParallel_1 = runParallel;
const queueMicrotask$1 = queueMicrotask_1;
function runParallel(tasks2, cb) {
  let results, pending, keys4;
  let isSync = true;
  if (Array.isArray(tasks2)) {
    results = [];
    pending = tasks2.length;
  } else {
    keys4 = Object.keys(tasks2);
    results = {};
    pending = keys4.length;
  }
  function done(err) {
    function end() {
      if (cb)
        cb(err, results);
      cb = null;
    }
    if (isSync)
      queueMicrotask$1(end);
    else
      end();
  }
  function each(i, err, result) {
    results[i] = result;
    if (--pending === 0 || err) {
      done(err);
    }
  }
  if (!pending) {
    done(null);
  } else if (keys4) {
    keys4.forEach(function(key) {
      tasks2[key](function(err, result) {
        each(key, err, result);
      });
    });
  } else {
    tasks2.forEach(function(task, i) {
      task(function(err, result) {
        each(i, err, result);
      });
    });
  }
  isSync = false;
}
var constants$2 = {};
Object.defineProperty(constants$2, "__esModule", { value: true });
constants$2.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
const NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
if (NODE_PROCESS_VERSION_PARTS[0] === void 0 || NODE_PROCESS_VERSION_PARTS[1] === void 0) {
  throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
}
const MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
const MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
const SUPPORTED_MAJOR_VERSION = 10;
const SUPPORTED_MINOR_VERSION = 10;
const IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
const IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
constants$2.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
var utils$9 = {};
var fs$4 = {};
Object.defineProperty(fs$4, "__esModule", { value: true });
fs$4.createDirentFromStats = void 0;
class DirentFromStats2 {
  constructor(name, stats) {
    this.name = name;
    this.isBlockDevice = stats.isBlockDevice.bind(stats);
    this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
    this.isDirectory = stats.isDirectory.bind(stats);
    this.isFIFO = stats.isFIFO.bind(stats);
    this.isFile = stats.isFile.bind(stats);
    this.isSocket = stats.isSocket.bind(stats);
    this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
  }
}
function createDirentFromStats(name, stats) {
  return new DirentFromStats2(name, stats);
}
fs$4.createDirentFromStats = createDirentFromStats;
Object.defineProperty(utils$9, "__esModule", { value: true });
utils$9.fs = void 0;
const fs$3 = fs$4;
utils$9.fs = fs$3;
var common$6 = {};
Object.defineProperty(common$6, "__esModule", { value: true });
common$6.joinPathSegments = void 0;
function joinPathSegments$1(a, b, separator) {
  if (a.endsWith(separator)) {
    return a + b;
  }
  return a + separator + b;
}
common$6.joinPathSegments = joinPathSegments$1;
Object.defineProperty(async$3, "__esModule", { value: true });
async$3.readdir = async$3.readdirWithFileTypes = async$3.read = void 0;
const fsStat$5 = out$1;
const rpl = runParallel_1;
const constants_1$1 = constants$2;
const utils$8 = utils$9;
const common$5 = common$6;
function read$1(directory, settings2, callback) {
  if (!settings2.stats && constants_1$1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
    readdirWithFileTypes$1(directory, settings2, callback);
    return;
  }
  readdir$1(directory, settings2, callback);
}
async$3.read = read$1;
function readdirWithFileTypes$1(directory, settings2, callback) {
  settings2.fs.readdir(directory, { withFileTypes: true }, (readdirError, dirents) => {
    if (readdirError !== null) {
      callFailureCallback$1(callback, readdirError);
      return;
    }
    const entries = dirents.map((dirent) => ({
      dirent,
      name: dirent.name,
      path: common$5.joinPathSegments(directory, dirent.name, settings2.pathSegmentSeparator)
    }));
    if (!settings2.followSymbolicLinks) {
      callSuccessCallback$1(callback, entries);
      return;
    }
    const tasks2 = entries.map((entry2) => makeRplTaskEntry(entry2, settings2));
    rpl(tasks2, (rplError, rplEntries) => {
      if (rplError !== null) {
        callFailureCallback$1(callback, rplError);
        return;
      }
      callSuccessCallback$1(callback, rplEntries);
    });
  });
}
async$3.readdirWithFileTypes = readdirWithFileTypes$1;
function makeRplTaskEntry(entry2, settings2) {
  return (done) => {
    if (!entry2.dirent.isSymbolicLink()) {
      done(null, entry2);
      return;
    }
    settings2.fs.stat(entry2.path, (statError, stats) => {
      if (statError !== null) {
        if (settings2.throwErrorOnBrokenSymbolicLink) {
          done(statError);
          return;
        }
        done(null, entry2);
        return;
      }
      entry2.dirent = utils$8.fs.createDirentFromStats(entry2.name, stats);
      done(null, entry2);
    });
  };
}
function readdir$1(directory, settings2, callback) {
  settings2.fs.readdir(directory, (readdirError, names) => {
    if (readdirError !== null) {
      callFailureCallback$1(callback, readdirError);
      return;
    }
    const tasks2 = names.map((name) => {
      const path2 = common$5.joinPathSegments(directory, name, settings2.pathSegmentSeparator);
      return (done) => {
        fsStat$5.stat(path2, settings2.fsStatSettings, (error2, stats) => {
          if (error2 !== null) {
            done(error2);
            return;
          }
          const entry2 = {
            name,
            path: path2,
            dirent: utils$8.fs.createDirentFromStats(name, stats)
          };
          if (settings2.stats) {
            entry2.stats = stats;
          }
          done(null, entry2);
        });
      };
    });
    rpl(tasks2, (rplError, entries) => {
      if (rplError !== null) {
        callFailureCallback$1(callback, rplError);
        return;
      }
      callSuccessCallback$1(callback, entries);
    });
  });
}
async$3.readdir = readdir$1;
function callFailureCallback$1(callback, error2) {
  callback(error2);
}
function callSuccessCallback$1(callback, result) {
  callback(null, result);
}
var sync$5 = {};
Object.defineProperty(sync$5, "__esModule", { value: true });
sync$5.readdir = sync$5.readdirWithFileTypes = sync$5.read = void 0;
const fsStat$4 = out$1;
const constants_1 = constants$2;
const utils$7 = utils$9;
const common$4 = common$6;
function read(directory, settings2) {
  if (!settings2.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
    return readdirWithFileTypes(directory, settings2);
  }
  return readdir(directory, settings2);
}
sync$5.read = read;
function readdirWithFileTypes(directory, settings2) {
  const dirents = settings2.fs.readdirSync(directory, { withFileTypes: true });
  return dirents.map((dirent) => {
    const entry2 = {
      dirent,
      name: dirent.name,
      path: common$4.joinPathSegments(directory, dirent.name, settings2.pathSegmentSeparator)
    };
    if (entry2.dirent.isSymbolicLink() && settings2.followSymbolicLinks) {
      try {
        const stats = settings2.fs.statSync(entry2.path);
        entry2.dirent = utils$7.fs.createDirentFromStats(entry2.name, stats);
      } catch (error2) {
        if (settings2.throwErrorOnBrokenSymbolicLink) {
          throw error2;
        }
      }
    }
    return entry2;
  });
}
sync$5.readdirWithFileTypes = readdirWithFileTypes;
function readdir(directory, settings2) {
  const names = settings2.fs.readdirSync(directory);
  return names.map((name) => {
    const entryPath = common$4.joinPathSegments(directory, name, settings2.pathSegmentSeparator);
    const stats = fsStat$4.statSync(entryPath, settings2.fsStatSettings);
    const entry2 = {
      name,
      path: entryPath,
      dirent: utils$7.fs.createDirentFromStats(name, stats)
    };
    if (settings2.stats) {
      entry2.stats = stats;
    }
    return entry2;
  });
}
sync$5.readdir = readdir;
var settings$2 = {};
var fs$2 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
  const fs2 = require$$0$1;
  exports.FILE_SYSTEM_ADAPTER = {
    lstat: fs2.lstat,
    stat: fs2.stat,
    lstatSync: fs2.lstatSync,
    statSync: fs2.statSync,
    readdir: fs2.readdir,
    readdirSync: fs2.readdirSync
  };
  function createFileSystemAdapter(fsMethods) {
    if (fsMethods === void 0) {
      return exports.FILE_SYSTEM_ADAPTER;
    }
    return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
  }
  exports.createFileSystemAdapter = createFileSystemAdapter;
})(fs$2);
Object.defineProperty(settings$2, "__esModule", { value: true });
const path$4 = require$$0$3;
const fsStat$3 = out$1;
const fs$1 = fs$2;
let Settings$1 = class Settings2 {
  constructor(_options = {}) {
    this._options = _options;
    this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
    this.fs = fs$1.createFileSystemAdapter(this._options.fs);
    this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path$4.sep);
    this.stats = this._getValue(this._options.stats, false);
    this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
    this.fsStatSettings = new fsStat$3.Settings({
      followSymbolicLink: this.followSymbolicLinks,
      fs: this.fs,
      throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
    });
  }
  _getValue(option, value) {
    return option !== null && option !== void 0 ? option : value;
  }
};
settings$2.default = Settings$1;
Object.defineProperty(out$2, "__esModule", { value: true });
out$2.Settings = out$2.scandirSync = out$2.scandir = void 0;
const async = async$3;
const sync$4 = sync$5;
const settings_1$2 = settings$2;
out$2.Settings = settings_1$2.default;
function scandir(path2, optionsOrSettingsOrCallback, callback) {
  if (typeof optionsOrSettingsOrCallback === "function") {
    async.read(path2, getSettings$1(), optionsOrSettingsOrCallback);
    return;
  }
  async.read(path2, getSettings$1(optionsOrSettingsOrCallback), callback);
}
out$2.scandir = scandir;
function scandirSync(path2, optionsOrSettings) {
  const settings2 = getSettings$1(optionsOrSettings);
  return sync$4.read(path2, settings2);
}
out$2.scandirSync = scandirSync;
function getSettings$1(settingsOrOptions = {}) {
  if (settingsOrOptions instanceof settings_1$2.default) {
    return settingsOrOptions;
  }
  return new settings_1$2.default(settingsOrOptions);
}
var queue = { exports: {} };
function reusify$1(Constructor) {
  var head = new Constructor();
  var tail = head;
  function get2() {
    var current = head;
    if (current.next) {
      head = current.next;
    } else {
      head = new Constructor();
      tail = head;
    }
    current.next = null;
    return current;
  }
  function release(obj) {
    tail.next = obj;
    tail = obj;
  }
  return {
    get: get2,
    release
  };
}
var reusify_1 = reusify$1;
var reusify = reusify_1;
function fastqueue(context, worker, concurrency) {
  if (typeof context === "function") {
    concurrency = worker;
    worker = context;
    context = null;
  }
  if (concurrency < 1) {
    throw new Error("fastqueue concurrency must be greater than 1");
  }
  var cache = reusify(Task);
  var queueHead = null;
  var queueTail = null;
  var _running = 0;
  var errorHandler = null;
  var self2 = {
    push: push2,
    drain: noop,
    saturated: noop,
    pause,
    paused: false,
    concurrency,
    running,
    resume,
    idle,
    length,
    getQueue,
    unshift: unshift2,
    empty: noop,
    kill,
    killAndDrain,
    error: error2
  };
  return self2;
  function running() {
    return _running;
  }
  function pause() {
    self2.paused = true;
  }
  function length() {
    var current = queueHead;
    var counter = 0;
    while (current) {
      current = current.next;
      counter++;
    }
    return counter;
  }
  function getQueue() {
    var current = queueHead;
    var tasks2 = [];
    while (current) {
      tasks2.push(current.value);
      current = current.next;
    }
    return tasks2;
  }
  function resume() {
    if (!self2.paused)
      return;
    self2.paused = false;
    for (var i = 0; i < self2.concurrency; i++) {
      _running++;
      release();
    }
  }
  function idle() {
    return _running === 0 && self2.length() === 0;
  }
  function push2(value, done) {
    var current = cache.get();
    current.context = context;
    current.release = release;
    current.value = value;
    current.callback = done || noop;
    current.errorHandler = errorHandler;
    if (_running === self2.concurrency || self2.paused) {
      if (queueTail) {
        queueTail.next = current;
        queueTail = current;
      } else {
        queueHead = current;
        queueTail = current;
        self2.saturated();
      }
    } else {
      _running++;
      worker.call(context, current.value, current.worked);
    }
  }
  function unshift2(value, done) {
    var current = cache.get();
    current.context = context;
    current.release = release;
    current.value = value;
    current.callback = done || noop;
    if (_running === self2.concurrency || self2.paused) {
      if (queueHead) {
        current.next = queueHead;
        queueHead = current;
      } else {
        queueHead = current;
        queueTail = current;
        self2.saturated();
      }
    } else {
      _running++;
      worker.call(context, current.value, current.worked);
    }
  }
  function release(holder) {
    if (holder) {
      cache.release(holder);
    }
    var next = queueHead;
    if (next) {
      if (!self2.paused) {
        if (queueTail === queueHead) {
          queueTail = null;
        }
        queueHead = next.next;
        next.next = null;
        worker.call(context, next.value, next.worked);
        if (queueTail === null) {
          self2.empty();
        }
      } else {
        _running--;
      }
    } else if (--_running === 0) {
      self2.drain();
    }
  }
  function kill() {
    queueHead = null;
    queueTail = null;
    self2.drain = noop;
  }
  function killAndDrain() {
    queueHead = null;
    queueTail = null;
    self2.drain();
    self2.drain = noop;
  }
  function error2(handler) {
    errorHandler = handler;
  }
}
function noop() {
}
function Task() {
  this.value = null;
  this.callback = noop;
  this.next = null;
  this.release = noop;
  this.context = null;
  this.errorHandler = null;
  var self2 = this;
  this.worked = function worked(err, result) {
    var callback = self2.callback;
    var errorHandler = self2.errorHandler;
    var val = self2.value;
    self2.value = null;
    self2.callback = noop;
    if (self2.errorHandler) {
      errorHandler(err, val);
    }
    callback.call(self2.context, err, result);
    self2.release(self2);
  };
}
function queueAsPromised(context, worker, concurrency) {
  if (typeof context === "function") {
    concurrency = worker;
    worker = context;
    context = null;
  }
  function asyncWrapper(arg, cb) {
    worker.call(this, arg).then(function(res) {
      cb(null, res);
    }, cb);
  }
  var queue2 = fastqueue(context, asyncWrapper, concurrency);
  var pushCb = queue2.push;
  var unshiftCb = queue2.unshift;
  queue2.push = push2;
  queue2.unshift = unshift2;
  queue2.drained = drained;
  return queue2;
  function push2(value) {
    var p = new Promise(function(resolve, reject) {
      pushCb(value, function(err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
    p.catch(noop);
    return p;
  }
  function unshift2(value) {
    var p = new Promise(function(resolve, reject) {
      unshiftCb(value, function(err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
    p.catch(noop);
    return p;
  }
  function drained() {
    if (queue2.idle()) {
      return new Promise(function(resolve) {
        resolve();
      });
    }
    var previousDrain = queue2.drain;
    var p = new Promise(function(resolve) {
      queue2.drain = function() {
        previousDrain();
        resolve();
      };
    });
    return p;
  }
}
queue.exports = fastqueue;
queue.exports.promise = queueAsPromised;
var queueExports = queue.exports;
var common$3 = {};
Object.defineProperty(common$3, "__esModule", { value: true });
common$3.joinPathSegments = common$3.replacePathSegmentSeparator = common$3.isAppliedFilter = common$3.isFatalError = void 0;
function isFatalError(settings2, error2) {
  if (settings2.errorFilter === null) {
    return true;
  }
  return !settings2.errorFilter(error2);
}
common$3.isFatalError = isFatalError;
function isAppliedFilter(filter, value) {
  return filter === null || filter(value);
}
common$3.isAppliedFilter = isAppliedFilter;
function replacePathSegmentSeparator(filepath, separator) {
  return filepath.split(/[/\\]/).join(separator);
}
common$3.replacePathSegmentSeparator = replacePathSegmentSeparator;
function joinPathSegments(a, b, separator) {
  if (a === "") {
    return b;
  }
  if (a.endsWith(separator)) {
    return a + b;
  }
  return a + separator + b;
}
common$3.joinPathSegments = joinPathSegments;
var reader$1 = {};
Object.defineProperty(reader$1, "__esModule", { value: true });
const common$2 = common$3;
let Reader$1 = class Reader {
  constructor(_root, _settings) {
    this._root = _root;
    this._settings = _settings;
    this._root = common$2.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
  }
};
reader$1.default = Reader$1;
Object.defineProperty(async$4, "__esModule", { value: true });
const events_1 = require$$4;
const fsScandir$2 = out$2;
const fastq = queueExports;
const common$1 = common$3;
const reader_1$4 = reader$1;
class AsyncReader extends reader_1$4.default {
  constructor(_root, _settings) {
    super(_root, _settings);
    this._settings = _settings;
    this._scandir = fsScandir$2.scandir;
    this._emitter = new events_1.EventEmitter();
    this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
    this._isFatalError = false;
    this._isDestroyed = false;
    this._queue.drain = () => {
      if (!this._isFatalError) {
        this._emitter.emit("end");
      }
    };
  }
  read() {
    this._isFatalError = false;
    this._isDestroyed = false;
    setImmediate(() => {
      this._pushToQueue(this._root, this._settings.basePath);
    });
    return this._emitter;
  }
  get isDestroyed() {
    return this._isDestroyed;
  }
  destroy() {
    if (this._isDestroyed) {
      throw new Error("The reader is already destroyed");
    }
    this._isDestroyed = true;
    this._queue.killAndDrain();
  }
  onEntry(callback) {
    this._emitter.on("entry", callback);
  }
  onError(callback) {
    this._emitter.once("error", callback);
  }
  onEnd(callback) {
    this._emitter.once("end", callback);
  }
  _pushToQueue(directory, base) {
    const queueItem = { directory, base };
    this._queue.push(queueItem, (error2) => {
      if (error2 !== null) {
        this._handleError(error2);
      }
    });
  }
  _worker(item, done) {
    this._scandir(item.directory, this._settings.fsScandirSettings, (error2, entries) => {
      if (error2 !== null) {
        done(error2, void 0);
        return;
      }
      for (const entry2 of entries) {
        this._handleEntry(entry2, item.base);
      }
      done(null, void 0);
    });
  }
  _handleError(error2) {
    if (this._isDestroyed || !common$1.isFatalError(this._settings, error2)) {
      return;
    }
    this._isFatalError = true;
    this._isDestroyed = true;
    this._emitter.emit("error", error2);
  }
  _handleEntry(entry2, base) {
    if (this._isDestroyed || this._isFatalError) {
      return;
    }
    const fullpath = entry2.path;
    if (base !== void 0) {
      entry2.path = common$1.joinPathSegments(base, entry2.name, this._settings.pathSegmentSeparator);
    }
    if (common$1.isAppliedFilter(this._settings.entryFilter, entry2)) {
      this._emitEntry(entry2);
    }
    if (entry2.dirent.isDirectory() && common$1.isAppliedFilter(this._settings.deepFilter, entry2)) {
      this._pushToQueue(fullpath, base === void 0 ? void 0 : entry2.path);
    }
  }
  _emitEntry(entry2) {
    this._emitter.emit("entry", entry2);
  }
}
async$4.default = AsyncReader;
Object.defineProperty(async$5, "__esModule", { value: true });
const async_1$4 = async$4;
class AsyncProvider {
  constructor(_root, _settings) {
    this._root = _root;
    this._settings = _settings;
    this._reader = new async_1$4.default(this._root, this._settings);
    this._storage = [];
  }
  read(callback) {
    this._reader.onError((error2) => {
      callFailureCallback(callback, error2);
    });
    this._reader.onEntry((entry2) => {
      this._storage.push(entry2);
    });
    this._reader.onEnd(() => {
      callSuccessCallback(callback, this._storage);
    });
    this._reader.read();
  }
}
async$5.default = AsyncProvider;
function callFailureCallback(callback, error2) {
  callback(error2);
}
function callSuccessCallback(callback, entries) {
  callback(null, entries);
}
var stream$2 = {};
Object.defineProperty(stream$2, "__esModule", { value: true });
const stream_1$5 = require$$0$4;
const async_1$3 = async$4;
class StreamProvider {
  constructor(_root, _settings) {
    this._root = _root;
    this._settings = _settings;
    this._reader = new async_1$3.default(this._root, this._settings);
    this._stream = new stream_1$5.Readable({
      objectMode: true,
      read: () => {
      },
      destroy: () => {
        if (!this._reader.isDestroyed) {
          this._reader.destroy();
        }
      }
    });
  }
  read() {
    this._reader.onError((error2) => {
      this._stream.emit("error", error2);
    });
    this._reader.onEntry((entry2) => {
      this._stream.push(entry2);
    });
    this._reader.onEnd(() => {
      this._stream.push(null);
    });
    this._reader.read();
    return this._stream;
  }
}
stream$2.default = StreamProvider;
var sync$3 = {};
var sync$2 = {};
Object.defineProperty(sync$2, "__esModule", { value: true });
const fsScandir$1 = out$2;
const common = common$3;
const reader_1$3 = reader$1;
class SyncReader extends reader_1$3.default {
  constructor() {
    super(...arguments);
    this._scandir = fsScandir$1.scandirSync;
    this._storage = [];
    this._queue = /* @__PURE__ */ new Set();
  }
  read() {
    this._pushToQueue(this._root, this._settings.basePath);
    this._handleQueue();
    return this._storage;
  }
  _pushToQueue(directory, base) {
    this._queue.add({ directory, base });
  }
  _handleQueue() {
    for (const item of this._queue.values()) {
      this._handleDirectory(item.directory, item.base);
    }
  }
  _handleDirectory(directory, base) {
    try {
      const entries = this._scandir(directory, this._settings.fsScandirSettings);
      for (const entry2 of entries) {
        this._handleEntry(entry2, base);
      }
    } catch (error2) {
      this._handleError(error2);
    }
  }
  _handleError(error2) {
    if (!common.isFatalError(this._settings, error2)) {
      return;
    }
    throw error2;
  }
  _handleEntry(entry2, base) {
    const fullpath = entry2.path;
    if (base !== void 0) {
      entry2.path = common.joinPathSegments(base, entry2.name, this._settings.pathSegmentSeparator);
    }
    if (common.isAppliedFilter(this._settings.entryFilter, entry2)) {
      this._pushToStorage(entry2);
    }
    if (entry2.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry2)) {
      this._pushToQueue(fullpath, base === void 0 ? void 0 : entry2.path);
    }
  }
  _pushToStorage(entry2) {
    this._storage.push(entry2);
  }
}
sync$2.default = SyncReader;
Object.defineProperty(sync$3, "__esModule", { value: true });
const sync_1$3 = sync$2;
class SyncProvider {
  constructor(_root, _settings) {
    this._root = _root;
    this._settings = _settings;
    this._reader = new sync_1$3.default(this._root, this._settings);
  }
  read() {
    return this._reader.read();
  }
}
sync$3.default = SyncProvider;
var settings$1 = {};
Object.defineProperty(settings$1, "__esModule", { value: true });
const path$3 = require$$0$3;
const fsScandir = out$2;
class Settings3 {
  constructor(_options = {}) {
    this._options = _options;
    this.basePath = this._getValue(this._options.basePath, void 0);
    this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
    this.deepFilter = this._getValue(this._options.deepFilter, null);
    this.entryFilter = this._getValue(this._options.entryFilter, null);
    this.errorFilter = this._getValue(this._options.errorFilter, null);
    this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path$3.sep);
    this.fsScandirSettings = new fsScandir.Settings({
      followSymbolicLinks: this._options.followSymbolicLinks,
      fs: this._options.fs,
      pathSegmentSeparator: this._options.pathSegmentSeparator,
      stats: this._options.stats,
      throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
    });
  }
  _getValue(option, value) {
    return option !== null && option !== void 0 ? option : value;
  }
}
settings$1.default = Settings3;
Object.defineProperty(out$3, "__esModule", { value: true });
out$3.Settings = out$3.walkStream = out$3.walkSync = out$3.walk = void 0;
const async_1$2 = async$5;
const stream_1$4 = stream$2;
const sync_1$2 = sync$3;
const settings_1$1 = settings$1;
out$3.Settings = settings_1$1.default;
function walk(directory, optionsOrSettingsOrCallback, callback) {
  if (typeof optionsOrSettingsOrCallback === "function") {
    new async_1$2.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
    return;
  }
  new async_1$2.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
}
out$3.walk = walk;
function walkSync(directory, optionsOrSettings) {
  const settings2 = getSettings(optionsOrSettings);
  const provider2 = new sync_1$2.default(directory, settings2);
  return provider2.read();
}
out$3.walkSync = walkSync;
function walkStream(directory, optionsOrSettings) {
  const settings2 = getSettings(optionsOrSettings);
  const provider2 = new stream_1$4.default(directory, settings2);
  return provider2.read();
}
out$3.walkStream = walkStream;
function getSettings(settingsOrOptions = {}) {
  if (settingsOrOptions instanceof settings_1$1.default) {
    return settingsOrOptions;
  }
  return new settings_1$1.default(settingsOrOptions);
}
var reader = {};
Object.defineProperty(reader, "__esModule", { value: true });
const path$2 = require$$0$3;
const fsStat$2 = out$1;
const utils$6 = utils$k;
class Reader2 {
  constructor(_settings) {
    this._settings = _settings;
    this._fsStatSettings = new fsStat$2.Settings({
      followSymbolicLink: this._settings.followSymbolicLinks,
      fs: this._settings.fs,
      throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
    });
  }
  _getFullEntryPath(filepath) {
    return path$2.resolve(this._settings.cwd, filepath);
  }
  _makeEntry(stats, pattern2) {
    const entry2 = {
      name: pattern2,
      path: pattern2,
      dirent: utils$6.fs.createDirentFromStats(pattern2, stats)
    };
    if (this._settings.stats) {
      entry2.stats = stats;
    }
    return entry2;
  }
  _isFatalError(error2) {
    return !utils$6.errno.isEnoentCodeError(error2) && !this._settings.suppressErrors;
  }
}
reader.default = Reader2;
var stream$1 = {};
Object.defineProperty(stream$1, "__esModule", { value: true });
const stream_1$3 = require$$0$4;
const fsStat$1 = out$1;
const fsWalk$2 = out$3;
const reader_1$2 = reader;
class ReaderStream extends reader_1$2.default {
  constructor() {
    super(...arguments);
    this._walkStream = fsWalk$2.walkStream;
    this._stat = fsStat$1.stat;
  }
  dynamic(root, options) {
    return this._walkStream(root, options);
  }
  static(patterns, options) {
    const filepaths = patterns.map(this._getFullEntryPath, this);
    const stream2 = new stream_1$3.PassThrough({ objectMode: true });
    stream2._write = (index, _enc, done) => {
      return this._getEntry(filepaths[index], patterns[index], options).then((entry2) => {
        if (entry2 !== null && options.entryFilter(entry2)) {
          stream2.push(entry2);
        }
        if (index === filepaths.length - 1) {
          stream2.end();
        }
        done();
      }).catch(done);
    };
    for (let i = 0; i < filepaths.length; i++) {
      stream2.write(i);
    }
    return stream2;
  }
  _getEntry(filepath, pattern2, options) {
    return this._getStat(filepath).then((stats) => this._makeEntry(stats, pattern2)).catch((error2) => {
      if (options.errorFilter(error2)) {
        return null;
      }
      throw error2;
    });
  }
  _getStat(filepath) {
    return new Promise((resolve, reject) => {
      this._stat(filepath, this._fsStatSettings, (error2, stats) => {
        return error2 === null ? resolve(stats) : reject(error2);
      });
    });
  }
}
stream$1.default = ReaderStream;
Object.defineProperty(async$6, "__esModule", { value: true });
const fsWalk$1 = out$3;
const reader_1$1 = reader;
const stream_1$2 = stream$1;
class ReaderAsync extends reader_1$1.default {
  constructor() {
    super(...arguments);
    this._walkAsync = fsWalk$1.walk;
    this._readerStream = new stream_1$2.default(this._settings);
  }
  dynamic(root, options) {
    return new Promise((resolve, reject) => {
      this._walkAsync(root, options, (error2, entries) => {
        if (error2 === null) {
          resolve(entries);
        } else {
          reject(error2);
        }
      });
    });
  }
  async static(patterns, options) {
    const entries = [];
    const stream2 = this._readerStream.static(patterns, options);
    return new Promise((resolve, reject) => {
      stream2.once("error", reject);
      stream2.on("data", (entry2) => entries.push(entry2));
      stream2.once("end", () => resolve(entries));
    });
  }
}
async$6.default = ReaderAsync;
var provider = {};
var deep = {};
var partial = {};
var matcher = {};
Object.defineProperty(matcher, "__esModule", { value: true });
const utils$5 = utils$k;
class Matcher {
  constructor(_patterns, _settings, _micromatchOptions) {
    this._patterns = _patterns;
    this._settings = _settings;
    this._micromatchOptions = _micromatchOptions;
    this._storage = [];
    this._fillStorage();
  }
  _fillStorage() {
    for (const pattern2 of this._patterns) {
      const segments = this._getPatternSegments(pattern2);
      const sections = this._splitSegmentsIntoSections(segments);
      this._storage.push({
        complete: sections.length <= 1,
        pattern: pattern2,
        segments,
        sections
      });
    }
  }
  _getPatternSegments(pattern2) {
    const parts = utils$5.pattern.getPatternParts(pattern2, this._micromatchOptions);
    return parts.map((part) => {
      const dynamic = utils$5.pattern.isDynamicPattern(part, this._settings);
      if (!dynamic) {
        return {
          dynamic: false,
          pattern: part
        };
      }
      return {
        dynamic: true,
        pattern: part,
        patternRe: utils$5.pattern.makeRe(part, this._micromatchOptions)
      };
    });
  }
  _splitSegmentsIntoSections(segments) {
    return utils$5.array.splitWhen(segments, (segment) => segment.dynamic && utils$5.pattern.hasGlobStar(segment.pattern));
  }
}
matcher.default = Matcher;
Object.defineProperty(partial, "__esModule", { value: true });
const matcher_1 = matcher;
class PartialMatcher extends matcher_1.default {
  match(filepath) {
    const parts = filepath.split("/");
    const levels = parts.length;
    const patterns = this._storage.filter((info) => !info.complete || info.segments.length > levels);
    for (const pattern2 of patterns) {
      const section = pattern2.sections[0];
      if (!pattern2.complete && levels > section.length) {
        return true;
      }
      const match2 = parts.every((part, index) => {
        const segment = pattern2.segments[index];
        if (segment.dynamic && segment.patternRe.test(part)) {
          return true;
        }
        if (!segment.dynamic && segment.pattern === part) {
          return true;
        }
        return false;
      });
      if (match2) {
        return true;
      }
    }
    return false;
  }
}
partial.default = PartialMatcher;
Object.defineProperty(deep, "__esModule", { value: true });
const utils$4 = utils$k;
const partial_1 = partial;
class DeepFilter {
  constructor(_settings, _micromatchOptions) {
    this._settings = _settings;
    this._micromatchOptions = _micromatchOptions;
  }
  getFilter(basePath, positive, negative) {
    const matcher2 = this._getMatcher(positive);
    const negativeRe = this._getNegativePatternsRe(negative);
    return (entry2) => this._filter(basePath, entry2, matcher2, negativeRe);
  }
  _getMatcher(patterns) {
    return new partial_1.default(patterns, this._settings, this._micromatchOptions);
  }
  _getNegativePatternsRe(patterns) {
    const affectDepthOfReadingPatterns = patterns.filter(utils$4.pattern.isAffectDepthOfReadingPattern);
    return utils$4.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
  }
  _filter(basePath, entry2, matcher2, negativeRe) {
    if (this._isSkippedByDeep(basePath, entry2.path)) {
      return false;
    }
    if (this._isSkippedSymbolicLink(entry2)) {
      return false;
    }
    const filepath = utils$4.path.removeLeadingDotSegment(entry2.path);
    if (this._isSkippedByPositivePatterns(filepath, matcher2)) {
      return false;
    }
    return this._isSkippedByNegativePatterns(filepath, negativeRe);
  }
  _isSkippedByDeep(basePath, entryPath) {
    if (this._settings.deep === Infinity) {
      return false;
    }
    return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
  }
  _getEntryLevel(basePath, entryPath) {
    const entryPathDepth = entryPath.split("/").length;
    if (basePath === "") {
      return entryPathDepth;
    }
    const basePathDepth = basePath.split("/").length;
    return entryPathDepth - basePathDepth;
  }
  _isSkippedSymbolicLink(entry2) {
    return !this._settings.followSymbolicLinks && entry2.dirent.isSymbolicLink();
  }
  _isSkippedByPositivePatterns(entryPath, matcher2) {
    return !this._settings.baseNameMatch && !matcher2.match(entryPath);
  }
  _isSkippedByNegativePatterns(entryPath, patternsRe) {
    return !utils$4.pattern.matchAny(entryPath, patternsRe);
  }
}
deep.default = DeepFilter;
var entry$1 = {};
Object.defineProperty(entry$1, "__esModule", { value: true });
const utils$3 = utils$k;
class EntryFilter {
  constructor(_settings, _micromatchOptions) {
    this._settings = _settings;
    this._micromatchOptions = _micromatchOptions;
    this.index = /* @__PURE__ */ new Map();
  }
  getFilter(positive, negative) {
    const positiveRe = utils$3.pattern.convertPatternsToRe(positive, this._micromatchOptions);
    const negativeRe = utils$3.pattern.convertPatternsToRe(negative, Object.assign(Object.assign({}, this._micromatchOptions), { dot: true }));
    return (entry2) => this._filter(entry2, positiveRe, negativeRe);
  }
  _filter(entry2, positiveRe, negativeRe) {
    const filepath = utils$3.path.removeLeadingDotSegment(entry2.path);
    if (this._settings.unique && this._isDuplicateEntry(filepath)) {
      return false;
    }
    if (this._onlyFileFilter(entry2) || this._onlyDirectoryFilter(entry2)) {
      return false;
    }
    if (this._isSkippedByAbsoluteNegativePatterns(filepath, negativeRe)) {
      return false;
    }
    const isDirectory = entry2.dirent.isDirectory();
    const isMatched = this._isMatchToPatterns(filepath, positiveRe, isDirectory) && !this._isMatchToPatterns(filepath, negativeRe, isDirectory);
    if (this._settings.unique && isMatched) {
      this._createIndexRecord(filepath);
    }
    return isMatched;
  }
  _isDuplicateEntry(filepath) {
    return this.index.has(filepath);
  }
  _createIndexRecord(filepath) {
    this.index.set(filepath, void 0);
  }
  _onlyFileFilter(entry2) {
    return this._settings.onlyFiles && !entry2.dirent.isFile();
  }
  _onlyDirectoryFilter(entry2) {
    return this._settings.onlyDirectories && !entry2.dirent.isDirectory();
  }
  _isSkippedByAbsoluteNegativePatterns(entryPath, patternsRe) {
    if (!this._settings.absolute) {
      return false;
    }
    const fullpath = utils$3.path.makeAbsolute(this._settings.cwd, entryPath);
    return utils$3.pattern.matchAny(fullpath, patternsRe);
  }
  _isMatchToPatterns(filepath, patternsRe, isDirectory) {
    const isMatched = utils$3.pattern.matchAny(filepath, patternsRe);
    if (!isMatched && isDirectory) {
      return utils$3.pattern.matchAny(filepath + "/", patternsRe);
    }
    return isMatched;
  }
}
entry$1.default = EntryFilter;
var error = {};
Object.defineProperty(error, "__esModule", { value: true });
const utils$2 = utils$k;
class ErrorFilter {
  constructor(_settings) {
    this._settings = _settings;
  }
  getFilter() {
    return (error2) => this._isNonFatalError(error2);
  }
  _isNonFatalError(error2) {
    return utils$2.errno.isEnoentCodeError(error2) || this._settings.suppressErrors;
  }
}
error.default = ErrorFilter;
var entry = {};
Object.defineProperty(entry, "__esModule", { value: true });
const utils$1 = utils$k;
class EntryTransformer {
  constructor(_settings) {
    this._settings = _settings;
  }
  getTransformer() {
    return (entry2) => this._transform(entry2);
  }
  _transform(entry2) {
    let filepath = entry2.path;
    if (this._settings.absolute) {
      filepath = utils$1.path.makeAbsolute(this._settings.cwd, filepath);
      filepath = utils$1.path.unixify(filepath);
    }
    if (this._settings.markDirectories && entry2.dirent.isDirectory()) {
      filepath += "/";
    }
    if (!this._settings.objectMode) {
      return filepath;
    }
    return Object.assign(Object.assign({}, entry2), { path: filepath });
  }
}
entry.default = EntryTransformer;
Object.defineProperty(provider, "__esModule", { value: true });
const path$1 = require$$0$3;
const deep_1 = deep;
const entry_1 = entry$1;
const error_1 = error;
const entry_2 = entry;
class Provider {
  constructor(_settings) {
    this._settings = _settings;
    this.errorFilter = new error_1.default(this._settings);
    this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
    this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
    this.entryTransformer = new entry_2.default(this._settings);
  }
  _getRootDirectory(task) {
    return path$1.resolve(this._settings.cwd, task.base);
  }
  _getReaderOptions(task) {
    const basePath = task.base === "." ? "" : task.base;
    return {
      basePath,
      pathSegmentSeparator: "/",
      concurrency: this._settings.concurrency,
      deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
      entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
      errorFilter: this.errorFilter.getFilter(),
      followSymbolicLinks: this._settings.followSymbolicLinks,
      fs: this._settings.fs,
      stats: this._settings.stats,
      throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
      transform: this.entryTransformer.getTransformer()
    };
  }
  _getMicromatchOptions() {
    return {
      dot: this._settings.dot,
      matchBase: this._settings.baseNameMatch,
      nobrace: !this._settings.braceExpansion,
      nocase: !this._settings.caseSensitiveMatch,
      noext: !this._settings.extglob,
      noglobstar: !this._settings.globstar,
      posix: true,
      strictSlashes: false
    };
  }
}
provider.default = Provider;
Object.defineProperty(async$7, "__esModule", { value: true });
const async_1$1 = async$6;
const provider_1$2 = provider;
class ProviderAsync extends provider_1$2.default {
  constructor() {
    super(...arguments);
    this._reader = new async_1$1.default(this._settings);
  }
  async read(task) {
    const root = this._getRootDirectory(task);
    const options = this._getReaderOptions(task);
    const entries = await this.api(root, task, options);
    return entries.map((entry2) => options.transform(entry2));
  }
  api(root, task, options) {
    if (task.dynamic) {
      return this._reader.dynamic(root, options);
    }
    return this._reader.static(task.patterns, options);
  }
}
async$7.default = ProviderAsync;
var stream = {};
Object.defineProperty(stream, "__esModule", { value: true });
const stream_1$1 = require$$0$4;
const stream_2 = stream$1;
const provider_1$1 = provider;
class ProviderStream extends provider_1$1.default {
  constructor() {
    super(...arguments);
    this._reader = new stream_2.default(this._settings);
  }
  read(task) {
    const root = this._getRootDirectory(task);
    const options = this._getReaderOptions(task);
    const source = this.api(root, task, options);
    const destination = new stream_1$1.Readable({ objectMode: true, read: () => {
    } });
    source.once("error", (error2) => destination.emit("error", error2)).on("data", (entry2) => destination.emit("data", options.transform(entry2))).once("end", () => destination.emit("end"));
    destination.once("close", () => source.destroy());
    return destination;
  }
  api(root, task, options) {
    if (task.dynamic) {
      return this._reader.dynamic(root, options);
    }
    return this._reader.static(task.patterns, options);
  }
}
stream.default = ProviderStream;
var sync$1 = {};
var sync = {};
Object.defineProperty(sync, "__esModule", { value: true });
const fsStat = out$1;
const fsWalk = out$3;
const reader_1 = reader;
class ReaderSync extends reader_1.default {
  constructor() {
    super(...arguments);
    this._walkSync = fsWalk.walkSync;
    this._statSync = fsStat.statSync;
  }
  dynamic(root, options) {
    return this._walkSync(root, options);
  }
  static(patterns, options) {
    const entries = [];
    for (const pattern2 of patterns) {
      const filepath = this._getFullEntryPath(pattern2);
      const entry2 = this._getEntry(filepath, pattern2, options);
      if (entry2 === null || !options.entryFilter(entry2)) {
        continue;
      }
      entries.push(entry2);
    }
    return entries;
  }
  _getEntry(filepath, pattern2, options) {
    try {
      const stats = this._getStat(filepath);
      return this._makeEntry(stats, pattern2);
    } catch (error2) {
      if (options.errorFilter(error2)) {
        return null;
      }
      throw error2;
    }
  }
  _getStat(filepath) {
    return this._statSync(filepath, this._fsStatSettings);
  }
}
sync.default = ReaderSync;
Object.defineProperty(sync$1, "__esModule", { value: true });
const sync_1$1 = sync;
const provider_1 = provider;
class ProviderSync extends provider_1.default {
  constructor() {
    super(...arguments);
    this._reader = new sync_1$1.default(this._settings);
  }
  read(task) {
    const root = this._getRootDirectory(task);
    const options = this._getReaderOptions(task);
    const entries = this.api(root, task, options);
    return entries.map(options.transform);
  }
  api(root, task, options) {
    if (task.dynamic) {
      return this._reader.dynamic(root, options);
    }
    return this._reader.static(task.patterns, options);
  }
}
sync$1.default = ProviderSync;
var settings = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
  const fs2 = require$$0$1;
  const os2 = require$$0;
  const CPU_COUNT = Math.max(os2.cpus().length, 1);
  exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
    lstat: fs2.lstat,
    lstatSync: fs2.lstatSync,
    stat: fs2.stat,
    statSync: fs2.statSync,
    readdir: fs2.readdir,
    readdirSync: fs2.readdirSync
  };
  class Settings4 {
    constructor(_options = {}) {
      this._options = _options;
      this.absolute = this._getValue(this._options.absolute, false);
      this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
      this.braceExpansion = this._getValue(this._options.braceExpansion, true);
      this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
      this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
      this.cwd = this._getValue(this._options.cwd, process.cwd());
      this.deep = this._getValue(this._options.deep, Infinity);
      this.dot = this._getValue(this._options.dot, false);
      this.extglob = this._getValue(this._options.extglob, true);
      this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
      this.fs = this._getFileSystemMethods(this._options.fs);
      this.globstar = this._getValue(this._options.globstar, true);
      this.ignore = this._getValue(this._options.ignore, []);
      this.markDirectories = this._getValue(this._options.markDirectories, false);
      this.objectMode = this._getValue(this._options.objectMode, false);
      this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
      this.onlyFiles = this._getValue(this._options.onlyFiles, true);
      this.stats = this._getValue(this._options.stats, false);
      this.suppressErrors = this._getValue(this._options.suppressErrors, false);
      this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
      this.unique = this._getValue(this._options.unique, true);
      if (this.onlyDirectories) {
        this.onlyFiles = false;
      }
      if (this.stats) {
        this.objectMode = true;
      }
    }
    _getValue(option, value) {
      return option === void 0 ? value : option;
    }
    _getFileSystemMethods(methods = {}) {
      return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
    }
  }
  exports.default = Settings4;
})(settings);
const taskManager = tasks;
const async_1 = async$7;
const stream_1 = stream;
const sync_1 = sync$1;
const settings_1 = settings;
const utils = utils$k;
async function FastGlob(source, options) {
  assertPatternsInput$1(source);
  const works = getWorks(source, async_1.default, options);
  const result = await Promise.all(works);
  return utils.array.flatten(result);
}
(function(FastGlob2) {
  FastGlob2.glob = FastGlob2;
  FastGlob2.globSync = sync2;
  FastGlob2.globStream = stream2;
  FastGlob2.async = FastGlob2;
  function sync2(source, options) {
    assertPatternsInput$1(source);
    const works = getWorks(source, sync_1.default, options);
    return utils.array.flatten(works);
  }
  FastGlob2.sync = sync2;
  function stream2(source, options) {
    assertPatternsInput$1(source);
    const works = getWorks(source, stream_1.default, options);
    return utils.stream.merge(works);
  }
  FastGlob2.stream = stream2;
  function generateTasks2(source, options) {
    assertPatternsInput$1(source);
    const patterns = [].concat(source);
    const settings2 = new settings_1.default(options);
    return taskManager.generate(patterns, settings2);
  }
  FastGlob2.generateTasks = generateTasks2;
  function isDynamicPattern2(source, options) {
    assertPatternsInput$1(source);
    const settings2 = new settings_1.default(options);
    return utils.pattern.isDynamicPattern(source, settings2);
  }
  FastGlob2.isDynamicPattern = isDynamicPattern2;
  function escapePath(source) {
    assertPatternsInput$1(source);
    return utils.path.escape(source);
  }
  FastGlob2.escapePath = escapePath;
  function convertPathToPattern(source) {
    assertPatternsInput$1(source);
    return utils.path.convertPathToPattern(source);
  }
  FastGlob2.convertPathToPattern = convertPathToPattern;
  (function(posix) {
    function escapePath2(source) {
      assertPatternsInput$1(source);
      return utils.path.escapePosixPath(source);
    }
    posix.escapePath = escapePath2;
    function convertPathToPattern2(source) {
      assertPatternsInput$1(source);
      return utils.path.convertPosixPathToPattern(source);
    }
    posix.convertPathToPattern = convertPathToPattern2;
  })(FastGlob2.posix || (FastGlob2.posix = {}));
  (function(win32) {
    function escapePath2(source) {
      assertPatternsInput$1(source);
      return utils.path.escapeWindowsPath(source);
    }
    win32.escapePath = escapePath2;
    function convertPathToPattern2(source) {
      assertPatternsInput$1(source);
      return utils.path.convertWindowsPathToPattern(source);
    }
    win32.convertPathToPattern = convertPathToPattern2;
  })(FastGlob2.win32 || (FastGlob2.win32 = {}));
})(FastGlob || (FastGlob = {}));
function getWorks(source, _Provider, options) {
  const patterns = [].concat(source);
  const settings2 = new settings_1.default(options);
  const tasks2 = taskManager.generate(patterns, settings2);
  const provider2 = new _Provider(settings2);
  return tasks2.map(provider2.read, provider2);
}
function assertPatternsInput$1(input) {
  const source = [].concat(input);
  const isValidSource = source.every((item) => utils.string.isString(item) && !utils.string.isEmpty(item));
  if (!isValidSource) {
    throw new TypeError("Patterns must be a string (non empty) or an array of strings");
  }
}
var out = FastGlob;
const fastGlob = /* @__PURE__ */ getDefaultExportFromCjs(out);
var dirGlob$1 = { exports: {} };
var pathType$1 = {};
const { promisify } = require$$0$2;
const fs = require$$0$1;
async function isType(fsStatType, statsMethodName, filePath) {
  if (typeof filePath !== "string") {
    throw new TypeError(`Expected a string, got ${typeof filePath}`);
  }
  try {
    const stats = await promisify(fs[fsStatType])(filePath);
    return stats[statsMethodName]();
  } catch (error2) {
    if (error2.code === "ENOENT") {
      return false;
    }
    throw error2;
  }
}
function isTypeSync(fsStatType, statsMethodName, filePath) {
  if (typeof filePath !== "string") {
    throw new TypeError(`Expected a string, got ${typeof filePath}`);
  }
  try {
    return fs[fsStatType](filePath)[statsMethodName]();
  } catch (error2) {
    if (error2.code === "ENOENT") {
      return false;
    }
    throw error2;
  }
}
pathType$1.isFile = isType.bind(null, "stat", "isFile");
pathType$1.isDirectory = isType.bind(null, "stat", "isDirectory");
pathType$1.isSymlink = isType.bind(null, "lstat", "isSymbolicLink");
pathType$1.isFileSync = isTypeSync.bind(null, "statSync", "isFile");
pathType$1.isDirectorySync = isTypeSync.bind(null, "statSync", "isDirectory");
pathType$1.isSymlinkSync = isTypeSync.bind(null, "lstatSync", "isSymbolicLink");
const path = require$$0$3;
const pathType = pathType$1;
const getExtensions = (extensions) => extensions.length > 1 ? `{${extensions.join(",")}}` : extensions[0];
const getPath = (filepath, cwd) => {
  const pth = filepath[0] === "!" ? filepath.slice(1) : filepath;
  return path.isAbsolute(pth) ? pth : path.join(cwd, pth);
};
const addExtensions = (file, extensions) => {
  if (path.extname(file)) {
    return `**/${file}`;
  }
  return `**/${file}.${getExtensions(extensions)}`;
};
const getGlob = (directory, options) => {
  if (options.files && !Array.isArray(options.files)) {
    throw new TypeError(`Expected \`files\` to be of type \`Array\` but received type \`${typeof options.files}\``);
  }
  if (options.extensions && !Array.isArray(options.extensions)) {
    throw new TypeError(`Expected \`extensions\` to be of type \`Array\` but received type \`${typeof options.extensions}\``);
  }
  if (options.files && options.extensions) {
    return options.files.map((x) => path.posix.join(directory, addExtensions(x, options.extensions)));
  }
  if (options.files) {
    return options.files.map((x) => path.posix.join(directory, `**/${x}`));
  }
  if (options.extensions) {
    return [path.posix.join(directory, `**/*.${getExtensions(options.extensions)}`)];
  }
  return [path.posix.join(directory, "**")];
};
dirGlob$1.exports = async (input, options) => {
  options = {
    cwd: process.cwd(),
    ...options
  };
  if (typeof options.cwd !== "string") {
    throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof options.cwd}\``);
  }
  const globs = await Promise.all([].concat(input).map(async (x) => {
    const isDirectory = await pathType.isDirectory(getPath(x, options.cwd));
    return isDirectory ? getGlob(x, options) : x;
  }));
  return [].concat.apply([], globs);
};
dirGlob$1.exports.sync = (input, options) => {
  options = {
    cwd: process.cwd(),
    ...options
  };
  if (typeof options.cwd !== "string") {
    throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof options.cwd}\``);
  }
  const globs = [].concat(input).map((x) => pathType.isDirectorySync(getPath(x, options.cwd)) ? getGlob(x, options) : x);
  return [].concat.apply([], globs);
};
var dirGlobExports = dirGlob$1.exports;
const dirGlob = /* @__PURE__ */ getDefaultExportFromCjs(dirGlobExports);
function makeArray(subject) {
  return Array.isArray(subject) ? subject : [subject];
}
const EMPTY = "";
const SPACE = " ";
const ESCAPE = "\\";
const REGEX_TEST_BLANK_LINE = /^\s+$/;
const REGEX_INVALID_TRAILING_BACKSLASH = /(?:[^\\]|^)\\$/;
const REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
const REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
const REGEX_SPLITALL_CRLF = /\r?\n/g;
const REGEX_TEST_INVALID_PATH = /^\.*\/|^\.+$/;
const SLASH = "/";
let TMP_KEY_IGNORE = "node-ignore";
if (typeof Symbol !== "undefined") {
  TMP_KEY_IGNORE = Symbol.for("node-ignore");
}
const KEY_IGNORE = TMP_KEY_IGNORE;
const define = (object, key, value) => Object.defineProperty(object, key, { value });
const REGEX_REGEXP_RANGE = /([0-z])-([0-z])/g;
const RETURN_FALSE = () => false;
const sanitizeRange = (range2) => range2.replace(
  REGEX_REGEXP_RANGE,
  (match2, from, to) => from.charCodeAt(0) <= to.charCodeAt(0) ? match2 : EMPTY
);
const cleanRangeBackSlash = (slashes) => {
  const { length } = slashes;
  return slashes.slice(0, length - length % 2);
};
const REPLACERS = [
  // > Trailing spaces are ignored unless they are quoted with backslash ("\")
  [
    // (a\ ) -> (a )
    // (a  ) -> (a)
    // (a \ ) -> (a  )
    /\\?\s+$/,
    (match2) => match2.indexOf("\\") === 0 ? SPACE : EMPTY
  ],
  // replace (\ ) with ' '
  [
    /\\\s/g,
    () => SPACE
  ],
  // Escape metacharacters
  // which is written down by users but means special for regular expressions.
  // > There are 12 characters with special meanings:
  // > - the backslash \,
  // > - the caret ^,
  // > - the dollar sign $,
  // > - the period or dot .,
  // > - the vertical bar or pipe symbol |,
  // > - the question mark ?,
  // > - the asterisk or star *,
  // > - the plus sign +,
  // > - the opening parenthesis (,
  // > - the closing parenthesis ),
  // > - and the opening square bracket [,
  // > - the opening curly brace {,
  // > These special characters are often called "metacharacters".
  [
    /[\\$.|*+(){^]/g,
    (match2) => `\\${match2}`
  ],
  [
    // > a question mark (?) matches a single character
    /(?!\\)\?/g,
    () => "[^/]"
  ],
  // leading slash
  [
    // > A leading slash matches the beginning of the pathname.
    // > For example, "/*.c" matches "cat-file.c" but not "mozilla-sha1/sha1.c".
    // A leading slash matches the beginning of the pathname
    /^\//,
    () => "^"
  ],
  // replace special metacharacter slash after the leading slash
  [
    /\//g,
    () => "\\/"
  ],
  [
    // > A leading "**" followed by a slash means match in all directories.
    // > For example, "**/foo" matches file or directory "foo" anywhere,
    // > the same as pattern "foo".
    // > "**/foo/bar" matches file or directory "bar" anywhere that is directly
    // >   under directory "foo".
    // Notice that the '*'s have been replaced as '\\*'
    /^\^*\\\*\\\*\\\//,
    // '**/foo' <-> 'foo'
    () => "^(?:.*\\/)?"
  ],
  // starting
  [
    // there will be no leading '/'
    //   (which has been replaced by section "leading slash")
    // If starts with '**', adding a '^' to the regular expression also works
    /^(?=[^^])/,
    function startingReplacer() {
      return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
    }
  ],
  // two globstars
  [
    // Use lookahead assertions so that we could match more than one `'/**'`
    /\\\/\\\*\\\*(?=\\\/|$)/g,
    // Zero, one or several directories
    // should not use '*', or it will be replaced by the next replacer
    // Check if it is not the last `'/**'`
    (_, index, str2) => index + 6 < str2.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
  ],
  // normal intermediate wildcards
  [
    // Never replace escaped '*'
    // ignore rule '\*' will match the path '*'
    // 'abc.*/' -> go
    // 'abc.*'  -> skip this rule,
    //    coz trailing single wildcard will be handed by [trailing wildcard]
    /(^|[^\\]+)(\\\*)+(?=.+)/g,
    // '*.js' matches '.js'
    // '*.js' doesn't match 'abc'
    (_, p1, p2) => {
      const unescaped = p2.replace(/\\\*/g, "[^\\/]*");
      return p1 + unescaped;
    }
  ],
  [
    // unescape, revert step 3 except for back slash
    // For example, if a user escape a '\\*',
    // after step 3, the result will be '\\\\\\*'
    /\\\\\\(?=[$.|*+(){^])/g,
    () => ESCAPE
  ],
  [
    // '\\\\' -> '\\'
    /\\\\/g,
    () => ESCAPE
  ],
  [
    // > The range notation, e.g. [a-zA-Z],
    // > can be used to match one of the characters in a range.
    // `\` is escaped by step 3
    /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
    (match2, leadEscape, range2, endEscape, close) => leadEscape === ESCAPE ? `\\[${range2}${cleanRangeBackSlash(endEscape)}${close}` : close === "]" ? endEscape.length % 2 === 0 ? `[${sanitizeRange(range2)}${endEscape}]` : "[]" : "[]"
  ],
  // ending
  [
    // 'js' will not match 'js.'
    // 'ab' will not match 'abc'
    /(?:[^*])$/,
    // WTF!
    // https://git-scm.com/docs/gitignore
    // changes in [2.22.1](https://git-scm.com/docs/gitignore/2.22.1)
    // which re-fixes #24, #38
    // > If there is a separator at the end of the pattern then the pattern
    // > will only match directories, otherwise the pattern can match both
    // > files and directories.
    // 'js*' will not match 'a.js'
    // 'js/' will not match 'a.js'
    // 'js' will match 'a.js' and 'a.js/'
    (match2) => /\/$/.test(match2) ? `${match2}$` : `${match2}(?=$|\\/$)`
  ],
  // trailing wildcard
  [
    /(\^|\\\/)?\\\*$/,
    (_, p1) => {
      const prefix = p1 ? `${p1}[^/]+` : "[^/]*";
      return `${prefix}(?=$|\\/$)`;
    }
  ]
];
const regexCache = /* @__PURE__ */ Object.create(null);
const makeRegex = (pattern2, ignoreCase) => {
  let source = regexCache[pattern2];
  if (!source) {
    source = REPLACERS.reduce(
      (prev, current) => prev.replace(current[0], current[1].bind(pattern2)),
      pattern2
    );
    regexCache[pattern2] = source;
  }
  return ignoreCase ? new RegExp(source, "i") : new RegExp(source);
};
const isString = (subject) => typeof subject === "string";
const checkPattern = (pattern2) => pattern2 && isString(pattern2) && !REGEX_TEST_BLANK_LINE.test(pattern2) && !REGEX_INVALID_TRAILING_BACKSLASH.test(pattern2) && pattern2.indexOf("#") !== 0;
const splitPattern = (pattern2) => pattern2.split(REGEX_SPLITALL_CRLF);
class IgnoreRule {
  constructor(origin, pattern2, negative, regex) {
    this.origin = origin;
    this.pattern = pattern2;
    this.negative = negative;
    this.regex = regex;
  }
}
const createRule = (pattern2, ignoreCase) => {
  const origin = pattern2;
  let negative = false;
  if (pattern2.indexOf("!") === 0) {
    negative = true;
    pattern2 = pattern2.substr(1);
  }
  pattern2 = pattern2.replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, "!").replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, "#");
  const regex = makeRegex(pattern2, ignoreCase);
  return new IgnoreRule(
    origin,
    pattern2,
    negative,
    regex
  );
};
const throwError = (message, Ctor) => {
  throw new Ctor(message);
};
const checkPath = (path2, originalPath, doThrow) => {
  if (!isString(path2)) {
    return doThrow(
      `path must be a string, but got \`${originalPath}\``,
      TypeError
    );
  }
  if (!path2) {
    return doThrow(`path must not be empty`, TypeError);
  }
  if (checkPath.isNotRelative(path2)) {
    const r = "`path.relative()`d";
    return doThrow(
      `path should be a ${r} string, but got "${originalPath}"`,
      RangeError
    );
  }
  return true;
};
const isNotRelative = (path2) => REGEX_TEST_INVALID_PATH.test(path2);
checkPath.isNotRelative = isNotRelative;
checkPath.convert = (p) => p;
class Ignore {
  constructor({
    ignorecase = true,
    ignoreCase = ignorecase,
    allowRelativePaths = false
  } = {}) {
    define(this, KEY_IGNORE, true);
    this._rules = [];
    this._ignoreCase = ignoreCase;
    this._allowRelativePaths = allowRelativePaths;
    this._initCache();
  }
  _initCache() {
    this._ignoreCache = /* @__PURE__ */ Object.create(null);
    this._testCache = /* @__PURE__ */ Object.create(null);
  }
  _addPattern(pattern2) {
    if (pattern2 && pattern2[KEY_IGNORE]) {
      this._rules = this._rules.concat(pattern2._rules);
      this._added = true;
      return;
    }
    if (checkPattern(pattern2)) {
      const rule = createRule(pattern2, this._ignoreCase);
      this._added = true;
      this._rules.push(rule);
    }
  }
  // @param {Array<string> | string | Ignore} pattern
  add(pattern2) {
    this._added = false;
    makeArray(
      isString(pattern2) ? splitPattern(pattern2) : pattern2
    ).forEach(this._addPattern, this);
    if (this._added) {
      this._initCache();
    }
    return this;
  }
  // legacy
  addPattern(pattern2) {
    return this.add(pattern2);
  }
  //          |           ignored : unignored
  // negative |   0:0   |   0:1   |   1:0   |   1:1
  // -------- | ------- | ------- | ------- | --------
  //     0    |  TEST   |  TEST   |  SKIP   |    X
  //     1    |  TESTIF |  SKIP   |  TEST   |    X
  // - SKIP: always skip
  // - TEST: always test
  // - TESTIF: only test if checkUnignored
  // - X: that never happen
  // @param {boolean} whether should check if the path is unignored,
  //   setting `checkUnignored` to `false` could reduce additional
  //   path matching.
  // @returns {TestResult} true if a file is ignored
  _testOne(path2, checkUnignored) {
    let ignored = false;
    let unignored = false;
    this._rules.forEach((rule) => {
      const { negative } = rule;
      if (unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored) {
        return;
      }
      const matched = rule.regex.test(path2);
      if (matched) {
        ignored = !negative;
        unignored = negative;
      }
    });
    return {
      ignored,
      unignored
    };
  }
  // @returns {TestResult}
  _test(originalPath, cache, checkUnignored, slices) {
    const path2 = originalPath && checkPath.convert(originalPath);
    checkPath(
      path2,
      originalPath,
      this._allowRelativePaths ? RETURN_FALSE : throwError
    );
    return this._t(path2, cache, checkUnignored, slices);
  }
  _t(path2, cache, checkUnignored, slices) {
    if (path2 in cache) {
      return cache[path2];
    }
    if (!slices) {
      slices = path2.split(SLASH);
    }
    slices.pop();
    if (!slices.length) {
      return cache[path2] = this._testOne(path2, checkUnignored);
    }
    const parent = this._t(
      slices.join(SLASH) + SLASH,
      cache,
      checkUnignored,
      slices
    );
    return cache[path2] = parent.ignored ? parent : this._testOne(path2, checkUnignored);
  }
  ignores(path2) {
    return this._test(path2, this._ignoreCache, false).ignored;
  }
  createFilter() {
    return (path2) => !this.ignores(path2);
  }
  filter(paths) {
    return makeArray(paths).filter(this.createFilter());
  }
  // @returns {TestResult}
  test(path2) {
    return this._test(path2, this._testCache, true);
  }
}
const factory = (options) => new Ignore(options);
const isPathValid = (path2) => checkPath(path2 && checkPath.convert(path2), path2, RETURN_FALSE);
factory.isPathValid = isPathValid;
factory.default = factory;
var ignore = factory;
if (
  // Detect `process` so that it can run in browsers.
  typeof process !== "undefined" && (process.env && process.env.IGNORE_TEST_WIN32 || process.platform === "win32")
) {
  const makePosix = (str2) => /^\\\\\?\\/.test(str2) || /["<>|\u0000-\u001F]+/u.test(str2) ? str2 : str2.replace(/\\/g, "/");
  checkPath.convert = makePosix;
  const REGIX_IS_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;
  checkPath.isNotRelative = (path2) => REGIX_IS_WINDOWS_PATH_ABSOLUTE.test(path2) || isNotRelative(path2);
}
const gitIgnore = /* @__PURE__ */ getDefaultExportFromCjs(ignore);
function slash(path2) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path2);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(path2);
  if (isExtendedLengthPath || hasNonAscii) {
    return path2;
  }
  return path2.replace(/\\/g, "/");
}
const toPath = (urlOrPath) => urlOrPath instanceof URL ? fileURLToPath(urlOrPath) : urlOrPath;
const isNegativePattern = (pattern2) => pattern2[0] === "!";
const ignoreFilesGlobOptions = {
  ignore: [
    "**/node_modules",
    "**/flow-typed",
    "**/coverage",
    "**/.git"
  ],
  absolute: true,
  dot: true
};
const GITIGNORE_FILES_PATTERN = "**/.gitignore";
const applyBaseToPattern = (pattern2, base) => isNegativePattern(pattern2) ? "!" + path$d.posix.join(base, pattern2.slice(1)) : path$d.posix.join(base, pattern2);
const parseIgnoreFile = (file, cwd) => {
  const base = slash(path$d.relative(cwd, path$d.dirname(file.filePath)));
  return file.content.split(/\r?\n/).filter((line) => line && !line.startsWith("#")).map((pattern2) => applyBaseToPattern(pattern2, base));
};
const toRelativePath = (fileOrDirectory, cwd) => {
  cwd = slash(cwd);
  if (path$d.isAbsolute(fileOrDirectory)) {
    if (slash(fileOrDirectory).startsWith(cwd)) {
      return path$d.relative(cwd, fileOrDirectory);
    }
    throw new Error(`Path ${fileOrDirectory} is not in cwd ${cwd}`);
  }
  return fileOrDirectory;
};
const getIsIgnoredPredicate = (files, cwd) => {
  const patterns = files.flatMap((file) => parseIgnoreFile(file, cwd));
  const ignores = gitIgnore().add(patterns);
  return (fileOrDirectory) => {
    fileOrDirectory = toPath(fileOrDirectory);
    fileOrDirectory = toRelativePath(fileOrDirectory, cwd);
    return fileOrDirectory ? ignores.ignores(slash(fileOrDirectory)) : false;
  };
};
const normalizeOptions$1 = (options = {}) => ({
  cwd: toPath(options.cwd) || process$2.cwd(),
  suppressErrors: Boolean(options.suppressErrors),
  deep: typeof options.deep === "number" ? options.deep : Number.POSITIVE_INFINITY
});
const isIgnoredByIgnoreFiles = async (patterns, options) => {
  const { cwd, suppressErrors, deep: deep2 } = normalizeOptions$1(options);
  const paths = await fastGlob(patterns, { cwd, suppressErrors, deep: deep2, ...ignoreFilesGlobOptions });
  const files = await Promise.all(
    paths.map(async (filePath) => ({
      filePath,
      content: await fs$a.promises.readFile(filePath, "utf8")
    }))
  );
  return getIsIgnoredPredicate(files, cwd);
};
const assertPatternsInput = (patterns) => {
  if (patterns.some((pattern2) => typeof pattern2 !== "string")) {
    throw new TypeError("Patterns must be a string or an array of strings");
  }
};
const toPatternsArray = (patterns) => {
  patterns = [...new Set([patterns].flat())];
  assertPatternsInput(patterns);
  return patterns;
};
const checkCwdOption = (options) => {
  if (!options.cwd) {
    return;
  }
  let stat2;
  try {
    stat2 = fs$a.statSync(options.cwd);
  } catch {
    return;
  }
  if (!stat2.isDirectory()) {
    throw new Error("The `cwd` option must be a path to a directory");
  }
};
const normalizeOptions = (options = {}) => {
  options = {
    ...options,
    ignore: options.ignore || [],
    expandDirectories: options.expandDirectories === void 0 ? true : options.expandDirectories,
    cwd: toPath(options.cwd)
  };
  checkCwdOption(options);
  return options;
};
const normalizeArguments = (fn) => async (patterns, options) => fn(toPatternsArray(patterns), normalizeOptions(options));
const getIgnoreFilesPatterns = (options) => {
  const { ignoreFiles, gitignore } = options;
  const patterns = ignoreFiles ? toPatternsArray(ignoreFiles) : [];
  if (gitignore) {
    patterns.push(GITIGNORE_FILES_PATTERN);
  }
  return patterns;
};
const getFilter = async (options) => {
  const ignoreFilesPatterns = getIgnoreFilesPatterns(options);
  return createFilterFunction(
    ignoreFilesPatterns.length > 0 && await isIgnoredByIgnoreFiles(ignoreFilesPatterns, options)
  );
};
const createFilterFunction = (isIgnored) => {
  const seen = /* @__PURE__ */ new Set();
  return (fastGlobResult) => {
    const path2 = fastGlobResult.path || fastGlobResult;
    const pathKey = path$d.normalize(path2);
    const seenOrIgnored = seen.has(pathKey) || isIgnored && isIgnored(path2);
    seen.add(pathKey);
    return !seenOrIgnored;
  };
};
const unionFastGlobResults = (results, filter) => results.flat().filter((fastGlobResult) => filter(fastGlobResult));
const convertNegativePatterns = (patterns, options) => {
  const tasks2 = [];
  while (patterns.length > 0) {
    const index = patterns.findIndex((pattern2) => isNegativePattern(pattern2));
    if (index === -1) {
      tasks2.push({ patterns, options });
      break;
    }
    const ignorePattern = patterns[index].slice(1);
    for (const task of tasks2) {
      task.options.ignore.push(ignorePattern);
    }
    if (index !== 0) {
      tasks2.push({
        patterns: patterns.slice(0, index),
        options: {
          ...options,
          ignore: [
            ...options.ignore,
            ignorePattern
          ]
        }
      });
    }
    patterns = patterns.slice(index + 1);
  }
  return tasks2;
};
const getDirGlobOptions = (options, cwd) => ({
  ...cwd ? { cwd } : {},
  ...Array.isArray(options) ? { files: options } : options
});
const generateTasks = async (patterns, options) => {
  const globTasks = convertNegativePatterns(patterns, options);
  const { cwd, expandDirectories } = options;
  if (!expandDirectories) {
    return globTasks;
  }
  const patternExpandOptions = getDirGlobOptions(expandDirectories, cwd);
  const ignoreExpandOptions = cwd ? { cwd } : void 0;
  return Promise.all(
    globTasks.map(async (task) => {
      let { patterns: patterns2, options: options2 } = task;
      [
        patterns2,
        options2.ignore
      ] = await Promise.all([
        dirGlob(patterns2, patternExpandOptions),
        dirGlob(options2.ignore, ignoreExpandOptions)
      ]);
      return { patterns: patterns2, options: options2 };
    })
  );
};
const globby = normalizeArguments(async (patterns, options) => {
  const [
    tasks2,
    filter
  ] = await Promise.all([
    generateTasks(patterns, options),
    getFilter(options)
  ]);
  const results = await Promise.all(tasks2.map((task) => fastGlob(task.patterns, task.options)));
  return unionFastGlobResults(results, filter);
});
var re$2 = { exports: {} };
const SEMVER_SPEC_VERSION = "2.0.0";
const MAX_LENGTH$1 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991;
const MAX_SAFE_COMPONENT_LENGTH = 16;
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;
const RELEASE_TYPES = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var constants$1 = {
  MAX_LENGTH: MAX_LENGTH$1,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const debug$1 = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
};
var debug_1 = debug$1;
(function(module, exports) {
  const { MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2, MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH2 } = constants$1;
  const debug2 = debug_1;
  exports = module.exports = {};
  const re2 = exports.re = [];
  const safeRe = exports.safeRe = [];
  const src = exports.src = [];
  const t2 = exports.t = {};
  let R = 0;
  const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
  const safeRegexReplacements = [
    ["\\s", 1],
    ["\\d", MAX_SAFE_COMPONENT_LENGTH2],
    [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH2]
  ];
  const makeSafeRegex = (value) => {
    for (const [token, max2] of safeRegexReplacements) {
      value = value.split(`${token}*`).join(`${token}{0,${max2}}`).split(`${token}+`).join(`${token}{1,${max2}}`);
    }
    return value;
  };
  const createToken = (name, value, isGlobal) => {
    const safe = makeSafeRegex(value);
    const index = R++;
    debug2(name, index, value);
    t2[name] = index;
    src[index] = value;
    re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
    safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
  };
  createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
  createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
  createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
  createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
  createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NUMERICIDENTIFIER]}|${src[t2.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NUMERICIDENTIFIERLOOSE]}|${src[t2.NONNUMERICIDENTIFIER]})`);
  createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
  createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
  createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
  createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
  createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
  createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
  createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
  createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
  createToken("GTLT", "((?:<|>)?=?)");
  createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
  createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
  createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
  createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
  createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:$|[^\\d])`);
  createToken("COERCERTL", src[t2.COERCE], true);
  createToken("LONETILDE", "(?:~>?)");
  createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
  exports.tildeTrimReplace = "$1~";
  createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
  createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("LONECARET", "(?:\\^)");
  createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
  exports.caretTrimReplace = "$1^";
  createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
  createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
  createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
  createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
  exports.comparatorTrimReplace = "$1$2$3";
  createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
  createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
  createToken("STAR", "(<|>)?=?\\s*\\*");
  createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(re$2, re$2.exports);
var reExports = re$2.exports;
const looseOption = Object.freeze({ loose: true });
const emptyOpts = Object.freeze({});
const parseOptions$1 = (options) => {
  if (!options) {
    return emptyOpts;
  }
  if (typeof options !== "object") {
    return looseOption;
  }
  return options;
};
var parseOptions_1 = parseOptions$1;
const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);
  if (anum && bnum) {
    a = +a;
    b = +b;
  }
  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);
var identifiers$1 = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers
};
const debug = debug_1;
const { MAX_LENGTH, MAX_SAFE_INTEGER } = constants$1;
const { safeRe: re$1, t: t$1 } = reExports;
const parseOptions = parseOptions_1;
const { compareIdentifiers } = identifiers$1;
let SemVer$d = class SemVer {
  constructor(version2, options) {
    options = parseOptions(options);
    if (version2 instanceof SemVer) {
      if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
        return version2;
      } else {
        version2 = version2.version;
      }
    } else if (typeof version2 !== "string") {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
    }
    if (version2.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      );
    }
    debug("SemVer", version2, options);
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    const m = version2.trim().match(options.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL]);
    if (!m) {
      throw new TypeError(`Invalid Version: ${version2}`);
    }
    this.raw = version2;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split(".").map((id2) => {
        if (/^[0-9]+$/.test(id2)) {
          const num = +id2;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id2;
      });
    }
    this.build = m[5] ? m[5].split(".") : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join(".")}`;
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === "string" && other === this.version) {
        return 0;
      }
      other = new SemVer(other, this.options);
    }
    if (other.version === this.version) {
      return 0;
    }
    return this.compareMain(other) || this.comparePre(other);
  }
  compareMain(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }
  comparePre(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  compareBuild(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(release, identifier, identifierBase) {
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier, identifierBase);
        this.inc("pre", identifier, identifierBase);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier, identifierBase);
        }
        this.inc("pre", identifier, identifierBase);
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre": {
        const base = Number(identifierBase) ? 1 : 0;
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === "number") {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            if (identifier === this.prerelease.join(".") && identifierBase === false) {
              throw new Error("invalid increment argument: identifier already exists");
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          let prerelease2 = [identifier, base];
          if (identifierBase === false) {
            prerelease2 = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease2;
            }
          } else {
            this.prerelease = prerelease2;
          }
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${release}`);
    }
    this.raw = this.format();
    if (this.build.length) {
      this.raw += `+${this.build.join(".")}`;
    }
    return this;
  }
};
var semver = SemVer$d;
const SemVer$c = semver;
const parse$6 = (version2, options, throwErrors = false) => {
  if (version2 instanceof SemVer$c) {
    return version2;
  }
  try {
    return new SemVer$c(version2, options);
  } catch (er) {
    if (!throwErrors) {
      return null;
    }
    throw er;
  }
};
var parse_1 = parse$6;
const parse$5 = parse_1;
const valid$2 = (version2, options) => {
  const v = parse$5(version2, options);
  return v ? v.version : null;
};
var valid_1 = valid$2;
const parse$4 = parse_1;
const clean$1 = (version2, options) => {
  const s = parse$4(version2.trim().replace(/^[=v]+/, ""), options);
  return s ? s.version : null;
};
var clean_1 = clean$1;
const SemVer$b = semver;
const inc$1 = (version2, release, options, identifier, identifierBase) => {
  if (typeof options === "string") {
    identifierBase = identifier;
    identifier = options;
    options = void 0;
  }
  try {
    return new SemVer$b(
      version2 instanceof SemVer$b ? version2.version : version2,
      options
    ).inc(release, identifier, identifierBase).version;
  } catch (er) {
    return null;
  }
};
var inc_1 = inc$1;
const parse$3 = parse_1;
const diff$1 = (version1, version2) => {
  const v12 = parse$3(version1, null, true);
  const v2 = parse$3(version2, null, true);
  const comparison = v12.compare(v2);
  if (comparison === 0) {
    return null;
  }
  const v1Higher = comparison > 0;
  const highVersion = v1Higher ? v12 : v2;
  const lowVersion = v1Higher ? v2 : v12;
  const highHasPre = !!highVersion.prerelease.length;
  const lowHasPre = !!lowVersion.prerelease.length;
  if (lowHasPre && !highHasPre) {
    if (!lowVersion.patch && !lowVersion.minor) {
      return "major";
    }
    if (highVersion.patch) {
      return "patch";
    }
    if (highVersion.minor) {
      return "minor";
    }
    return "major";
  }
  const prefix = highHasPre ? "pre" : "";
  if (v12.major !== v2.major) {
    return prefix + "major";
  }
  if (v12.minor !== v2.minor) {
    return prefix + "minor";
  }
  if (v12.patch !== v2.patch) {
    return prefix + "patch";
  }
  return "prerelease";
};
var diff_1 = diff$1;
const SemVer$a = semver;
const major$1 = (a, loose) => new SemVer$a(a, loose).major;
var major_1 = major$1;
const SemVer$9 = semver;
const minor$1 = (a, loose) => new SemVer$9(a, loose).minor;
var minor_1 = minor$1;
const SemVer$8 = semver;
const patch$1 = (a, loose) => new SemVer$8(a, loose).patch;
var patch_1 = patch$1;
const parse$2 = parse_1;
const prerelease$1 = (version2, options) => {
  const parsed = parse$2(version2, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
var prerelease_1 = prerelease$1;
const SemVer$7 = semver;
const compare$b = (a, b, loose) => new SemVer$7(a, loose).compare(new SemVer$7(b, loose));
var compare_1 = compare$b;
const compare$a = compare_1;
const rcompare$1 = (a, b, loose) => compare$a(b, a, loose);
var rcompare_1 = rcompare$1;
const compare$9 = compare_1;
const compareLoose$1 = (a, b) => compare$9(a, b, true);
var compareLoose_1 = compareLoose$1;
const SemVer$6 = semver;
const compareBuild$3 = (a, b, loose) => {
  const versionA = new SemVer$6(a, loose);
  const versionB = new SemVer$6(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
var compareBuild_1 = compareBuild$3;
const compareBuild$2 = compareBuild_1;
const sort$1 = (list, loose) => list.sort((a, b) => compareBuild$2(a, b, loose));
var sort_1 = sort$1;
const compareBuild$1 = compareBuild_1;
const rsort$1 = (list, loose) => list.sort((a, b) => compareBuild$1(b, a, loose));
var rsort_1 = rsort$1;
const compare$8 = compare_1;
const gt$4 = (a, b, loose) => compare$8(a, b, loose) > 0;
var gt_1 = gt$4;
const compare$7 = compare_1;
const lt$3 = (a, b, loose) => compare$7(a, b, loose) < 0;
var lt_1 = lt$3;
const compare$6 = compare_1;
const eq$2 = (a, b, loose) => compare$6(a, b, loose) === 0;
var eq_1 = eq$2;
const compare$5 = compare_1;
const neq$2 = (a, b, loose) => compare$5(a, b, loose) !== 0;
var neq_1 = neq$2;
const compare$4 = compare_1;
const gte$3 = (a, b, loose) => compare$4(a, b, loose) >= 0;
var gte_1 = gte$3;
const compare$3 = compare_1;
const lte$3 = (a, b, loose) => compare$3(a, b, loose) <= 0;
var lte_1 = lte$3;
const eq$1 = eq_1;
const neq$1 = neq_1;
const gt$3 = gt_1;
const gte$2 = gte_1;
const lt$2 = lt_1;
const lte$2 = lte_1;
const cmp$1 = (a, op, b, loose) => {
  switch (op) {
    case "===":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a === b;
    case "!==":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a !== b;
    case "":
    case "=":
    case "==":
      return eq$1(a, b, loose);
    case "!=":
      return neq$1(a, b, loose);
    case ">":
      return gt$3(a, b, loose);
    case ">=":
      return gte$2(a, b, loose);
    case "<":
      return lt$2(a, b, loose);
    case "<=":
      return lte$2(a, b, loose);
    default:
      throw new TypeError(`Invalid operator: ${op}`);
  }
};
var cmp_1 = cmp$1;
const SemVer$5 = semver;
const parse$1 = parse_1;
const { safeRe: re, t } = reExports;
const coerce$1 = (version2, options) => {
  if (version2 instanceof SemVer$5) {
    return version2;
  }
  if (typeof version2 === "number") {
    version2 = String(version2);
  }
  if (typeof version2 !== "string") {
    return null;
  }
  options = options || {};
  let match2 = null;
  if (!options.rtl) {
    match2 = version2.match(re[t.COERCE]);
  } else {
    let next;
    while ((next = re[t.COERCERTL].exec(version2)) && (!match2 || match2.index + match2[0].length !== version2.length)) {
      if (!match2 || next.index + next[0].length !== match2.index + match2[0].length) {
        match2 = next;
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    }
    re[t.COERCERTL].lastIndex = -1;
  }
  if (match2 === null) {
    return null;
  }
  return parse$1(`${match2[2]}.${match2[3] || "0"}.${match2[4] || "0"}`, options);
};
var coerce_1 = coerce$1;
var iterator;
var hasRequiredIterator;
function requireIterator() {
  if (hasRequiredIterator)
    return iterator;
  hasRequiredIterator = 1;
  iterator = function(Yallist2) {
    Yallist2.prototype[Symbol.iterator] = function* () {
      for (let walker = this.head; walker; walker = walker.next) {
        yield walker.value;
      }
    };
  };
  return iterator;
}
var yallist = Yallist$1;
Yallist$1.Node = Node;
Yallist$1.create = Yallist$1;
function Yallist$1(list) {
  var self2 = this;
  if (!(self2 instanceof Yallist$1)) {
    self2 = new Yallist$1();
  }
  self2.tail = null;
  self2.head = null;
  self2.length = 0;
  if (list && typeof list.forEach === "function") {
    list.forEach(function(item) {
      self2.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self2.push(arguments[i]);
    }
  }
  return self2;
}
Yallist$1.prototype.removeNode = function(node) {
  if (node.list !== this) {
    throw new Error("removing node which does not belong to this list");
  }
  var next = node.next;
  var prev = node.prev;
  if (next) {
    next.prev = prev;
  }
  if (prev) {
    prev.next = next;
  }
  if (node === this.head) {
    this.head = next;
  }
  if (node === this.tail) {
    this.tail = prev;
  }
  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;
  return next;
};
Yallist$1.prototype.unshiftNode = function(node) {
  if (node === this.head) {
    return;
  }
  if (node.list) {
    node.list.removeNode(node);
  }
  var head = this.head;
  node.list = this;
  node.next = head;
  if (head) {
    head.prev = node;
  }
  this.head = node;
  if (!this.tail) {
    this.tail = node;
  }
  this.length++;
};
Yallist$1.prototype.pushNode = function(node) {
  if (node === this.tail) {
    return;
  }
  if (node.list) {
    node.list.removeNode(node);
  }
  var tail = this.tail;
  node.list = this;
  node.prev = tail;
  if (tail) {
    tail.next = node;
  }
  this.tail = node;
  if (!this.head) {
    this.head = node;
  }
  this.length++;
};
Yallist$1.prototype.push = function() {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i]);
  }
  return this.length;
};
Yallist$1.prototype.unshift = function() {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i]);
  }
  return this.length;
};
Yallist$1.prototype.pop = function() {
  if (!this.tail) {
    return void 0;
  }
  var res = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  this.length--;
  return res;
};
Yallist$1.prototype.shift = function() {
  if (!this.head) {
    return void 0;
  }
  var res = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  this.length--;
  return res;
};
Yallist$1.prototype.forEach = function(fn, thisp) {
  thisp = thisp || this;
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};
Yallist$1.prototype.forEachReverse = function(fn, thisp) {
  thisp = thisp || this;
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};
Yallist$1.prototype.get = function(n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    walker = walker.next;
  }
  if (i === n && walker !== null) {
    return walker.value;
  }
};
Yallist$1.prototype.getReverse = function(n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    walker = walker.prev;
  }
  if (i === n && walker !== null) {
    return walker.value;
  }
};
Yallist$1.prototype.map = function(fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist$1();
  for (var walker = this.head; walker !== null; ) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }
  return res;
};
Yallist$1.prototype.mapReverse = function(fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist$1();
  for (var walker = this.tail; walker !== null; ) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }
  return res;
};
Yallist$1.prototype.reduce = function(fn, initial) {
  var acc;
  var walker = this.head;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError("Reduce of empty list with no initial value");
  }
  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }
  return acc;
};
Yallist$1.prototype.reduceReverse = function(fn, initial) {
  var acc;
  var walker = this.tail;
  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError("Reduce of empty list with no initial value");
  }
  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }
  return acc;
};
Yallist$1.prototype.toArray = function() {
  var arr = new Array(this.length);
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }
  return arr;
};
Yallist$1.prototype.toArrayReverse = function() {
  var arr = new Array(this.length);
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }
  return arr;
};
Yallist$1.prototype.slice = function(from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist$1();
  if (to < from || to < 0) {
    return ret;
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }
  return ret;
};
Yallist$1.prototype.sliceReverse = function(from, to) {
  to = to || this.length;
  if (to < 0) {
    to += this.length;
  }
  from = from || 0;
  if (from < 0) {
    from += this.length;
  }
  var ret = new Yallist$1();
  if (to < from || to < 0) {
    return ret;
  }
  if (from < 0) {
    from = 0;
  }
  if (to > this.length) {
    to = this.length;
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }
  return ret;
};
Yallist$1.prototype.splice = function(start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1;
  }
  if (start < 0) {
    start = this.length + start;
  }
  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next;
  }
  var ret = [];
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }
  if (walker === null) {
    walker = this.tail;
  }
  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }
  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i]);
  }
  return ret;
};
Yallist$1.prototype.reverse = function() {
  var head = this.head;
  var tail = this.tail;
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }
  this.head = tail;
  this.tail = head;
  return this;
};
function insert(self2, node, value) {
  var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2);
  if (inserted.next === null) {
    self2.tail = inserted;
  }
  if (inserted.prev === null) {
    self2.head = inserted;
  }
  self2.length++;
  return inserted;
}
function push(self2, item) {
  self2.tail = new Node(item, self2.tail, null, self2);
  if (!self2.head) {
    self2.head = self2.tail;
  }
  self2.length++;
}
function unshift(self2, item) {
  self2.head = new Node(item, null, self2.head, self2);
  if (!self2.tail) {
    self2.tail = self2.head;
  }
  self2.length++;
}
function Node(value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list);
  }
  this.list = list;
  this.value = value;
  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }
  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}
try {
  requireIterator()(Yallist$1);
} catch (er) {
}
const Yallist = yallist;
const MAX = Symbol("max");
const LENGTH = Symbol("length");
const LENGTH_CALCULATOR = Symbol("lengthCalculator");
const ALLOW_STALE = Symbol("allowStale");
const MAX_AGE = Symbol("maxAge");
const DISPOSE = Symbol("dispose");
const NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
const LRU_LIST = Symbol("lruList");
const CACHE = Symbol("cache");
const UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
const naiveLength = () => 1;
class LRUCache {
  constructor(options) {
    if (typeof options === "number")
      options = { max: options };
    if (!options)
      options = {};
    if (options.max && (typeof options.max !== "number" || options.max < 0))
      throw new TypeError("max must be a non-negative number");
    this[MAX] = options.max || Infinity;
    const lc = options.length || naiveLength;
    this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
    this[ALLOW_STALE] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== "number")
      throw new TypeError("maxAge must be a number");
    this[MAX_AGE] = options.maxAge || 0;
    this[DISPOSE] = options.dispose;
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
    this.reset();
  }
  // resize the cache when the max changes.
  set max(mL) {
    if (typeof mL !== "number" || mL < 0)
      throw new TypeError("max must be a non-negative number");
    this[MAX] = mL || Infinity;
    trim(this);
  }
  get max() {
    return this[MAX];
  }
  set allowStale(allowStale) {
    this[ALLOW_STALE] = !!allowStale;
  }
  get allowStale() {
    return this[ALLOW_STALE];
  }
  set maxAge(mA) {
    if (typeof mA !== "number")
      throw new TypeError("maxAge must be a non-negative number");
    this[MAX_AGE] = mA;
    trim(this);
  }
  get maxAge() {
    return this[MAX_AGE];
  }
  // resize the cache when the lengthCalculator changes.
  set lengthCalculator(lC) {
    if (typeof lC !== "function")
      lC = naiveLength;
    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC;
      this[LENGTH] = 0;
      this[LRU_LIST].forEach((hit) => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
        this[LENGTH] += hit.length;
      });
    }
    trim(this);
  }
  get lengthCalculator() {
    return this[LENGTH_CALCULATOR];
  }
  get length() {
    return this[LENGTH];
  }
  get itemCount() {
    return this[LRU_LIST].length;
  }
  rforEach(fn, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].tail; walker !== null; ) {
      const prev = walker.prev;
      forEachStep(this, fn, walker, thisp);
      walker = prev;
    }
  }
  forEach(fn, thisp) {
    thisp = thisp || this;
    for (let walker = this[LRU_LIST].head; walker !== null; ) {
      const next = walker.next;
      forEachStep(this, fn, walker, thisp);
      walker = next;
    }
  }
  keys() {
    return this[LRU_LIST].toArray().map((k) => k.key);
  }
  values() {
    return this[LRU_LIST].toArray().map((k) => k.value);
  }
  reset() {
    if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
      this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
    }
    this[CACHE] = /* @__PURE__ */ new Map();
    this[LRU_LIST] = new Yallist();
    this[LENGTH] = 0;
  }
  dump() {
    return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
      k: hit.key,
      v: hit.value,
      e: hit.now + (hit.maxAge || 0)
    }).toArray().filter((h) => h);
  }
  dumpLru() {
    return this[LRU_LIST];
  }
  set(key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE];
    if (maxAge && typeof maxAge !== "number")
      throw new TypeError("maxAge must be a number");
    const now = maxAge ? Date.now() : 0;
    const len = this[LENGTH_CALCULATOR](value, key);
    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key));
        return false;
      }
      const node = this[CACHE].get(key);
      const item = node.value;
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value);
      }
      item.now = now;
      item.maxAge = maxAge;
      item.value = value;
      this[LENGTH] += len - item.length;
      item.length = len;
      this.get(key);
      trim(this);
      return true;
    }
    const hit = new Entry(key, value, len, now, maxAge);
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value);
      return false;
    }
    this[LENGTH] += hit.length;
    this[LRU_LIST].unshift(hit);
    this[CACHE].set(key, this[LRU_LIST].head);
    trim(this);
    return true;
  }
  has(key) {
    if (!this[CACHE].has(key))
      return false;
    const hit = this[CACHE].get(key).value;
    return !isStale(this, hit);
  }
  get(key) {
    return get(this, key, true);
  }
  peek(key) {
    return get(this, key, false);
  }
  pop() {
    const node = this[LRU_LIST].tail;
    if (!node)
      return null;
    del(this, node);
    return node.value;
  }
  del(key) {
    del(this, this[CACHE].get(key));
  }
  load(arr) {
    this.reset();
    const now = Date.now();
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l];
      const expiresAt = hit.e || 0;
      if (expiresAt === 0)
        this.set(hit.k, hit.v);
      else {
        const maxAge = expiresAt - now;
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge);
        }
      }
    }
  }
  prune() {
    this[CACHE].forEach((value, key) => get(this, key, false));
  }
}
const get = (self2, key, doUse) => {
  const node = self2[CACHE].get(key);
  if (node) {
    const hit = node.value;
    if (isStale(self2, hit)) {
      del(self2, node);
      if (!self2[ALLOW_STALE])
        return void 0;
    } else {
      if (doUse) {
        if (self2[UPDATE_AGE_ON_GET])
          node.value.now = Date.now();
        self2[LRU_LIST].unshiftNode(node);
      }
    }
    return hit.value;
  }
};
const isStale = (self2, hit) => {
  if (!hit || !hit.maxAge && !self2[MAX_AGE])
    return false;
  const diff2 = Date.now() - hit.now;
  return hit.maxAge ? diff2 > hit.maxAge : self2[MAX_AGE] && diff2 > self2[MAX_AGE];
};
const trim = (self2) => {
  if (self2[LENGTH] > self2[MAX]) {
    for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
      const prev = walker.prev;
      del(self2, walker);
      walker = prev;
    }
  }
};
const del = (self2, node) => {
  if (node) {
    const hit = node.value;
    if (self2[DISPOSE])
      self2[DISPOSE](hit.key, hit.value);
    self2[LENGTH] -= hit.length;
    self2[CACHE].delete(hit.key);
    self2[LRU_LIST].removeNode(node);
  }
};
class Entry {
  constructor(key, value, length, now, maxAge) {
    this.key = key;
    this.value = value;
    this.length = length;
    this.now = now;
    this.maxAge = maxAge || 0;
  }
}
const forEachStep = (self2, fn, node, thisp) => {
  let hit = node.value;
  if (isStale(self2, hit)) {
    del(self2, node);
    if (!self2[ALLOW_STALE])
      hit = void 0;
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self2);
};
var lruCache = LRUCache;
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange)
    return range;
  hasRequiredRange = 1;
  class Range2 {
    constructor(range2, options) {
      options = parseOptions2(options);
      if (range2 instanceof Range2) {
        if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
          return range2;
        } else {
          return new Range2(range2.raw, options);
        }
      }
      if (range2 instanceof Comparator2) {
        this.raw = range2.value;
        this.set = [[range2]];
        this.format();
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range2.trim().split(/\s+/).join(" ");
      this.set = this.raw.split("||").map((r) => this.parseRange(r)).filter((c) => c.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter((c) => !isNullSet(c[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c of this.set) {
            if (c.length === 1 && isAny(c[0])) {
              this.set = [c];
              break;
            }
          }
        }
      }
      this.format();
    }
    format() {
      this.range = this.set.map((comps) => comps.join(" ").trim()).join("||").trim();
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range2) {
      const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
      const memoKey = memoOpts + ":" + range2;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re2[t2.HYPHENRANGELOOSE] : re2[t2.HYPHENRANGE];
      range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug2("hyphen replace", range2);
      range2 = range2.replace(re2[t2.COMPARATORTRIM], comparatorTrimReplace);
      debug2("comparator trim", range2);
      range2 = range2.replace(re2[t2.TILDETRIM], tildeTrimReplace);
      debug2("tilde trim", range2);
      range2 = range2.replace(re2[t2.CARETTRIM], caretTrimReplace);
      debug2("caret trim", range2);
      let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter((comp) => {
          debug2("loose invalid filter", comp, this.options);
          return !!comp.match(re2[t2.COMPARATORLOOSE]);
        });
      }
      debug2("range list", rangeList);
      const rangeMap = /* @__PURE__ */ new Map();
      const comparators = rangeList.map((comp) => new Comparator2(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has("")) {
        rangeMap.delete("");
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range2, options) {
      if (!(range2 instanceof Range2)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((thisComparators) => {
        return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
            return rangeComparators.every((rangeComparator) => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version2) {
      if (!version2) {
        return false;
      }
      if (typeof version2 === "string") {
        try {
          version2 = new SemVer3(version2, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version2, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range2;
  const LRU = lruCache;
  const cache = new LRU({ max: 1e3 });
  const parseOptions2 = parseOptions_1;
  const Comparator2 = requireComparator();
  const debug2 = debug_1;
  const SemVer3 = semver;
  const {
    safeRe: re2,
    t: t2,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = reExports;
  const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = constants$1;
  const isNullSet = (c) => c.value === "<0.0.0-0";
  const isAny = (c) => c.value === "";
  const isSatisfiable = (comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every((otherComparator) => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  };
  const parseComparator = (comp, options) => {
    debug2("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug2("caret", comp);
    comp = replaceTildes(comp, options);
    debug2("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug2("xrange", comp);
    comp = replaceStars(comp, options);
    debug2("stars", comp);
    return comp;
  };
  const isX = (id2) => !id2 || id2.toLowerCase() === "x" || id2 === "*";
  const replaceTildes = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
  };
  const replaceTilde = (comp, options) => {
    const r = options.loose ? re2[t2.TILDELOOSE] : re2[t2.TILDE];
    return comp.replace(r, (_, M, m, p, pr) => {
      debug2("tilde", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
      } else if (pr) {
        debug2("replaceTilde pr", pr);
        ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
      }
      debug2("tilde return", ret);
      return ret;
    });
  };
  const replaceCarets = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
  };
  const replaceCaret = (comp, options) => {
    debug2("caret", comp, options);
    const r = options.loose ? re2[t2.CARETLOOSE] : re2[t2.CARET];
    const z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_, M, m, p, pr) => {
      debug2("caret", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        if (M === "0") {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
        }
      } else if (pr) {
        debug2("replaceCaret pr", pr);
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
        }
      } else {
        debug2("no pr");
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
        }
      }
      debug2("caret return", ret);
      return ret;
    });
  };
  const replaceXRanges = (comp, options) => {
    debug2("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
  };
  const replaceXRange = (comp, options) => {
    comp = comp.trim();
    const r = options.loose ? re2[t2.XRANGELOOSE] : re2[t2.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
      debug2("xRange", comp, ret, gtlt, M, m, p, pr);
      const xM = isX(M);
      const xm = xM || isX(m);
      const xp = xm || isX(p);
      const anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      pr = options.includePrerelease ? "-0" : "";
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0-0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        if (gtlt === "<") {
          pr = "-0";
        }
        ret = `${gtlt + M}.${m}.${p}${pr}`;
      } else if (xm) {
        ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
      }
      debug2("xRange return", ret);
      return ret;
    });
  };
  const replaceStars = (comp, options) => {
    debug2("replaceStars", comp, options);
    return comp.trim().replace(re2[t2.STAR], "");
  };
  const replaceGTE0 = (comp, options) => {
    debug2("replaceGTE0", comp, options);
    return comp.trim().replace(re2[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], "");
  };
  const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? "-0" : ""}`;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  };
  const testSet = (set2, version2, options) => {
    for (let i = 0; i < set2.length; i++) {
      if (!set2[i].test(version2)) {
        return false;
      }
    }
    if (version2.prerelease.length && !options.includePrerelease) {
      for (let i = 0; i < set2.length; i++) {
        debug2(set2[i].semver);
        if (set2[i].semver === Comparator2.ANY) {
          continue;
        }
        if (set2[i].semver.prerelease.length > 0) {
          const allowed = set2[i].semver;
          if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  return range;
}
var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator)
    return comparator;
  hasRequiredComparator = 1;
  const ANY2 = Symbol("SemVer ANY");
  class Comparator2 {
    static get ANY() {
      return ANY2;
    }
    constructor(comp, options) {
      options = parseOptions2(options);
      if (comp instanceof Comparator2) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      comp = comp.trim().split(/\s+/).join(" ");
      debug2("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY2) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug2("comp", this);
    }
    parse(comp) {
      const r = this.options.loose ? re2[t2.COMPARATORLOOSE] : re2[t2.COMPARATOR];
      const m = comp.match(r);
      if (!m) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m[1] !== void 0 ? m[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m[2]) {
        this.semver = ANY2;
      } else {
        this.semver = new SemVer3(m[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version2) {
      debug2("Comparator.test", version2, this.options.loose);
      if (this.semver === ANY2 || version2 === ANY2) {
        return true;
      }
      if (typeof version2 === "string") {
        try {
          version2 = new SemVer3(version2, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp2(version2, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator2)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Range2(comp.value, options).test(this.value);
      } else if (comp.operator === "") {
        if (comp.value === "") {
          return true;
        }
        return new Range2(this.value, options).test(comp.semver);
      }
      options = parseOptions2(options);
      if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
        return false;
      }
      if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
        return true;
      }
      if (cmp2(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
        return true;
      }
      if (cmp2(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  }
  comparator = Comparator2;
  const parseOptions2 = parseOptions_1;
  const { safeRe: re2, t: t2 } = reExports;
  const cmp2 = cmp_1;
  const debug2 = debug_1;
  const SemVer3 = semver;
  const Range2 = requireRange();
  return comparator;
}
const Range$9 = requireRange();
const satisfies$4 = (version2, range2, options) => {
  try {
    range2 = new Range$9(range2, options);
  } catch (er) {
    return false;
  }
  return range2.test(version2);
};
var satisfies_1 = satisfies$4;
const Range$8 = requireRange();
const toComparators$1 = (range2, options) => new Range$8(range2, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
var toComparators_1 = toComparators$1;
const SemVer$4 = semver;
const Range$7 = requireRange();
const maxSatisfying$1 = (versions2, range2, options) => {
  let max2 = null;
  let maxSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$7(range2, options);
  } catch (er) {
    return null;
  }
  versions2.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!max2 || maxSV.compare(v) === -1) {
        max2 = v;
        maxSV = new SemVer$4(max2, options);
      }
    }
  });
  return max2;
};
var maxSatisfying_1 = maxSatisfying$1;
const SemVer$3 = semver;
const Range$6 = requireRange();
const minSatisfying$1 = (versions2, range2, options) => {
  let min2 = null;
  let minSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$6(range2, options);
  } catch (er) {
    return null;
  }
  versions2.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!min2 || minSV.compare(v) === 1) {
        min2 = v;
        minSV = new SemVer$3(min2, options);
      }
    }
  });
  return min2;
};
var minSatisfying_1 = minSatisfying$1;
const SemVer$2 = semver;
const Range$5 = requireRange();
const gt$2 = gt_1;
const minVersion$1 = (range2, loose) => {
  range2 = new Range$5(range2, loose);
  let minver = new SemVer$2("0.0.0");
  if (range2.test(minver)) {
    return minver;
  }
  minver = new SemVer$2("0.0.0-0");
  if (range2.test(minver)) {
    return minver;
  }
  minver = null;
  for (let i = 0; i < range2.set.length; ++i) {
    const comparators = range2.set[i];
    let setMin = null;
    comparators.forEach((comparator2) => {
      const compver = new SemVer$2(comparator2.semver.version);
      switch (comparator2.operator) {
        case ">":
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }
          compver.raw = compver.format();
        case "":
        case ">=":
          if (!setMin || gt$2(compver, setMin)) {
            setMin = compver;
          }
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${comparator2.operator}`);
      }
    });
    if (setMin && (!minver || gt$2(minver, setMin))) {
      minver = setMin;
    }
  }
  if (minver && range2.test(minver)) {
    return minver;
  }
  return null;
};
var minVersion_1 = minVersion$1;
const Range$4 = requireRange();
const validRange$1 = (range2, options) => {
  try {
    return new Range$4(range2, options).range || "*";
  } catch (er) {
    return null;
  }
};
var valid$1 = validRange$1;
const SemVer$1 = semver;
const Comparator$2 = requireComparator();
const { ANY: ANY$1 } = Comparator$2;
const Range$3 = requireRange();
const satisfies$3 = satisfies_1;
const gt$1 = gt_1;
const lt$1 = lt_1;
const lte$1 = lte_1;
const gte$1 = gte_1;
const outside$3 = (version2, range2, hilo, options) => {
  version2 = new SemVer$1(version2, options);
  range2 = new Range$3(range2, options);
  let gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case ">":
      gtfn = gt$1;
      ltefn = lte$1;
      ltfn = lt$1;
      comp = ">";
      ecomp = ">=";
      break;
    case "<":
      gtfn = lt$1;
      ltefn = gte$1;
      ltfn = gt$1;
      comp = "<";
      ecomp = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (satisfies$3(version2, range2, options)) {
    return false;
  }
  for (let i = 0; i < range2.set.length; ++i) {
    const comparators = range2.set[i];
    let high = null;
    let low = null;
    comparators.forEach((comparator2) => {
      if (comparator2.semver === ANY$1) {
        comparator2 = new Comparator$2(">=0.0.0");
      }
      high = high || comparator2;
      low = low || comparator2;
      if (gtfn(comparator2.semver, high.semver, options)) {
        high = comparator2;
      } else if (ltfn(comparator2.semver, low.semver, options)) {
        low = comparator2;
      }
    });
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }
    if ((!low.operator || low.operator === comp) && ltefn(version2, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version2, low.semver)) {
      return false;
    }
  }
  return true;
};
var outside_1 = outside$3;
const outside$2 = outside_1;
const gtr$1 = (version2, range2, options) => outside$2(version2, range2, ">", options);
var gtr_1 = gtr$1;
const outside$1 = outside_1;
const ltr$1 = (version2, range2, options) => outside$1(version2, range2, "<", options);
var ltr_1 = ltr$1;
const Range$2 = requireRange();
const intersects$1 = (r1, r2, options) => {
  r1 = new Range$2(r1, options);
  r2 = new Range$2(r2, options);
  return r1.intersects(r2, options);
};
var intersects_1 = intersects$1;
const satisfies$2 = satisfies_1;
const compare$2 = compare_1;
var simplify = (versions2, range2, options) => {
  const set2 = [];
  let first = null;
  let prev = null;
  const v = versions2.sort((a, b) => compare$2(a, b, options));
  for (const version2 of v) {
    const included = satisfies$2(version2, range2, options);
    if (included) {
      prev = version2;
      if (!first) {
        first = version2;
      }
    } else {
      if (prev) {
        set2.push([first, prev]);
      }
      prev = null;
      first = null;
    }
  }
  if (first) {
    set2.push([first, null]);
  }
  const ranges = [];
  for (const [min2, max2] of set2) {
    if (min2 === max2) {
      ranges.push(min2);
    } else if (!max2 && min2 === v[0]) {
      ranges.push("*");
    } else if (!max2) {
      ranges.push(`>=${min2}`);
    } else if (min2 === v[0]) {
      ranges.push(`<=${max2}`);
    } else {
      ranges.push(`${min2} - ${max2}`);
    }
  }
  const simplified = ranges.join(" || ");
  const original = typeof range2.raw === "string" ? range2.raw : String(range2);
  return simplified.length < original.length ? simplified : range2;
};
const Range$1 = requireRange();
const Comparator$1 = requireComparator();
const { ANY } = Comparator$1;
const satisfies$1 = satisfies_1;
const compare$1 = compare_1;
const subset$1 = (sub, dom, options = {}) => {
  if (sub === dom) {
    return true;
  }
  sub = new Range$1(sub, options);
  dom = new Range$1(dom, options);
  let sawNonNull = false;
  OUTER:
    for (const simpleSub of sub.set) {
      for (const simpleDom of dom.set) {
        const isSub = simpleSubset(simpleSub, simpleDom, options);
        sawNonNull = sawNonNull || isSub !== null;
        if (isSub) {
          continue OUTER;
        }
      }
      if (sawNonNull) {
        return false;
      }
    }
  return true;
};
const minimumVersionWithPreRelease = [new Comparator$1(">=0.0.0-0")];
const minimumVersion = [new Comparator$1(">=0.0.0")];
const simpleSubset = (sub, dom, options) => {
  if (sub === dom) {
    return true;
  }
  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true;
    } else if (options.includePrerelease) {
      sub = minimumVersionWithPreRelease;
    } else {
      sub = minimumVersion;
    }
  }
  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true;
    } else {
      dom = minimumVersion;
    }
  }
  const eqSet = /* @__PURE__ */ new Set();
  let gt2, lt2;
  for (const c of sub) {
    if (c.operator === ">" || c.operator === ">=") {
      gt2 = higherGT(gt2, c, options);
    } else if (c.operator === "<" || c.operator === "<=") {
      lt2 = lowerLT(lt2, c, options);
    } else {
      eqSet.add(c.semver);
    }
  }
  if (eqSet.size > 1) {
    return null;
  }
  let gtltComp;
  if (gt2 && lt2) {
    gtltComp = compare$1(gt2.semver, lt2.semver, options);
    if (gtltComp > 0) {
      return null;
    } else if (gtltComp === 0 && (gt2.operator !== ">=" || lt2.operator !== "<=")) {
      return null;
    }
  }
  for (const eq2 of eqSet) {
    if (gt2 && !satisfies$1(eq2, String(gt2), options)) {
      return null;
    }
    if (lt2 && !satisfies$1(eq2, String(lt2), options)) {
      return null;
    }
    for (const c of dom) {
      if (!satisfies$1(eq2, String(c), options)) {
        return false;
      }
    }
    return true;
  }
  let higher, lower;
  let hasDomLT, hasDomGT;
  let needDomLTPre = lt2 && !options.includePrerelease && lt2.semver.prerelease.length ? lt2.semver : false;
  let needDomGTPre = gt2 && !options.includePrerelease && gt2.semver.prerelease.length ? gt2.semver : false;
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt2.operator === "<" && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }
  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
    hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
    if (gt2) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }
      if (c.operator === ">" || c.operator === ">=") {
        higher = higherGT(gt2, c, options);
        if (higher === c && higher !== gt2) {
          return false;
        }
      } else if (gt2.operator === ">=" && !satisfies$1(gt2.semver, String(c), options)) {
        return false;
      }
    }
    if (lt2) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }
      if (c.operator === "<" || c.operator === "<=") {
        lower = lowerLT(lt2, c, options);
        if (lower === c && lower !== lt2) {
          return false;
        }
      } else if (lt2.operator === "<=" && !satisfies$1(lt2.semver, String(c), options)) {
        return false;
      }
    }
    if (!c.operator && (lt2 || gt2) && gtltComp !== 0) {
      return false;
    }
  }
  if (gt2 && hasDomLT && !lt2 && gtltComp !== 0) {
    return false;
  }
  if (lt2 && hasDomGT && !gt2 && gtltComp !== 0) {
    return false;
  }
  if (needDomGTPre || needDomLTPre) {
    return false;
  }
  return true;
};
const higherGT = (a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
};
const lowerLT = (a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
};
var subset_1 = subset$1;
const internalRe = reExports;
const constants = constants$1;
const SemVer2 = semver;
const identifiers = identifiers$1;
const parse = parse_1;
const valid = valid_1;
const clean = clean_1;
const inc = inc_1;
const diff = diff_1;
const major = major_1;
const minor = minor_1;
const patch = patch_1;
const prerelease = prerelease_1;
const compare = compare_1;
const rcompare = rcompare_1;
const compareLoose = compareLoose_1;
const compareBuild = compareBuild_1;
const sort = sort_1;
const rsort = rsort_1;
const gt = gt_1;
const lt = lt_1;
const eq = eq_1;
const neq = neq_1;
const gte = gte_1;
const lte = lte_1;
const cmp = cmp_1;
const coerce = coerce_1;
const Comparator = requireComparator();
const Range = requireRange();
const satisfies = satisfies_1;
const toComparators = toComparators_1;
const maxSatisfying = maxSatisfying_1;
const minSatisfying = minSatisfying_1;
const minVersion = minVersion_1;
const validRange = valid$1;
const outside = outside_1;
const gtr = gtr_1;
const ltr = ltr_1;
const intersects = intersects_1;
const simplifyRange = simplify;
const subset = subset_1;
({
  parse,
  valid,
  clean,
  inc,
  diff,
  major,
  minor,
  patch,
  prerelease,
  compare,
  rcompare,
  compareLoose,
  compareBuild,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
  SemVer: SemVer2,
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: constants.RELEASE_TYPES,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers
});
const PACKAGE_JSON_NAME = "package.json";
const PNPM_WORKSPACE_FILE_NAME = "pnpm-workspace.yaml";
const NODE_MODULES_DIRECTORY_NAME = "node_modules";
const normalizeGetRootPackageJsonOptions = (options) => {
  return {
    ...normalizeCwdOption(options),
    ...normalizeLoggerOption(options)
  };
};
const collectPackageJsonPathsUpDirectoryTree = (cwd = process.cwd()) => {
  return collectPackageJsonPathsUpDirectoryTreeInternal(cwd);
};
const collectPackageJsonPathsUpDirectoryTreeInternal = (cwd, collection2 = []) => {
  const path2 = normalize$1(cwd);
  if (existsSync(join$1(path2, PACKAGE_JSON_NAME))) {
    collection2.unshift(path2);
  }
  const parentPath = join$1(path2, "..");
  if (parentPath !== path2) {
    return collectPackageJsonPathsUpDirectoryTreeInternal(parentPath, collection2);
  }
  return collection2;
};
const getWorkspaceRoot = (cwd = process.cwd()) => {
  return collectPackageJsonPathsUpDirectoryTree(cwd)[0];
};
const normalizePackageJsonWorkspacesField = (packageJsonWorkspaces) => {
  if (Array.isArray(packageJsonWorkspaces)) {
    return packageJsonWorkspaces;
  } else if (packageJsonWorkspaces) {
    return [
      ...packageJsonWorkspaces.packages ?? [],
      ...packageJsonWorkspaces.nohoist ?? []
    ];
  } else {
    return [];
  }
};
const getRootPackageJson = async (rawOptions) => {
  const options = normalizeGetRootPackageJsonOptions(rawOptions);
  const rootWorkspace = getWorkspaceRoot(options.cwd);
  if (!rootWorkspace) {
    options.logger.error("No package json was found! Cannot collect workspace packages!");
    return void 0;
  }
  const packageJsonPath = join$1(rootWorkspace, PACKAGE_JSON_NAME);
  const packageJson = await readJson(packageJsonPath).catch(() => void 0);
  if (!packageJson) {
    options.logger.error("Failed to read packageJson!", packageJsonPath);
    return void 0;
  }
  let workspaces = normalizePackageJsonWorkspacesField(packageJson.workspaces);
  const pnpmWorkspace = await readYaml(
    join$1(rootWorkspace, PNPM_WORKSPACE_FILE_NAME)
  );
  if (pnpmWorkspace == null ? void 0 : pnpmWorkspace.packages) {
    workspaces = [...workspaces, ...pnpmWorkspace.packages];
  }
  return {
    packageJson,
    packageKind: "root",
    workspacePackagePatterns: workspaces,
    packageJsonPath,
    packagePath: rootWorkspace,
    packagePathFromRootPackage: "."
  };
};
const normalizeCollectWorkspacePackagesOptions = (options) => {
  var _a;
  return {
    ...normalizeGetRootPackageJsonOptions(options),
    onlyWorkspaceRoot: (options == null ? void 0 : options.onlyWorkspaceRoot) ?? false,
    skipWorkspaceRoot: (options == null ? void 0 : options.skipWorkspaceRoot) ?? false,
    dependencyCriteria: ((_a = options == null ? void 0 : options.dependencyCriteria) == null ? void 0 : _a.map(normalizeRegExpLikeToRegExp)) ?? [],
    packageJsonMatcher: options == null ? void 0 : options.packageJsonMatcher
  };
};
const collectWorkspacePackages = async (rawOptions) => {
  const options = normalizeCollectWorkspacePackagesOptions(rawOptions);
  const rootPackage = await getRootPackageJson(options);
  if (!rootPackage) {
    options.logger.error("No package json was found! Cannot collect workspace packages!");
    return [];
  }
  let result = [];
  if (rootPackage.workspacePackagePatterns.length > 0) {
    const paths = await globby(rootPackage.workspacePackagePatterns, {
      gitignore: true,
      onlyDirectories: true,
      ignore: [NODE_MODULES_DIRECTORY_NAME],
      absolute: true,
      cwd: rootPackage.packagePath
    });
    const subPackages = await asyncFilterMap(paths, (path2) => {
      const packageJsonPath = join$1(path2, PACKAGE_JSON_NAME);
      return readJson(packageJsonPath).catch(() => void 0).then(
        (packageJson) => packageJson ? {
          packageKind: "regular",
          packageJson,
          packagePath: path2,
          packagePathFromRootPackage: relative(rootPackage.packagePath, path2),
          packageJsonPath
        } : void 0
      );
    });
    if (!options.onlyWorkspaceRoot) {
      result.push(...subPackages);
    }
  }
  if (!options.skipWorkspaceRoot) {
    result.unshift(rootPackage);
  }
  if (options.packageJsonMatcher) {
    result = result.filter(
      (relativePackage) => match(relativePackage.packageJson, options.packageJsonMatcher)
    );
  }
  if (options.dependencyCriteria.length > 0) {
    result = result.filter((relativePackage) => {
      const packageDependencies = [
        ...Object.keys(relativePackage.packageJson.dependencies ?? {}),
        ...Object.keys(relativePackage.packageJson.devDependencies ?? {})
      ];
      return options.dependencyCriteria.every(
        (dependencyCriteria) => packageDependencies.some((dependency) => dependencyCriteria.test(dependency))
      );
    });
  }
  return result;
};
const collectPublicPackageNames = async () => {
  try {
    const publicPackages = await collectWorkspacePackages({
      skipWorkspaceRoot: true,
      // Will let single package repos through, in monorepos, you don't want to publish the workspace itself
      packageJsonMatcher: {
        private: false
        // A package is public when it's explicitily not private.
      }
    });
    return publicPackages.map((pkg) => pkg.packageJson.name).filter((name) => !!name);
  } catch {
    coreExports.error("error happened while interpreting the workspace!");
    return void 0;
  }
};
void (async () => {
  const publicPackageNames = await collectPublicPackageNames();
  if (publicPackageNames) {
    if (publicPackageNames.length > 0) {
      coreExports.startGroup("public packages found:");
      for (const name of publicPackageNames) {
        coreExports.info(name);
      }
      coreExports.endGroup();
      coreExports.setOutput("publicPackageNames", publicPackageNames);
    } else {
      coreExports.info("There are no public packages within this repository");
    }
  }
})();
export {
  collectPublicPackageNames
};
