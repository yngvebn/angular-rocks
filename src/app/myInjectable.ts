export class IMyInjectable{
	getText(): string{ throw new Error("Not implemented");}
}

export class MyInjectableImplementation extends IMyInjectable
{
	getText(): string{
		return "Hello injectable!";
	}
}

export class MyOtherInjectableImplementation extends IMyInjectable
{
	getText(): string{
		return "Hello other injectable!";
	}
}

export class MyThirdInjectableImplementation extends IMyInjectable
{
	getText(): string{
		return "And this is my third injectable!";
	}
}