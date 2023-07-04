import 'core-js/features/structured-clone.js';

import { endGroup, error, info, setOutput, startGroup } from '@actions/core';
import { collectWorkspacePackages } from '@alexaegis/workspace-tools';

export const collectPublicPackageNames = async (): Promise<string[] | undefined> => {
	try {
		const publicPackages = await collectWorkspacePackages({
			skipWorkspaceRoot: true, // Will let single package repos through, in monorepos, you don't want to publish the workspace itself
			packageJsonMatcher: {
				private: false, // A package is public when it's explicitily not private.
			},
		});

		return publicPackages
			.map((pkg) => pkg.packageJson.name)
			.filter((name): name is string => !!name);
	} catch {
		error('error happened while interpreting the workspace!');
		return undefined;
	}
};

void (async () => {
	const publicPackageNames = await collectPublicPackageNames();

	if (publicPackageNames) {
		if (publicPackageNames.length > 0) {
			startGroup('public packages found:');
			for (const name of publicPackageNames) {
				info(name);
			}
			endGroup();
			setOutput('publicPackageNames', publicPackageNames);
		} else {
			info('There are no public packages within this repository');
		}
	}
})();
